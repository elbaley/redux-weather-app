import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectWeather } from "../features/weather/weatherSlice";
import { ListItem } from "./";

const NextWeekWeather = () => {
  const weather = useSelector(selectWeather);
  return (
    <Wrapper>
      <ul className='next-week'>
        {weather.weatherData?.daily.map((day, index) => {
          if (index === 0) return;

          return <ListItem key={index} day={day} />;
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--alternativeBodyBackground);
  padding: 1.5rem 1rem;
  .next-week {
    list-style: none;
    padding: 0;
  }
`;

export default NextWeekWeather;
