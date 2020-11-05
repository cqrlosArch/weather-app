import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  height:100vh;
`;

const Wrapper = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

export default Wrapper;
