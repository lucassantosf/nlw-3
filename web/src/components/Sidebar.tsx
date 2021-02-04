import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import mapMarkerImg from '../images/ico.jpg';

import '../styles/components/sidebar.css';

export default function Sidebar(){
  return (
    <aside className="app-sidebar">
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
  );
}