import React from 'react';
import styled from 'styled-components';

const SearchMenuStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .search {
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #e7e7eb;
    cursor: pointer;
    &-place {
      width: 160px;
      height: 40px;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
    }

    &-gps {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      color: #e7e7eb;
    }
  }
`;

const SearchMenu = ({ setGeolocation, openMenu }) => {
  const handleGPS = () => {
    const getCoord = (latt, long) => {
      console.log(latt, long);
      const geoCoord = [latt, long];
      setGeolocation(geoCoord);
    };
    navigator.geolocation.getCurrentPosition((position) => {
      getCoord(position.coords.latitude, position.coords.longitude);
    });
  };

  return (
    <SearchMenuStyled>
      <button className="search search-place" onClick={openMenu} v>
        Seach for places
      </button>
      <button className="search search-gps" onClick={handleGPS}>
        <span className="material-icons">gps_fixed</span>
      </button>
    </SearchMenuStyled>
  );
};

export default SearchMenu;
