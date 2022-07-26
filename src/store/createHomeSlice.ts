import { StateCreator } from "zustand";
import { Mutators } from "./mutators";
import { HomeSlice } from "./types";

const createHomeSlice: StateCreator<HomeSlice, Mutators> = (
  set: any,
  get: any
) => ({
  showMovies: true,
  toggleShowMovies: () => {
    set((state: any) => ({ showMovies: !state.showMovies }));
  },
});

export default createHomeSlice;
