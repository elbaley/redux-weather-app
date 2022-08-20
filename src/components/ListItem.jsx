import styled from "styled-components";
import { ICON_URL } from "../utils/iconUrl";

const ListItem = ({ day }) => {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date = new Date(day.dt * 1000);
  const dayName = dayNames[date.getDay()];
  const weatherCondition = day.weather[0].main;
  const highestTemp = day.temp.max.toFixed(0);
  const lowestTemp = day.temp.min.toFixed(0);
  const icon = day.weather[0].icon;
  return (
    <Wrapper>
      <span>{dayName}</span>{" "}
      <span className='weather'>
        {" "}
        {weatherCondition} <img src={`${ICON_URL}${icon}.png`} alt='' />{" "}
      </span>{" "}
      <span className='high-low'>
        <span>{highestTemp}°</span>{" "}
        <span className='lowest'>{lowestTemp}°</span>
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  align-items: center;
  .weather {
    color: #4b4b4b;
    font-weight: 500;
    display: flex;
    align-items: center;
    max-height: 2.25rem;
  }
  .high-low {
    text-align: right;
  }
  .lowest {
    color: #4b4b4b;
  }
`;

export default ListItem;
