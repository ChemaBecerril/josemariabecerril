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
                .content ul.courses {
                    list-style-type: disc;
                    padding-left: 1.5em;
                    margin: 0;
                }
                .content ul.courses li {
                    margin-bottom: 0.5em;
                }
            `}</style>
        </Helmet>

        <BannerTeaching />

        <div id="main" className="teaching">
            <section id="one" className="spotlights">
                <header className="major">
                    <h2>Teaching Experience</h2>
                </header>
                <ul className="content">
                    <li>
                        <div className="inner">
                            <header className="major">
                                <h3>2026–2027 | Lecturer in Social and Cultural Anthropology</h3>
                                <h4>EHESS, Department of Anthropology (Paris, France)</h4>
                            </header>
                            <p><em>Demi-ATER, 96 teaching hours</em></p>
                            <ul className="courses">
                                <li><strong>Ethnographic Writing Workshop</strong> – Graduate seminar</li>
                                <li><strong>Debates and Controversies in Contemporary Anthropology</strong> – Graduate lecture course</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="inner">
                            <header className="major">
                                <h3>July 2026 | Instructor</h3>
                                <h4>Leuphana University (Lüneburg, Germany)</h4>
                            </header>
                            <p><em>28 teaching hours, co-taught with Rafaëlle Hassine</em></p>
                            <ul className="courses">
                                <li><strong>Commodities: Anthropological Perspectives on Market Practices</strong> – Undergraduate seminar</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="inner">
                            <header className="major">
                                <h3>2025–2026 | Instructor</h3>
                                <h4>Université Jean Jaurès (Toulouse, France)</h4>
                            </header>
                            <p><em>58 teaching hours</em></p>
                            <ul className="courses">
                                <li><strong>Introduction to Anthropology</strong> – Undergraduate seminar and lecture course</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="inner">
                            <header className="major">
                                <h3>2024–2025 | Lecturer in Anthropology of Territorial Issues and Environmental Transitions</h3>
                                <h4>Université Côte d’Azur (Nice, France)</h4>
                            </header>
                            <p><em>Demi-ATER, 96 teaching hours</em></p>
                            <ul className="courses">
                                <li><strong>Social Sciences and the Environment: Political Ecology</strong> – Graduate seminar</li>
                                <li><strong>Societies and Sustainable Environments</strong> – Undergraduate lecture course</li>
                                <li><strong>History of Interculturality</strong> – Undergraduate lecture course</li>
                                <li><strong>Ethnographic Research Methods</strong> – Graduate seminar</li>
                                <li><strong>Introduction to Fieldwork</strong> – Undergraduate seminar</li>
                                <li><strong>Supervision of Fieldwork in the City of Carros</strong> – Undergraduate workshop</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="inner">
                            <header className="major">
                                <h3>2023–2024 | Instructor</h3>
                                <h4>Université Jean Jaurès (Toulouse, France)</h4>
                            </header>
                            <p><em>76.25 teaching hours</em></p>
                            <ul className="courses">
                                <li><strong>History of Anthropology</strong> – Undergraduate seminar</li>
                                <li><strong>Developing a Research Project II: The Ethnographic Interview</strong> – Undergraduate seminar</li>
                                <li><strong>Anthropology of Nature</strong> – Undergraduate guest lecture</li>
                                <li><strong>Anthropology, History and Memory</strong> – Graduate guest lecture</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="inner">
                            <header className="major">
                                <h3>2022–2023 | Instructor</h3>
                                <h4>Université Jean Jaurès (Toulouse, France)</h4>
                            </header>
                            <p><em>50.5 teaching hours</em></p>
                            <ul className="courses">
                                <li><strong>History of Anthropology</strong> – Undergraduate seminar</li>
                                <li><strong>Developing a Research Project II: The Ethnographic Interview</strong> – Undergraduate seminar</li>
                                <li><strong>Anthropology, History and Memory</strong> – Graduate guest lecture</li>
                            </ul>
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
