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
                                <h4>De Iguala a Ayotzinapa. La escena y el crimen [From Iguala to Ayotzinapa. The scene and the crime] By Fernando Escalante and Julián Canseco. Mexico City: El Colegio de México/Grando de Sal, 2019. 167 pp.</h4>
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
                                <h3>Vivir en un barrio neoliberal</h3>
                            </header>
                            <p>Los intereses económicos, políticos y privados en la disputa por la plusvalía inmobiliaria.</p>
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
                                <h3>Faltan 43</h3>
                            </header>
                            <p>As part of the activities of the Student Society of El Colegio de México, I participated in the collective that edited and wrote a compendium of texts on the forced disappearance of 43 students from the Isidro Burgos Rural Normal School of Ayotzinapa on the night of September 26, 2014 in Iguala, Guerrero. I contributed a text on the connections between gold extractive economies and mass violence in the region of the disappearance.</p>
                            <ul className="actions">
                                <li><Link to={faltan} className="button">Read more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>¿Quién es Monsieur Macron?</h3>
                            </header>
                            <p>Emmanuel Macron se presenta, ante los franceses y la opinión mundial, como una fuerza joven, progresista y liberal cuya victoria significaría un triunfo por partida doble: contra el populismo xenofóbico de Trump y la destrucción de la Unión Europea, encarnada en Le Pen. ¿Es Macron la respuesta?</p>
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
                                <h3>Sobre la gentrificación de la colonia Juárez a 111 años de su surgimiento</h3>
                            </header>
                            <p>En 1906, la colonia Juárez surge como el resultado de un negocio entre amigos. Así se le llamó al triangulo urbano que había sido desarrollado en las décadas anteriores mediante concesiones entre el gobierno porfirista y la élite empresarial de la época. Desde sus orígenes, la Juárez fue un proyecto económico más que urbanístico, el objetivo principal del Estado porfirista había sido expandir los alcances del mercado inmobiliario sobre zonas agrícolas, sustento de indios y campesinos, para permitir el lucro privado y la especulación a acaudalados favoritos del régimen, valorando las inversiones por encima de cualquier consideración social. Así, las grandes obras inmobiliarias del Estado estaban orientadas a facilitar el crecimiento de colonias exclusivas: el embellecimiento de Paseo de la Reforma a cargo del erario público, facilitó las ganancias por el fraccionamiento de la colonia contigua, dinero que habría de quedarse en sólo algunos bolsillos.</p>
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
