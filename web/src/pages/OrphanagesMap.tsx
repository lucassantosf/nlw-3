import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MapContainer  , TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import logoImg from '../images/ico.jpg';
import '../styles/pages/orphanages-map.css';

function OrphanagesMap(){
  const position = [51.505, -0.09];

  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={logoImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitos cachorros estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>São Paulo</strong>
          <span>Sorocaba</span>
        </footer>
      </aside> 

      <MapContainer center={[-23.4772332,-47.5367404]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-23.4772332,-47.5367404]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}

export default OrphanagesMap;