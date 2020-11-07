import React from 'react';
import styled from 'styled-components';
import CardHightlights from './CardHightlights';

const ListHightlightsStyled = styled.div`
  display: grid;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(auto-fill, minmax(328px, 1fr));
  gap: 2rem;
  @media screen and (max-width: 550px) {
 
  }
`;

const ListHightlights = ({ weatherToday }) => {
  const {
    wind_direction_compass,
    wind_speed,
    humidity,
    visibility,
    air_pressure,
  } = weatherToday[0];
  return (
    <ListHightlightsStyled>
      <CardHightlights
        title={'Wind status'}
        speed={wind_speed}
        icon={wind_direction_compass}
        height={'164px'}
      />
      <CardHightlights
        title={'Humidity'}
        humidity={humidity}
        height={'164px'}
      />
      <CardHightlights
        title={'Visibility'}
        visibility={visibility}
        height={'119px'}
      />
      <CardHightlights
        title={'Air Pressure'}
        air_pressure={air_pressure}
        height={'119px'}
      />
    </ListHightlightsStyled>
  );
};

export default ListHightlights;
