import create from "zustand";
import { devtools } from "zustand/middleware";

import createHomeSlice from "./createHomeSlice";
import createWeatherSlice from "./createWeatherSlice";
import createMovieSlice from "./createMovieSlice";
import { HomeSlice, MovieSlice, WeatherSlice } from "./types";

const useStore = create<HomeSlice & WeatherSlice & MovieSlice>()(
  devtools((...a) => ({
    ...createHomeSlice(...a),
    ...createWeatherSlice(...a),
    ...createMovieSlice(...a),
  }))
);

export default useStore;
