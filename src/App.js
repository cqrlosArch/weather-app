import { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { getData, getDataGeo } from './api/getData';
import WeatherInfo from './components/WeatherInfo';
import WeatherToday from './components/WeatherToday';
import Wrapper from './components/Wrapper';
import localSt from './storage/config';

// import data from './api/data.json';

const GlobalStyled = createGlobalStyle`

*{
  box-sizing:border-box;
}
  body{
    font-family: 'Raleway', sans-serif;
    margin:0;
    width:100vw;
    height:auto;
    color:#E7E7EB;
    overflow-x:hidden;

    @media screen and (max-width: 550px){
    width:100%;
   
   
  }
  }

`;

function App() {
  const [weatherToday, setWeatherToday] = useState();
  const [weatherWeek, setWeatherWeek] = useState();
  const [city, setCity] = useState(null);
  const [geoLocation, setGeolocation] = useState(null);

  //Search App function
  const initApp = (data) => {
    console.log(data);
    setCity(data?.title);
    setWeatherToday(data?.consolidated_weather);
    setWeatherWeek(data?.consolidated_weather.filter((_, ind) => ind !== 0));
  };

  const handleSearch = (city) => {
    if (city) setCity(city);
  };

  //search by city
  useEffect(() => {
    if (city) {
      getData(city).then((data) => {
        initApp(data);
      });
    }
  }, [city]);

  //search by location
  useEffect(() => {
    console.log('geo');
    if (geoLocation) {
      getDataGeo(geoLocation).then((data) => {
        initApp(data);
      });
    }
  }, [geoLocation]);

  //initial location
  useEffect(() => {
    if (!localStorage.getItem('weather')) {
      const getCoord = (latt, long) => {
        let geolocation = [latt, long];
        getDataGeo(geolocation)
          .then((data) => {
            localSt.setLocalStore('weather', data);
            if (data) initApp(data);
          })
          .catch((err) => console.log(err));
      };
      return navigator.geolocation.getCurrentPosition((position) => {
        getCoord(position.coords.latitude, position.coords.longitude);
      });
    } else {
      const data = localSt.getLocalStore('weather');
      initApp(data);
    }
  }, []);

  return (
    <>
      <GlobalStyled />
      <Wrapper>
        {weatherToday && (
          <WeatherToday
            handleSearch={handleSearch}
            weatherToday={weatherToday}
            city={city}
            setGeolocation={setGeolocation}
          />
        )}
        {setWeatherWeek && (
          <WeatherInfo weatherWeek={weatherWeek} weatherToday={weatherToday} />
        )}
      </Wrapper>
    </>
  );
}

export default App;
