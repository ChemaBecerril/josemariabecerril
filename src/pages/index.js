import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import about from '../assets/images/about.jpg'
import articles from '../assets/images/articles.jpg'
import fieldwork from '../assets/images/fieldwork.jpg'
import events from '../assets/images/events.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Josemaría Becerril"
                    meta={[
                        { name: 'description', content: 'Josemaría Becerril' },
                        { name: 'keywords', content: 'Political scientist & anthropologist' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${about})`}}>
                            <header className="major">
                                <h3>About</h3>
                                <p>A brief description of me</p>
                            </header>
                            <Link to="/about" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${articles})`}}>
                            <header className="major">
                                <h3>Articles</h3>
                                <p>Ethnographic research intended for public audiences</p>
                            </header>
                            <Link to="/articles" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${fieldwork})`}}>
                            <header className="major">
                                <h3>Fieldwork</h3>
                                <p>Some of my fieldwork</p>
                            </header>
                            <Link to="/" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${events})`}}>
                            <header className="major">
                                <h3>Events</h3>
                                <p>Events I have participated in</p>
                            </header>
                            <Link to="/" className="link primary"></Link>
                        </article>
                    </section>                    
                </div>

            </Layout>
        )
    }
}

export default HomeIndex