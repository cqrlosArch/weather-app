import React from 'react';
import styled from 'styled-components';
import SearchMenu from './SearchMenu';

import TodayIconWeather from './TodayIconWeather';
import TodayInfoWeather from './TodayInfoWeather';

const WeatherTodayStyled = styled.div`
  grid-column: 1/2;
  background-color: #1e213a;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 1rem 0;

  @media screen and (max-width: 550px){
    width:100%;
    grid-column:1/1;
    grid-row:1/1;
   
  }

`;

const WeatherToday = ({ weatherToday, city , setGeolocation}) => {

  const { weather_state_name, the_temp, applicable_date } = weatherToday[0];

  return (
    <WeatherTodayStyled>
      <SearchMenu setGeolocation={setGeolocation} />
      <TodayIconWeather state={weather_state_name}/>
      <TodayInfoWeather city={city} state={weather_state_name} temp={the_temp} date={applicable_date}/>
    </WeatherTodayStyled>
  );
};

export default WeatherToday;
