/* eslint-disable operator-linebreak */
import {
  Card,
  CardContent,
  Stack,
  Typography,
  TextField,
  Autocomplete,
  Divider,
} from "@mui/material";
import { BsCloudRainHeavy, BsSun, BsCloud } from "react-icons/bs";
import { WEATHER_TYPES } from "../../constants/weather.constants";
import useStore from "../../store/useStore";

function WeatherArea() {
  const { listOfCities, currentCity, weatherInfo, weatherType, loading } =
    useStore((state: any) => state);
  const changeCity = useStore((state: any) => state.changeCity);

  const handleChange = (event: any, value: any) => {
    changeCity(value?.label);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={listOfCities}
          defaultValue={{ label: currentCity }}
          onChange={handleChange}
          sx={{ mb: "20px" }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          renderInput={params => <TextField {...params} label="City" />}
        />

        <Divider sx={{ mb: "10px" }} />

        {!loading ? (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <div>
              <Typography variant="h5" component="div">
                {currentCity}
              </Typography>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                {weatherInfo?.condition.text}
              </Typography>
              <Typography
                sx={{ mb: 1.5, fontSize: "12px" }}
                color="text.secondary"
              >
                Wind:
                {weatherInfo?.wind_mph}
                mph
              </Typography>
              <Typography variant="h2">
                {weatherInfo?.temp_c}
                °C
                <br />
              </Typography>
            </div>
            {weatherType === (WEATHER_TYPES.SUNNY || WEATHER_TYPES.CLEAR) && (
              <BsSun size="100px" />
            )}
            {weatherType === WEATHER_TYPES.CLOUDY && <BsCloud size="100px" />}
            {weatherType === WEATHER_TYPES.RAINY && (
              <BsCloudRainHeavy size="100px" />
            )}
          </Stack>
        ) : (
          "Loading..."
        )}
      </CardContent>
    </Card>
  );
}

export default WeatherArea;
