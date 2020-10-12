import styled from 'styled-components';

import landingBG from '../../images/landing.svg';

export const Container = styled.div`
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    position: relative;

    width: 100%;
    height: 100%;

    max-width: 1100px;
    max-height: 680px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    background: url(${landingBG}) no-repeat 80% center;
  }
`;

export const Main = styled.main`
  max-width: 350px;

  h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }

  p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;

  strong {
    font-weight: 800;
  }
`;

export const FloatingButton = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  a {
    width: 80px;
    height: 80px;
    background: #ffd666;
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.3s ease;
    &:hover {
      background: #96feff;
    }
  }
`;
