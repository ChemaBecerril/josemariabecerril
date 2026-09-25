import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import BannerFieldwork from '../components/BannerFieldwork';
import FieldworkArchive from '../components/FieldworkArchive';

// The images, videos and texts shown on this page are listed in
// src/data/fieldwork.js. Media files go in static/fieldwork/.
import fragments from '../data/fieldwork';

const Fieldwork = (props) => (
    <Layout>
        <Helmet>
            <title>Fieldwork | Josemaría Becerril</title>
            <meta name="description" content="Fieldwork | Josemaría Becerril" />
            <style>{`
                body, h1, h2, h3, h4, h5, h6, p, a, div, span, ul, li {
                    font-family: 'Helvetica', sans-serif;
                    text-align: left;
                }
            `}</style>
        </Helmet>

        <BannerFieldwork />

        <div id="main" className="fieldwork">
            <section id="one">
                <header className="major">
                    <h2>Fragments from the field</h2>
                </header>
                <p className="fragments-intro">Placeholder introduction. One or two sentences presenting what follows: images and videos from fieldwork, each with a short note on the moment, place or aspect of the research it shows.</p>

                <FieldworkArchive items={fragments} />
            </section>
        </div>
    </Layout>
);

export default Fieldwork;
