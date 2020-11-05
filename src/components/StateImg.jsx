import React from 'react';
import styled from 'styled-components';

const StateImgStyled = styled.div`
  .img {
    width: 100%;
    max-width: ${({width})=>width ? width : '54.44px'};
    height: ${({height})=>height ? height :'auto' };
  }
`;

const StateImg = ({ state = 'Clear', height, width }) => {
  return (
    <StateImgStyled height={height} width={width}>
      <img
        src={`assets/${state.replace(/ /g, '')}.png`}
        alt="state"
        className="img"
      />
    </StateImgStyled>
  );
};

export default StateImg;
