import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../images/logo.svg';

import { Container, Main, Location, FloatingButton } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={logoImg} alt="Happy Logo" />

        <Main>
          <h1>Leve Felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </Main>

        <Location>
          <strong>Rio de Janeiro</strong>
          <span>Rio de Janeiro</span>
        </Location>

        <FloatingButton>
          <Link to="/app">
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
          </Link>
        </FloatingButton>
      </div>
    </Container>
  );
};

export default Landing;
