import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus , FiArrowLeftCircle} from 'react-icons/fi';
import { MapContainer  , TileLayer, Marker, Popup} from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import logoImg from '../images/ico.jpg';
import '../styles/pages/orphanages-map.css';

const mapIcon = Leaflet.icon({
  iconUrl: logoImg,
  iconSize: [58,68],
  iconAnchor: [29,68],
  popupAnchor: [170,2]
})

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
        <Marker position={[-23.4772332,-47.5367403]} icon={mapIcon}>
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            Lar dos dog's
            <Link to="/orpghanages/1"><FiArrowLeftCircle size={20} color="#fff" /></Link>
          </Popup>
        </Marker>
      </MapContainer>

      <Link to="/orpghanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}

export default OrphanagesMap;