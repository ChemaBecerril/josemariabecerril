import React from 'react'
import { withPrefix } from 'gatsby'

// Renders the list in src/data/fieldwork.js as a sequence of fragments.
// Fragments fade in as they enter the viewport; a numbered index on the
// right follows the fragment currently in the middle of the screen.

const pad = (n) => String(n).padStart(2, '0')

// Turns [words](https://...) inside a text into a link opening in a new tab.
const withLinks = (text) =>
    text.split(/(\[[^\]]+\]\([^)\s]+\))/g).map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/)
        return m ? <a key={i} href={m[2]} target="_blank" rel="noopener noreferrer">{m[1]}</a> : part
    })

const resolveSrc = (src) =>
    !src ? '' : /^(https?:)?\/\//.test(src) ? src : withPrefix(`/fieldwork/${src}`)

const Media = ({ item }) => {
    if (item.type === 'video') {
        const autoplay = !!item.autoplay
        return (
            <video
                src={resolveSrc(item.src)}
                poster={item.poster ? resolveSrc(item.poster) : undefined}
                controls={!autoplay}
                muted={autoplay}
                loop={autoplay}
                playsInline
                preload="metadata"
                data-autoplay={autoplay ? 'true' : undefined}
            />
        )
    }
    if (item.type === 'embed') {
        return (
            <div className="fragment-embed">
                <iframe
                    src={item.src}
                    title={item.title || 'Fieldwork video'}
                    loading="lazy"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                />
            </div>
        )
    }
    return <img src={resolveSrc(item.src)} alt={item.alt || ''} loading="lazy" />
}

const Fragment = ({ item, index }) => {
    const layout = item.layout || (index % 2 === 0 ? 'left' : 'right')
    const meta = [item.date, item.location].filter(Boolean)
    const paragraphs = Array.isArray(item.text) ? item.text : [item.text].filter(Boolean)

    return (
        <article id={`fragment-${pad(index + 1)}`} className={`fragment fragment-${layout}`} data-index={index}>
            <div className="fragment-media">
                <Media item={item} />
            </div>
            <div className="fragment-caption">
                <span className="fragment-number">{pad(index + 1)}</span>
                {meta.length > 0 && <p className="fragment-meta">{meta.join(' · ')}</p>}
                {item.title && <h3>{item.title}</h3>}
                {paragraphs.map((p, i) => <p key={i}>{withLinks(p)}</p>)}
                {item.credit && <p className="fragment-credit">{item.credit}</p>}
            </div>
        </article>
    )
}

class FieldworkArchive extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ready: false, active: 0, inView: false }
        this.root = React.createRef()
    }

    componentDidMount() {
        const root = this.root.current
        if (!root || typeof IntersectionObserver === 'undefined') return

        this.setState({ ready: true })
        const fragments = Array.from(root.querySelectorAll('.fragment'))

        // Reveal each fragment once, and play/pause videos as they enter/leave.
        this.revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const video = entry.target.querySelector('video')
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                    if (video && video.dataset.autoplay) video.play().catch(() => {})
                } else if (video) {
                    video.pause()
                }
            })
        }, { threshold: 0.15 })

        // Track the fragment crossing the middle of the viewport.
        this.activeObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) this.setState({ active: Number(entry.target.dataset.index) })
            })
        }, { rootMargin: '-50% 0px -50% 0px' })

        // Show the index only while the archive is on screen.
        this.sectionObserver = new IntersectionObserver((entries) => {
            this.setState({ inView: entries[0].isIntersecting })
        }, { rootMargin: '-40% 0px -40% 0px' })

        fragments.forEach((el) => {
            this.revealObserver.observe(el)
            this.activeObserver.observe(el)
        })
        this.sectionObserver.observe(root)
    }

    componentWillUnmount() {
        ;[this.revealObserver, this.activeObserver, this.sectionObserver].forEach((o) => o && o.disconnect())
    }

    scrollTo(event, index) {
        const el = document.getElementById(`fragment-${pad(index + 1)}`)
        if (!el) return
        event.preventDefault()
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    render() {
        const { items } = this.props
        const { ready, active, inView } = this.state

        return (
            <div ref={this.root} className={`fragments ${ready ? 'is-ready' : ''}`}>
                {items.map((item, i) => <Fragment key={i} item={item} index={i} />)}

                <nav className={`fragments-index ${inView ? 'is-visible' : ''}`} aria-label="Fieldwork fragments">
                    <ol>
                        {items.map((item, i) => (
                            <li key={i} className={i === active ? 'is-active' : ''}>
                                <a href={`#fragment-${pad(i + 1)}`} onClick={(e) => this.scrollTo(e, i)} title={item.title || ''}>
                                    {pad(i + 1)}
                                </a>
                            </li>
                        ))}
                    </ol>
                    <span className="fragments-count">{pad(active + 1)} / {pad(items.length)}</span>
                </nav>
            </div>
        )
    }
}

export default FieldworkArchive
