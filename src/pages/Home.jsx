import React from 'react'
import Welcome from '../components/Welcome'
import About from '../components/About'
import Header from '../shared/Header'
import Facts from '../components/Facts'
import Skills from '../components/Skills'
import Resume from '../components/Resume'
import Portafolio from '../components/Portafolio'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../shared/Footer'
import Services from '../components/Services'

export default function Home() {
    return (
        <> 
            
            <Header />
            <Welcome />

            <main id="main">
                <About />
                <Facts />
                <Skills />
                <Resume />
                <Portafolio />
                <Services />
                <Testimonials />
                <Contact />
            </main>

            <Footer />
        </>
    )
}
