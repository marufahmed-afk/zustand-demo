import { StateCreator } from "zustand";
import { getWatchList, getWeatherDetails } from "../api/api";
import { findWeatherType, getGenre } from "../helpers/util.helper";
import { Mutators } from "./mutators";
import { MovieSlice, WeatherSlice } from "./types";

const createWeatherSlice: StateCreator<
  WeatherSlice & MovieSlice,
  Mutators,
  [],
  WeatherSlice
> = (set: any, get: any) => ({
  currentCity: "Dhaka",
  loading: false,
  weatherType: "Rainy",
  listOfCities: [
    { label: "Dhaka" },
    { label: "London" },
    { label: "Amsterdam" },
    { label: "Toronto" },
    { label: "New York" },
  ],
  weatherInfo: null,
  changeCity: async (cityName: string = "Dhaka") => {
    set({ loading: true });
    const res = await getWeatherDetails(cityName);
    const weatherType = findWeatherType(res.data.current.condition.text);
    const movieRes = await getWatchList(getGenre(weatherType));

    set({ listOfMovies: movieRes?.data.results });
    set({ weatherInfo: res?.data.current });
    set({ currentCity: cityName });
    set({ weatherType });
    set({ loading: false });
  },
});

export default createWeatherSlice;
