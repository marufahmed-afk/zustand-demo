import { WEATHER_TYPES } from "../constants/weather.constants";

/**
 * Check if a string looks like an external URL
 */
export const isURL = (str: string) => /http|www/.test(str);

/**
 * A promise to delay an async function
 * @param ms how many milliseconds to wait
 */
export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const getInitials = (name: string, maxChar: number) =>
  name
    .split(/\s/)
    .map(word => word[0])
    .join("")
    .substr(0, maxChar)
    .toUpperCase();

/**
 * Scroll to top of screen smoothly,
 * or fallback to instant scroll to top
 */
export const scrollToTop = () => {
  try {
    // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  } catch (error) {
    // fallback for older browsers
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }
};

export const findWeatherType = (weather: string) => {
  if (weather.toLowerCase().search("sunny") > -1) {
    return WEATHER_TYPES.SUNNY;
  }
  if (weather.toLowerCase().search("clear") > -1) {
    return WEATHER_TYPES.CLEAR;
  }
  if (weather.toLowerCase().search("cloudy") > -1) {
    return WEATHER_TYPES.CLOUDY;
  }
  return WEATHER_TYPES.RAINY;
};

export const getGenre = (type: string) => {
  if (type === WEATHER_TYPES.SUNNY) {
    return "comedy";
  }
  if (type === WEATHER_TYPES.CLEAR) {
    return "comedy";
  }
  if (type === WEATHER_TYPES.CLOUDY) {
    return "sci-fi";
  }
  return "thriller, horror";
};
