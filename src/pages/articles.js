import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import BannerArticles from '../components/BannerArticles';

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Articles | Josemaría Becerril</title>
            <meta name="description" content="Articles | Josemaría Becerril" />
            <style>{`
                body, h1, h2, h3, h4, h5, h6, p, a, div, span, ul, li {
                    font-family: 'Helvetica', sans-serif;
                    text-align: left;
                }
                .content {
                    padding: 0 1em;
                }
            `}</style>
        </Helmet>

        <BannerArticles />

        <div id="main">
            <section id="one" className="spotlights">
                <header className="major">
                    <h2>Research Articles</h2>
                </header>
                <section>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Disappearing in the Mesh of the State:</h3>
                                <h4>The Erasure of Corpses’ Identities in Mexico City’s Forensic Government of the Dead</h4>
                            </header>
                            <p>This article shows how Mexico’s forensic institutions erase the identities of the corpses they recover and dispose of the bodies that the families of the disappeared seek during the Drug War. Based on ethnographic fieldwork among human identification specialists at the Mexico City morgue, I analyze the role of ordinary practices, bureaucratic routines, and moral attitudes in the administrative disappearance of corpses at the heart of the government of the dead in the country’s capital. The article explores the hypothesis that the discretionary power that “street-level bureaucrats” of the government of the dead (experts called “peritos”) exercise over the fate of corpses makes their “second disappearance” possible, demonstrating thus that Mexico’s morgues function as “spaces of bureaucratic disappearance”.</p>
                            <ul className="actions">
                                <li><Link to="https://revues.mshparisnord.fr/chcp/index.php?id=674" className="button">Read more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Mexique: Une terre de disparu.e.s</h3>
                            </header>
                            <p>I contributed four texts to a book on the crisis of disappearances in Mexico based on my fieldwork with forensic experts in Mexico City. The first is an ethnographic analysis of the profiles of people exposed to disappearance; the second is a historical analysis of forensic identification techniques; the third is a micro-ethnography of the interactions between bureaucrats and relatives of the disappeared; and the fourth is an opening into the artistic practices of the mobilizations of relatives of the disappeared.</p>
                            <ul className="actions">
                                <li><Link to="https://omnibook.com/view/e31c6d6e-215d-4dd8-84a6-61797858f3f4/page/1" className="button">Read more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>The Frames of the Mexican Drug War:</h3>
                                <h4>Grievability, Sacrificial Loss, and Melancholia</h4>
                            </header>
                            <p>Judith Butler's works concerning the discursive practices used for legitimizing State violence offer a useful vantage point for exploring how the Mexican government has organized public representations of death during its ongoing Drug War. Following her insight that “frames of war” sustain a differential distribution of grievability, this article explores the discourse through which the government has presented poignant cases of carnage in order to highlight the usefulness of specific categories for sustaining and normalizing the war violence. By appropriating Butler's division between “grievable” and “un-grievable” subjects, this article complicates the understanding of the frames of war by showing that in Mexico they do not hide death but instead they allow for the exhibition of lost lives through sacrificial mourning. After showing the connections between the allocation of grievability, the quest for sovereignty and the instrumentalization of dead bodies, the article concludes by pointing towards the political possibilities of melancholia.</p>
                            <ul className="actions">
                                <li><Link to="https://www.cairn-int.info/abstract-E_RAI_076_0093--the-frames-of-the-mexican-drug-war.htm?contenu=resume" className="button">Read more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <header className="major">
                    <h2>Book Reviews</h2>
                </header>
                <section>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Review for American Ethnologist</h3>
                                <h4>L’aube s'est levée sur un mort: Violence armée et culture du pavot au Mexique [Dawn rose on a dead man: Armed violence and poppy cultivation in Mexico] By Adèle Blazquez. Paris: CNRS Éditions, 2022. 334 pp.</h4>
                            </header>
                            <ul className="actions">
                                <li><Link to="https://anthrosource.onlinelibrary.wiley.com/doi/10.1111/amet.13152" className="button">Read more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Review for L'Homme</h3>
                                <h4>Habiter le monde. Espaces, paysages et architectures chez les Hopi d’Arizona et les Lacandon du Chiapas [Inhabiting the world. Spaces, landscapes and architecture among the Hopi of Arizona and the Lacandon of Chiapas] By Patrick Pérez. La Roche-sur-Yon: Dépaysage, 2021. 300 pp.</h4>
                            </header>
                            <ul className="actions">
                                <li><Link to="https://journals.openedition.org/lhomme/42483" className="button">Read more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Review for Estudios Sociológicos</h3>
                                <h4>De Iguala a Ayotzinapa. La escena y el crimen [From Iguala to Ayotzinapa. The scene and the crime] By Fernando Escalante and Julián Canseco. Mexico City: El Colegio de México/Grano de Sal, 2019. 167 pp.</h4>
                            </header>
                            <ul className="actions">
                                <li><Link to="https://estudiossociologicos.colmex.mx/index.php/es/article/view/2179/1979" className="button">Read more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <header className="major">
                    <h2>Public Ethnography</h2>
                </header>
                <section>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>The Sharing Economy Comes to Mexico</h3>
                            </header>
                            <p>Mexico's neoliberal reforms have created fertile ground for exploitative "sharing-economy" apps to grow.</p>
                            <ul className="actions">
                                <li><Link to="https://nacla.org/article/sharing-economy-comes-mexico" className="button">Read more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Living in a Neoliberal Neighborhood</h3>
                            </header>
                            <p>Economic, political, and private interests in the dispute over gentrification.</p>
                            <ul className="actions">
                                <li><Link to="https://horizontal.mx/vivir-en-un-barrio-neoliberal/" className="button">Read more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Missing 43</h3>
                            </header>
                            <p>Within the activities of the Student Society of El Colegio de México, I participated in the collective that edited and wrote a compendium of texts on the forced disappearance of 43 students from the Isidro Burgos Rural Normal School of Ayotzinapa on the night of September 26, 2014 in Iguala, Guerrero. I contributed a text on the connections between gold extractive economies and mass violence in the region of the disappearance.</p>
                            <ul className="actions">
                                <li><Link to="https://laoms.org/descargar-43-voces-por-ayotzinapa/" className="button">Read more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Who is Monsieur Macron?</h3>
                            </header>
                            <p>Emmanuel Macron presents himself to the French and the world opinion as a young, progressive, and liberal force whose victory would mean a double triumph: against Trump's xenophobic populism and the destruction of the European Union, embodied in Le Pen. Is Macron the answer?</p>
                            <ul className="actions">
                                <li><Link to="https://horizontal.mx/quien-es-monsieur-macron/" className="button">Read more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>On the Gentrification of Colonia Juárez 111 Years After Its Emergence</h3>
                            </header>
                            <p>In 1906, Colonia Juárez emerged as the result of a business deal among friends. This was the name given to the urban triangle that had been developed in the previous decades through concessions between the Porfirian government and the business elite of the time. From its origins, Juárez was an economic project rather than an urbanistic one; the main objective of the Porfirian state had been to expand the reaches of the real estate market over agricultural areas, the livelihood of indigenous people and peasants, to allow private profit and speculation to wealthy favorites of the regime, valuing investments over any social consideration. Thus, the state's large real estate projects were aimed at facilitating the growth of exclusive colonies: the beautification of Paseo de la Reforma by public funds facilitated the profits from the subdivision of the adjacent colony, money that would end up in only a few pockets.</p>
                            <ul className="actions">
                                <li><Link to="https://labrujula.nexos.com.mx/?p=1339" className="button">Read more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </Layout>
);

export default Landing;
