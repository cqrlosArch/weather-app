import React from 'react';
import styled from 'styled-components';

const CardHightlightsStyled = styled.div`
  min-width: 328px;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  background: #1e213a;
  height: ${({ height }) => height && height};
  @media screen and (max-width: 550px) {
    min-width: 260px;
  }
  .title {
    margin: 0;
  }
  .data {
    font-weight: bold;
    font-size: 35px;
    line-height: 10px;
    color: #e7e7eb;
  }
  .progress-bar {
    width: 160px;
    position: relative;
    &::after {
      content: '%';
      position: absolute;
      right: 0;
      bottom: -10px;
      font-size: 10px;
    }
  }
  .number {
    width: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const CardHightlights = ({
  title,
  speed,
  icon,
  air_pressure,
  humidity,
  visibility,
  height,
}) => {
  const formatData = (data) => {
    if (speed) {
      return `${Math.round(data)} mph `;
    } else if (air_pressure) {
      return `${air_pressure} mb`;
    } else if (humidity) {
      return `${humidity}%`;
    } else {
      return `${visibility.toFixed(2)} miles`;
    }
  };
  return (
    <CardHightlightsStyled height={height}>
      <h2 className="title">{title}</h2>
      <p className="data">
        {formatData(speed) || air_pressure || humidity || visibility}
      </p>
      {humidity && (
        <>
          <div className="number">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <progress value={humidity} max="100" className="progress-bar" />
        </>
      )}
    </CardHightlightsStyled>
  );
};

export default CardHightlights;
