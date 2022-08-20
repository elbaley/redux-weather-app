import { useEffect, useState } from "react";
import styled from "styled-components";
import { WeatherDetails } from "./";
import cities from "../data/cities.json";
import { ICON_URL } from "../utils/iconUrl";
import { fetchWeather, selectWeather } from "../features/weather/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadingModal from "./LoadingModal";

const TodaysWeather = () => {
  const [cityId, setCityId] = useState(33); // Default city = Istanbul
  const { latitude, longitude } = cities[cityId];
  const dispatch = useDispatch();
  const weather = useSelector(selectWeather);
  function handleSelectChange(e) {
    setCityId(e.target.value);
  }
  // fetch weather data when selected city change
  useEffect(() => {
    dispatch(fetchWeather({ longitude, latitude }));
  }, [cityId]);

  if (weather.loading || !weather.weatherData) {
    return (
      <Wrapper>
        <LoadingModal />
      </Wrapper>
    );
  }

  return (
    <>
      <Wrapper>
        <div className='weather-info-top'>
          <img
            className='weather-icon'
            src={`${ICON_URL}${weather.weatherData.current?.weather[0].icon}@2x.png`}
          />

          <span className='celsius'>
            {weather.weatherData?.current.temp.toFixed(0)}
          </span>
          <span className='weather-text'>
            {weather.weatherData?.current.weather[0].description}
          </span>
        </div>
        <select id='city' value={cityId} onChange={handleSelectChange}>
          {cities.map((city) => {
            return (
              <option key={city.id} value={city.id - 1}>
                {city.name}
              </option>
            );
          })}
        </select>
      </Wrapper>
      <WeatherDetails />
    </>
  );
};

const Wrapper = styled.section`
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .loading::after {
    display: none;
  }
  #city {
    background: var(--alternativeBodyBackground);
    margin: 0 auto;
    color: #ffff;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    width: 15ch;
    border: 1px solid grey;
  }
  .weather-info-top {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .celsius {
    font-size: 3rem;
    margin-top: -1rem;
    font-weight: 500;
    position: relative;
  }
  .celsius::after {
    content: "°";
    font-size: 2.5rem;
    position: absolute;
    right: 1;
  }
  .weather-text {
    text-transform: capitalize;
    font-weight: 300;
    font-size: 1.1rem;
  }
`;

export default TodaysWeather;
