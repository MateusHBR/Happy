import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;
`;

export const LeftBar = styled.aside`
  width: 440px;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: h2;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
  }

  footer {
    display: flex;
    flex-direction: column;

    line-height: 24px;

    strong {
      font-weight: 800;
    }
  }
`;

export const FloatingButton = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;

  z-index: 10;

  a {
    width: 64px;
    height: 64px;
    background: #15c3d6;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 1.5px 1.5px 4px 1px rgba(0, 0, 0, 0.1);

    transition: background-color 0.3s ease;

    &:hover {
      background: #17d6eb;
    }
  }
`;
