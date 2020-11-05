import React from 'react';
import styled from 'styled-components';
import ListCard from './ListCard';
import ListHightlights from './ListHightlights';

const WeatherInfoStyled = styled.div`
  grid-column: 2/-1;
  background-color: #100e1d;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  .title_hightlights {
    width: 80%;
    align-self: flex-start;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #e7e7eb;
    margin:.2rem auto;
  }
`;

const WeatherInfo = ({ weatherWeek, weatherToday }) => {
 
  return (
    <WeatherInfoStyled>
      <ListCard weatherWeek={weatherWeek} />
      <h2 className="title_hightlights">Today’s Hightlights </h2>
     {weatherToday && <ListHightlights weatherToday={weatherToday}/>}
    </WeatherInfoStyled>
  );
};

export default WeatherInfo;
