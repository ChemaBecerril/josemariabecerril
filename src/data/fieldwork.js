// Fieldwork archive — content for src/pages/fieldwork.js
//
// Each object below is one fragment on the Fieldwork page. The page shows
// them in the order they appear in this list: to reorder, move the objects;
// to remove one, delete it; to add one, copy an existing object and edit it.
//
// Media files go in the folder static/fieldwork/. In `src`, write only the
// file name (e.g. 'milpa-2023.jpg'). A full URL (https://...) also works.
//
// Fields:
//   type      'image' | 'video' | 'embed'   (embed = YouTube/Vimeo player URL)
//   src       file name in static/fieldwork/, or a full URL
//   poster    (video only, optional) image shown before the video plays
//   autoplay  (video only, optional) true = muted loop that plays while visible
//   alt       (image only) short description of the image for screen readers
//   layout    (optional) 'left' | 'right' | 'wide'. Without it, fragments
//             alternate left and right. 'wide' puts the text under the media.
//   title     (optional) short title
//   date      (optional) free text, e.g. 'March 2023' or '2022–2023'
//   location  (optional) free text
//   text      a string, or a list of strings for several paragraphs
//   credit    (optional) photo/video credit line

const fieldwork = [
    {
        type: 'image',
        src: 'placeholder-01.jpg',
        alt: 'Placeholder image',
        title: 'Placeholder title',
        date: 'Month Year',
        location: 'Place, region',
        text: 'Placeholder text. Two or three sentences situating what the image shows: the moment, the people or beings involved, the technique or gesture at stake, and why it matters for the research.',
    },
    {
        type: 'image',
        src: 'placeholder-02.jpg',
        alt: 'Placeholder image',
        title: 'Placeholder title',
        date: 'Month Year',
        location: 'Place, region',
        text: 'Placeholder text. A short note on this fragment of fieldwork.',
    },
    {
        type: 'video',
        src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        poster: '',
        autoplay: false,
        title: 'Placeholder video',
        date: 'Month Year',
        location: 'Place, region',
        text: 'Placeholder text for a video. This video is a public-domain sample used only to show how video fragments behave.',
    },
    {
        type: 'image',
        src: 'placeholder-03.jpg',
        alt: 'Placeholder image',
        layout: 'wide',
        title: 'Placeholder title (wide layout)',
        date: 'Month Year',
        location: 'Place, region',
        text: [
            'Placeholder text. This fragment uses the wide layout: the media takes the full width and the text sits underneath.',
            'A second paragraph, to show that the text can be split in several paragraphs when needed.',
        ],
    },
    {
        type: 'image',
        src: 'placeholder-04.jpg',
        alt: 'Placeholder image',
        title: 'Placeholder title',
        date: 'Month Year',
        text: 'Placeholder text. The title, date and location are optional: this fragment has no location.',
    },
    {
        type: 'image',
        src: 'placeholder-05.jpg',
        alt: 'Placeholder image',
        text: 'Placeholder text. This fragment has only an image and a short text.',
    },
    {
        type: 'image',
        src: 'placeholder-06.jpg',
        alt: 'Placeholder image',
        title: 'Placeholder title',
        date: 'Month Year',
        location: 'Place, region',
        text: 'Placeholder text.',
        credit: 'Photo: Name',
    },
]

export default fieldwork
