import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerArticles from '../components/BannerArticles'

import frames from '../assets/images/frames of mexican drug war.jpg'
import jerarquias from '../assets/images/jerarquias postmortem.jpg'
import sharing from '../assets/images/sharing.png'
import vivir from '../assets/images/vivir en un barrio neoliberal.png'
import faltan from '../assets/documents/faltan mas.pdf'
import faltanImage from '../assets/images/faltan mas.png'
import gentrificacion from '../assets/images/gentrificacion.png'
import macron from '../assets/images/macron.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Articles | Josemaría Becerril</title>
            <meta name="description" content="Articles | Josemaría Becerril" />
        </Helmet>

        <BannerArticles />

        <div id="main">            
            <section id="one" className="spotlights">
                <section>                    
                    <img src={frames} alt="The frames of the Mexican drug war" />    
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>The frames of the Mexican drug war:</h3>
                                <h4>Grievability, sacrificial loss and melancholia</h4>
                            </header>
                            <p>Judith Butler's works concerning the discursive practices used for legitimizing State violence offer a useful vantage point for exploring how the Mexican government has organized public representations of death during its ongoing Drug War. Following her insight that “frames of war” sustain a differential distribution of grievability, this article explores the discourse through which the government has presented poignant cases of carnage in order to highlight the usefulness of specific categories for sustaining and normalizing the war violence. By appropriating Butler's division between “grievable” and “un-grievable” subjects, this article complicates the understanding of the frames of war by showing that in Mexico they do not hide death but instead they allow for the exhibition of lost lives through sacrificial mourning. After showing the connections between the allocation of grievability, the quest for sovereignity and the instrumentalization of dead bodies, the article concludes by pointing towards the political possibilities of melancholia. </p>
                            <ul className="actions">
                                <li><Link to="https://www.cairn-int.info/abstract-E_RAI_076_0093--the-frames-of-the-mexican-drug-war.htm?contenu=resume" className="button">Read more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                <img src={jerarquias} alt="Jerarquías post-mortem" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Jerarquías post-mortem:</h3>
                                <h4>¿Cómo se identifica en la morgue un cuerpo desconocido?</h4>
                            </header>
                            <p>El autor acompañó durante cuatro meses a las peritas –son mujeres, en su mayoría– del Departamento de identificación del Instituto de Ciencias Forenses (INCIFO), en la Ciudad de México. En este ensayo narra lo que vio, los procesos de deshumanización que la burocracia generan, y cómo algunos muertos «valen» más que otros</p>
                            <ul className="actions">
                                <li><Link to="https://piedepagina.mx/jerarquias-post-mortem-a-los-pobres-no-se-les-identifica-se-les-disecciona/" className="button">Read more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={sharing} alt="The Sharing Economy Comes to Mexico" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>The Sharing Economy Comes to Mexico</h3>
                            </header>
                            <p>Mexico's neoliberal reforms have created fertile ground for exploitative "sharing-economy" apps to grow.</p>
                            <ul className="actions">
                                <li><Link to="https://www.jacobinmag.com/2017/01/sharing-economy-mexico-apli-informal-labor-precarity/" className="button">Read more (Jacobim - English) </Link></li>
                                <li><Link to="https://labrujula.nexos.com.mx/?p=1163" className="button special">Read more (Nexos - Spanish)</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                <img src={vivir} alt="Vivir en un barrio neoliberal" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Vivir enun barrio neoliberal</h3>
                                <h4>Revalorización excluyente, fantasmagoría y esterilización de la resistencia <br/>en la colonia Juárez, Ciudad de México</h4>
                            </header>
                            <p>En  la  actual  modernidad neoliberal,  entendida  más  como  una  estructura  de  experiencia que como un periodo histórico, como unavisiónquese ha convertido en el episteme9a través del cual se experimenta y construye la ciudad desde las cimas del poder, desde donde se filtran los deseos, las imaginaciones, las fobias y los símbolos hacia el resto de la sociedad,durante los últimos  años,  ciertos  barrios  céntricos  se  han  convertido  en  un  teatro,  en  un  espacio  de revalorización  excluyente: frente  al  telón  se  muestra  una  cornucopia  de  atracciones,  un sinnúmero  de  malabarescapaz  de  divertir  y  hacer  reír  a  los  adinerados  que  antes  rehuían  a observar y sentir en ese escenario.</p>
                            <ul className="actions">
                                <li><Link to="https://na-st01.ext.exlibrisgroup.com/52COLMEX_INST/storage/alma/50/19/ED/4A/D7/4F/AF/5A/28/10/D4/2C/A0/77/42/85/becerril_jm.pdf?Expires=1601613271&Signature=iH8xH~y2oxt-9nJOBaznT9QWb5wz6E2xTwXhSQgz1IOH-Nw2WM-2TrAzXVnfoOuTBIqvKI3dZ6ClNsgXu5PL23QB2OyYo76nsH1s0~NdE1js3t~4-ERDBWVnwcNGB~ZvJYBF6qRFEcvFYtMZJ0bxDJY3QnJDIdmCtpbdLfHF~JkMMqeSQ3aElzn-XJj~kXhHQF9-sX0ixMyY95D5hkogNaQvTLen62CWfV6VLNNvw9Ion1GppfGb2rlduxSo9Umyh8eZisvnAmr~f0jB~EsK2PugurNn2RctlPSimhE1TJV8MCYU8F4c9Y9HFUk-hF91bI9Nc8GF2eX8W5GN8HQOIA__&Key-Pair-Id=APKAJ72OZCZ36VGVASIA" className="button">Read more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={faltanImage} alt="Faltan más. 43 voces por Ayotzinapa" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Faltan más. 43 voces por Ayotzinapa</h3>
                            </header>
                            <p>La presente antología de textos es un esfuerzo contra el olvido de los trágicos hechos de septiembre de 2014 que nos marcaron como ciudadanas, como jóvenes y como estudiantes. Tanto el libro como el evento organizado han buscado dar voz a las víctimas. La jornada a un año de los hechos de Iguala, formada por tres mesas, tuvo lugar el 9 de septiembre de 2015 en la sala Alfonso Reyes del Colmex y fue transmitida en vivo desde la página web de la institución. Contó con la presencia de especialistas en derechos humanos y desaparición forzada, con el testimonio de las familia-res de los desaparecidos y caídos la noche del 26 de septiembre y con el apoyo de la comunidad de El Colegio de México: alumnas, profesoras y autoridades.</p>
                            <ul className="actions">
                                <li><Link to={faltan} className="button">Read more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                <img src={vivir} alt="Vivir en un barrio neoliberal" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Vivir enun barrio neoliberal</h3>
                                <h4>Revalorización excluyente, fantasmagoría y esterilización de la resistencia <br/>en la colonia Juárez, Ciudad de México</h4>
                            </header>
                            <p>En  la  actual  modernidad neoliberal,  entendida  más  como  una  estructura  de  experiencia que como un periodo histórico, como unavisiónquese ha convertido en el episteme9a través del cual se experimenta y construye la ciudad desde las cimas del poder, desde donde se filtran los deseos, las imaginaciones, las fobias y los símbolos hacia el resto de la sociedad,durante los últimos  años,  ciertos  barrios  céntricos  se  han  convertido  en  un  teatro,  en  un  espacio  de revalorización  excluyente: frente  al  telón  se  muestra  una  cornucopia  de  atracciones,  un sinnúmero  de  malabarescapaz  de  divertir  y  hacer  reír  a  los  adinerados  que  antes  rehuían  a observar y sentir en ese escenario.</p>
                            <ul className="actions">
                                <li><Link to="https://na-st01.ext.exlibrisgroup.com/52COLMEX_INST/storage/alma/50/19/ED/4A/D7/4F/AF/5A/28/10/D4/2C/A0/77/42/85/becerril_jm.pdf?Expires=1601613271&Signature=iH8xH~y2oxt-9nJOBaznT9QWb5wz6E2xTwXhSQgz1IOH-Nw2WM-2TrAzXVnfoOuTBIqvKI3dZ6ClNsgXu5PL23QB2OyYo76nsH1s0~NdE1js3t~4-ERDBWVnwcNGB~ZvJYBF6qRFEcvFYtMZJ0bxDJY3QnJDIdmCtpbdLfHF~JkMMqeSQ3aElzn-XJj~kXhHQF9-sX0ixMyY95D5hkogNaQvTLen62CWfV6VLNNvw9Ion1GppfGb2rlduxSo9Umyh8eZisvnAmr~f0jB~EsK2PugurNn2RctlPSimhE1TJV8MCYU8F4c9Y9HFUk-hF91bI9Nc8GF2eX8W5GN8HQOIA__&Key-Pair-Id=APKAJ72OZCZ36VGVASIA" className="button">Read more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={gentrificacion} alt="Sobre la gentrificación de la colonia Juárez a 111 años de su surgimiento" />
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
                <section>
                <img src={macron} alt="¿Quién es Monsieur Macron?" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>¿Quién es Monsieur Macron?</h3>                                
                            </header>
                            <p>Emmanuel Macron se presenta, ante los franceses y la opinión mundial, como una fuerza joven, progresista y liberal cuya victoria significaría un triunfo por partida doble: contra el populismo xenofóbico de Trump y la destrucción de la Unión Europea, encarnada en Le Pen. ¿Es Macron la respuesta? </p>
                            <ul className="actions">
                                <li><Link to="https://horizontal.mx/quien-es-monsieur-macron/" className="button">Read more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing