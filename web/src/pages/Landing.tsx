import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import logoImg from '../images/ico.jpg';
import { Link } from 'react-router-dom';
import '../styles/pages/landing.css';

function Landing(){
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitos cachorros.</p>
        </main>

        <div className="location">
          <strong>São Paulo</strong>
          <span>Sorocaba</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>  
    </div>
  )
}

export default Landing;