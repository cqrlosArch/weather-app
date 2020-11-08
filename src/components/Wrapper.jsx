import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  height: 100vh;
  @media screen and (max-width: 1150px) {
    grid-template-columns: 30% 70%;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 40% 60%;
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
