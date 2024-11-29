import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook , faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <section className="home">
        <div>
            <h1>Soy Alex Majano.</h1>
            <p>Soy un <strong>Contador Público</strong> especializado en PHP y Python</p>
            <div className="social-links">
            <a href="https://www.facebook.com/contabilidadmajano.asociados.5" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/alex-majano-b003b787" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/Alex-Majano" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>

            </div>
        </div>
    </section>
  );  
}

export default Home;