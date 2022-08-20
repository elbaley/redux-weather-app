import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetch weather thunk
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (location) => {
    const { longitude, latitude } = location;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}8&units=metric&exclude=minutely,hourly&appid=d18906f9e6d1c0f1366f2e3d5af38564`
    );
    const data = await response.json();

    return data;
  }
);

const initialState = {
  weatherData: null,
  loading: false,
  error: "",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.weatherData = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchWeather.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const selectWeather = (state) => state.weather;

export default weatherSlice.reducer;
