import React from 'react';
import styled from 'styled-components';
import imgBG from '../assets/Cloud-background.png';

import defaultImg from '../assets/LightCloud.png';
import StateImg from './StateImg';

const TodayIconWeatherStyled = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  position: relative;
  @media screen and (max-width: 550px) {
      padding-top:2rem;
    }
  /* Nubes */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 220px;
    background-image: url('${imgBG}');
    background-repeat: no-repeat;
    background-size: 140%;
    background-position: 50% 20%;
    filter: opacity(0.3);
    @media screen and (max-width: 550px) {
      background-size: 80%;
      background-position: 50% 20%;
    }
  }
`;

const TodayIconWeather = ({ state }) => {
  return (
    <TodayIconWeatherStyled>
      <StateImg state={state} width={'120px'} />
    </TodayIconWeatherStyled>
  );
};

export default TodayIconWeather;
