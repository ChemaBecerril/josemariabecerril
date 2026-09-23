import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

import me from '../assets/images/me-in-oxford-2023.jpg';

const About = (props) => (
  <Layout>
    <Helmet>
      <title>About | Josemaría Becerril Aceves</title>
      <meta name="description" content="About | Josemaría Becerril Aceves" />
      <style>{`
        body, p, h1, h2, h3, h4, h5, h6 {
          font-family: Helvetica, Arial, sans-serif;
        }
      `}</style>
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>About</h1>
          </header>
          <div className="grid-wrapper">
            <div className="col-6">
              <p>Born in <a href="https://maps.app.goo.gl/j9Ymbq4tfseFAjGVA" target="_blank" rel="noopener noreferrer">Toluca</a>, Mexico, in 1994, my family heritage reflects the industrial, manufacturing, and urban transformation known as the Mexican Miracle: from peasants, bus drivers and mechanics, economic expansion and growing globalization enabled upward social mobility, leading to careers as doctors, engineers and freight business owners. Yet Toluca is also the most polluted city in Mexico, with the toxic watershed of the Río Lerma affecting the everyday lives of neighboring communities. Against this personal background, I became deeply interested in the unequal distribution of economic growth, ecological degradation and heightened vulnerability.</p>
              <p>I am a social anthropologist with an initial training in political science. I am completing a PhD in social anthropology and ethnology at the École des hautes études en sciences sociales (EHESS), and I am a member of the Anthropology of Life team at the <a href="https://las.ehess.fr/le-las/presentation" target="_blank" rel="noopener noreferrer">Laboratoire d'anthropologie sociale</a> (LAS, Collège de France). I studied political science at El Colegio de México and completed an MSc at the École normale supérieure (ENS) and the EHESS, with a thesis on Mexico City's forensic bureaucracy. I have also worked as a public policy advisor at the Mexican Senate, and have conducted research, teaching and writing in Spanish, French, English and German across Mexico and Europe.</p>
              <p>My doctoral thesis, <em>Laboring the Endless Forest: Politics of Techniques among the Macehual in the Face of Technoscientific Sustainability (Quintana Roo, Mexico)</em>, supervised by <a href="https://scholar.google.com/citations?user=-yTTcWcAAAAJ&hl=fr" target="_blank" rel="noopener noreferrer">Perig Pitrou</a> and <a href="https://scholar.google.com/citations?user=Swi82yUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Olivier Le Guen</a>, is based on sixteen months of fieldwork among the Macehual, the Maya of Quintana Roo, in three ejidos (village communities holding land for collective use) in the municipality of Felipe Carrillo Puerto. I previously studied Yucatec Maya at INALCO and conducted my fieldwork exclusively in this Indigenous language.</p>
              <p>The tropical forests inhabited by the Macehual have been reorganized through “sustainable” forestry programs, notably through Mexican-German technical cooperation, which promise both development for local populations and the preservation of the forest. I describe the gestures and concepts through which Macehual relate to plants and to the spirit beings of the forest. I show that changes in these techniques go together with changes in how they understand political authority, labor, money, religion, land and value. I also carried out archival research at the Archivo General del Estado de Quintana Roo (Chetumal), the Bundesarchiv (Koblenz) and the National Archives (London). This archival work traces how a long history of colonization persists in the ways forestry supply chains and infrastructures are organized today.</p>
              <p>This work connects the anthropology of techniques with science and technology studies, political anthropology and political ecology. More broadly, I study how communities living at the political margins of the state negotiate the presence of science, capital and state institutions in their everyday lives. Therefore, my research questions environmental policies that present technoscientific solutions as the only way to sustain life on Earth. These policies often rely on the labor of Indigenous and peasant populations while leaving them to bear the costs. I am interested in forms of self-organization and care for non-human beings that exist outside technocratic frameworks.</p>
              <p>I would therefore like this research to be useful beyond academia. If you work with grassroots initiatives, community organizations or public institutions concerned with forests, Indigenous territories or environmental justice, feel free to contact me.</p>
            </div>
            <div className="col-6">
              <figure style={{ textAlign: 'left' }}>
                <img src={me} alt="Me in Oxford 2023" style={{ maxWidth: '350px', margin: "0 auto" }} />
                <figcaption style={{ fontSize: '14px', marginTop: '5px', width: '350px' }}>
                  In front of a box of objects from Mexico at the Pitt Rivers Museum in Oxford, fall 2023.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default About;
