import React from 'react'


export default function Welcome() {
    return (
        <>
            <section id="hero" className="d-flex flex-column justify-content-center">
                <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <h1>Oswaldo Gonzalez Lucena</h1>
                <p>Developer Senior FullStack - Consultor Digital</p>
                <div className="social-links">
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
                </div>
            </section>
        </>
    )
}
