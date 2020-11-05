import React from 'react';
import styled from 'styled-components';
import WeatherCard from './WeatherCard';

const ListCardStyled = styled.div`
  display: grid;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 1rem 4rem;
  grid-auto-flow: dense;
`;

const ListCard = ({ weatherWeek }) => {
  return (
    <ListCardStyled>
      {weatherWeek?.map((weather) => {
        return <WeatherCard weather={weather} key={weather.id} />;
      })}
    </ListCardStyled>
  );
};

export default ListCard;
