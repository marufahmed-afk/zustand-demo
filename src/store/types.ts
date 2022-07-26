export interface MovieSlice {
  currentGenre: string;
  listOfMovies: any[];
}

export interface WeatherSlice {
  currentCity: string;
  loading: boolean;
  listOfCities: any[];
  weatherInfo: any;
  changeCity: (cityName: string) => void;
}

export interface HomeSlice {
  showMovies: boolean;
  toggleShowMovies: () => void;
}
