import React from 'react';
import styled from 'styled-components';
import StateImg from './StateImg';

const WeatherCardStyled = styled.div`
  width: 120px;
  height: 177px;
  background: #1e213a;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
  .date {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #e7e7eb;
  }

  .temperature {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
  }


`;

const WeatherCard = ({ weather }) => {

  const formatDate = (date) => {
    const d = new Date(date);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (d.toLocaleDateString() === tomorrow.toLocaleDateString()) {
      return 'Tomorrow';
    }
    const options = {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      timezone: 'UTC',
    };
    return d.toLocaleDateString('en-US', options);
  };
  return (
    <WeatherCardStyled>
      <h2 className="date">{formatDate(weather?.applicable_date)}</h2>
      <StateImg state={weather?.weather_state_name} className="state"/>
      <div className="temperature">
        <p className="max_temp">{Math.round(weather?.max_temp)}ºC</p>
        <p className="min_temp">{Math.round(weather?.min_temp)}ºC</p>
      </div>
    </WeatherCardStyled>
  );
};

export default WeatherCard;
