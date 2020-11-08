import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  height: 100vh;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 35% 65%;
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: 100%;
    grid-template-rows: 600px auto;
  }
`;

const Wrapper = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

export default Wrapper;
