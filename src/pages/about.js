import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import me from '../assets/images/me_in_berlin.jpg'
import cv from '../assets/documents/CV-Becerril-English.pdf'
//import favicon from '../assets/images/fa
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
                            <p>I was born in Toluca, Mexico in 1994. I first trained as a political scientist and then as an anthropologist. My undergraduate studies took place in Mexico City at El Colegio de México, followed by my MSc in Paris at the Ecole normale supérieure (ENS) and the Ecole des hautes études en sciences sociales (EHESS). I am currently a PhD fellow in social anthropology and ethnology at the EHESS, and a member of the anthropology of life team at the Laboratoire d'Anthropologie Sociale du Collège de France.<p>

After conducting field studies in Mexico and France, I specialized in the analysis of vulnerability, the State, and science. More precisely, I focus on how individuals in extreme conditions of vulnerability construct and sustain their lives, constantly negotiating with the manifestations of science, capitalism and the State in their daily lives.<p>

My master's thesis was an ethnographic study on the bureaucratic practice of forensic sciences during the Mexican drug war. My most recent publication on this topic is titled “Disappearing in the Mesh of the State: the Erasure of Corpses’ Identities in Mexico City’s Forensic Government of the Dead”, an ethnographic article published in the journal Condition humaine / Conditions politiques, edited by the EHESS. Additionally, I have published “The Frames of the Mexican Drug War”, an essay on political theory in the journal Raisons Politiques, edited by Sciences Po Paris.<p>

Following my master's degree, I learned Yucatec Maya at the Institut national des langues et civilisations orientales (INALCO) in Paris. I then spent 15 months conducting fieldwork among Mayan peasants from the municipality of Felipe Carrillo Puerto in southeastern Mexico. Currently, my doctoral thesis explores how sustainable forestry policies, implemented in the region through Mexico-German technical cooperation, have transformed the everyday relations of Maya peasants with the living and spirit beings of their communal forests. I analyze how these ecological transformations intertwine with changes in political subjectivities, as well as moral understandings of the State, the economy, religion, kinship, and value.<p>

My doctoral research has received funding from various institutions including the French Minister of Higher Education, Research and Innovation, Maison Française d'Oxford, Casa de Velázquez (Madrid), Ibero-Amerikanisches Institut (Berlin), and Centro de Estudios Mexicanos y Centroamericanos (Mexico City), among others.</p><p> In addition to my academic work, I have also written ethnographic research intended for public audiences in publications such as Nexos, Jacobin, Pie de Página, and Horizontal. </p>
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
