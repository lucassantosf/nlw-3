import React, { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus , FiArrowLeftCircle} from 'react-icons/fi';
import { MapContainer  , TileLayer, Marker, Popup} from 'react-leaflet';
import mapIcon from '../utils/mapIcon';
import logoImg from '../images/ico.jpg';

import '../styles/pages/orphanages-map.css';
import api from '../services/api';
  
interface Orphanage{
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap(){
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  
  useEffect(()=>{
    api.get('orphanages').then(response=>{
      setOrphanages(response.data);
    })
  },[]);

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
        {orphanages.map(orphanage=>{
          return (
            <Marker position={[orphanage.latitude,orphanage.longitude]} icon={mapIcon} key={orphanage.id}>
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {orphanage.name}
                <Link to={`/orpghanages/${orphanage.id}`}><FiArrowLeftCircle size={20} color="#fff" /></Link>
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>

      <Link to="/orpghanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}

export default OrphanagesMap;