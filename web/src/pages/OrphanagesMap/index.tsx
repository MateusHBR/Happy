import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import { Map, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../../images/map-marker.svg';

import { Container, LeftBar, FloatingButton } from './styles';
import 'leaflet/dist/leaflet.css';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <LeftBar>
        <header>
          <img src={mapMarkerImg} alt="Happy Logo" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Rio de Janeiro</strong>
          <span>Rio de Janeiro</span>
        </footer>
      </LeftBar>

      <Map
        center={[-22.9137531, -43.5860654]}
        zoom={12}
        style={{ width: '100%', height: '100%', zIndex: 8 }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_MAPBOX_TOKEN}`}
        />
      </Map>

      <FloatingButton>
        <Link to="/" className="create-orphanage">
          <FiPlus size={32} color="#FFF" />
        </Link>
      </FloatingButton>
    </Container>
  );
};

export default OrphanagesMap;
