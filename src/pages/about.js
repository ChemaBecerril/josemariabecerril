import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import me from '../assets/images/me_in_berlin.jpg'
import cv from '../assets/documents/CV-Becerril-English.pdf'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>About | Josemaría Becerril</title>
            <meta name="description" content="About | Josemaría Becerril" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About</h1>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-6">     
                            <p>I was born in Toluca, Mexico in 1994.  I trained first as a political scientist and then an anthropologist. I did my undergraduate studies in Mexico City at El Colegio de México and my Msc in Paris at the Ecole normale supérieure (ENS) and the Ecole des hautes études en sciences sociales (EHESS). At the ENS, I am a Sélection Internationale fellowship recipient.
After field studies in Mexico and France, I have specialized in the analysis of violence, bureaucracy and science. I am currently working on a study on the practice of forensic sciences during the Mexican drug war. My most recent publication is “The frames of the Mexican drug war”, an article included in the journal Raisons Politiques, edited by Sciences Po Paris.
In addition to my academic work, I have also written ethnographic research intended for public audiences in Nexos, Jacobin, Pie de Página and Horizontal.</p>
                        <a href={cv} className="button icon special fa-download">Curriculum Vitae</a>
                        </div>
                        <div className="col-6">
                        <span className="image fit"><img src={me} alt="Me in Berlin"  style={{maxWidth: '350px', margin:"0 auto"}}/></span>
                        </div>                        
                    </div>                    
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic