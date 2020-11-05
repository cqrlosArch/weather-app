import React from 'react';
import styled from 'styled-components';

const TodayInfoWeatherStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -2rem;

  .temperature {
    font-weight: 500;
    font-size: 120px;
    line-height: 169px;
    color: #e7e7eb;
    margin: 0;
  }

  .celsius {
    font-size: 60px;
    color: #a09fb1;
  }
  .state {
    font-weight: 600;
    font-size: 20px;
    line-height: 42px;
    text-align: center;
    margin: 0;
    color: #a09fb1;
  }

  .date {
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #88869d;
  }
  .location {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Raleway;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #88869d;
  }

  .city {
    text-transform: capitalize;
    
  }
  .author {
    font-weight: 600;
    font-size: 12px;
    line-height: 17px;
    color: #616475;
    
  }
`;

const TodayInfoWeather = ({ city, state, temp, date }) => {
  const formatDate = (data) => {
    const d = new Date(data);

    const options = {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      timezone: 'UTC',
    };
    return d.toLocaleDateString('en-US', options);
  };
  return (
    <TodayInfoWeatherStyled>
      <h2 className="temperature">
        {Math.round(temp)}
        <span className="celsius">ºC</span>
      </h2>
      <p className="state">{state}</p>
      <p className="date">Today · {formatDate(date)}</p>
      <div className="location">
        <span className="material-icons icon">location_on</span>
        <p className="city">{city}</p>
      </div>
      <footer className="author">Carlos Díaz @ DevChallenges.io</footer>
    </TodayInfoWeatherStyled>
  );
};

export default TodayInfoWeather;
