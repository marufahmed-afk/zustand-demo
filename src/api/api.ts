import axios from "axios";
import { ENV } from "../constants/env";

export const getWeatherDetails = async (cityName: string) =>
  axios.get(
    `https://api.weatherapi.com/v1/current.json?key=${ENV.WEATHER_API_KEY}&q=${cityName}&aqi=no`
  );

export const getWatchList = async (genre: string) =>
  axios.get(
    `https://imdb-api.com/API/AdvancedSearch/${ENV.MOVIE_API_KEY}/?genres=${genre}`
  );
