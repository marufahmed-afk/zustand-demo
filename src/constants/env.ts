import packageJson from "../../package.json";

export const ENV = {
  VERSION: packageJson.version || "",
  NODE_ENV: process.env.NODE_ENV,
  API_HOST: process.env.REACT_APP_API_HOST ?? "",
  WEATHER_API_KEY: process.env.REACT_APP_WEATHER_API_KEY ?? "",
  MOVIE_API_KEY: process.env.REACT_APP_MOVIE_API_KEY ?? "",
};
