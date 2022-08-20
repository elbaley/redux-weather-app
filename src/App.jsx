import { useSelector } from "react-redux";
import styled from "styled-components";
import { TodaysWeather, NextWeekWeather } from "./components/";
import LoadingModal from "./components/LoadingModal";

import { selectWeather } from "./features/weather/weatherSlice";
function App() {
  const weather = useSelector(selectWeather);
  if (weather.error !== "") {
    return (
      <Wrapper>
        <h1 className='error'>{weather.error}</h1>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <TodaysWeather />
      <NextWeekWeather />
    </Wrapper>
  );
}
const Wrapper = styled.main`
  max-width: 500px;
  grid-template-rows: 0.55fr 0.15fr 0.25fr;
  display: grid;
  color: white;
  margin: 0 auto;

  .error {
    color: #ea2626;
    text-align: center;
  }
`;
export default App;
