import { StateCreator } from "zustand";
import { Mutators } from "./mutators";
import { MovieSlice, WeatherSlice } from "./types";

const createMovieSlice: StateCreator<
  MovieSlice & WeatherSlice,
  Mutators,
  [],
  MovieSlice
> = (set: any, get: any) => ({
  currentGenre: "adventure",
  listOfMovies: [],
});

export default createMovieSlice;
