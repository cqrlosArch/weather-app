import { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { getData, getDataGeo } from './api/getData';
import WeatherInfo from './components/WeatherInfo';
import WeatherToday from './components/WeatherToday';
import Wrapper from './components/Wrapper';

// import data from './api/data.json';

const GlobalStyled = createGlobalStyle`
  body{
    font-family: 'Raleway', sans-serif;
    margin:0;
    width:100vw;
    height:auto;
    color:#E7E7EB;
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

  //search by city
  useEffect(() => {
    console.log('city');
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
    const getCoord = (latt, long) => {
      let geolocation = [latt, long];
      getDataGeo(geolocation).then((data) => {
        initApp(data);
      });
    };
    return navigator.geolocation.getCurrentPosition((position) => {
      getCoord(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  return (
    <>
      <GlobalStyled />
      <Wrapper>
        {weatherToday && (
          <WeatherToday
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
