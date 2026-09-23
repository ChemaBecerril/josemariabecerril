import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import BannerTeaching from '../components/BannerTeaching';

const Teaching = (props) => (
    <Layout>
        <Helmet>
            <title>Teaching & Events | Josemaría Becerril</title>
            <meta name="description" content="Teaching & Events | Josemaría Becerril" />
            <style>{`
                body, h1, h2, h3, h4, h5, h6, p, a, div, span, ul, li {
                    font-family: 'Helvetica', sans-serif;
                    text-align: left;
                }
                .content {
                    background: transparent;
                    padding: 0;
                    list-style-type: none;
                }
                .content li {
                    margin-bottom: 1.5em;
                }
                .content h3 {
                    margin: 0 0 0.5em 0;
                }
                .content h4 {
                    margin: 0 0 1em 0;
                }
                .content p {
                    margin: 0 0 1em 0;
                }
                .content .button {
                    background-color: #000;
                    color: #fff;
                    padding: 0.5em 1em;
                    text-decoration: none;
                    border-radius: 5px;
                }
                .content .button:hover {
                    background-color: #333;
                }
                ul.actions {
                    padding-left: 0;
                }
            `}</style>
        </Helmet>

        <BannerTeaching />

        <div id="main" className="teaching">
            <section id="one" className="spotlights">
                <header className="major">
                    <h2>Teaching</h2>
                </header>
                <ul className="content">
                    <li>
                        <div className="inner">
                            <header className="major">
                                <h3>Content to come</h3>
                            </header>
                        </div>
                    </li>
                </ul>
                <header className="major">
                    <h2>Events</h2>
                </header>
                <ul className="content">
                    <li>
                        <div className="inner">
                            <header className="major">
                                <h3>Content to come</h3>
                            </header>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </Layout>
);

export default Teaching;
