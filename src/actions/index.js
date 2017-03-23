import axios from "axios";

const WAPI_KEY = "b714ec74bbab5650795063cb0fdf5fbe";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WAPI_KEY}`

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},hr`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}