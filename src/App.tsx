/* eslint-disable operator-linebreak */
import { Grid, Box, Container, Switch, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import useStore from "./store/useStore";
import WeatherArea from "./components/WeatherArea/WeatherArea";
import { MovieArea } from "./components/MovieArea/MovieArea";
import { WEATHER_TYPES } from "./constants/weather.constants";

const sunnyImage =
  "https://images.unsplash.com/photo-1469122312224-c5846569feb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80";
const rainyImage =
  "https://images.unsplash.com/photo-1599070221195-bf2801877d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const cloudyImage =
  "https://images.unsplash.com/photo-1590674639208-5b18282d04e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80";

function App() {
  const toggleShowMovies = useStore((state: any) => state.toggleShowMovies);
  const showMovies = useStore((state: any) => state.showMovies);
  const weatherType = useStore((state: any) => state.weatherType);
  const changeCity = useStore((state: any) => state.changeCity);

  useEffect(() => {
    changeCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectImage = () => {
    if (weatherType === WEATHER_TYPES.SUNNY) return sunnyImage;
    if (weatherType === WEATHER_TYPES.CLEAR) return sunnyImage;
    if (weatherType === WEATHER_TYPES.CLOUDY) return cloudyImage;
    return rainyImage;
  };

  return (
    <div
      className="main container"
      style={{
        backgroundImage: `url(${selectImage()})`,
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Stack
          sx={{
            position: "absolute",
            top: "-60px",
            left: "20px",
            zIndex: "100",
          }}
          direction="row"
          alignItems="center"
        >
          <Typography
            variant="h5"
            component="div"
            marginBottom="5px"
            color="white"
          >
            Show/Hide Recommendations
          </Typography>
          <Switch
            defaultChecked={showMovies}
            onChange={() => toggleShowMovies()}
            size="medium"
          />
        </Stack>
        <Box style={{ zIndex: "100" }} className="center">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={6} height="100%">
              <WeatherArea />
            </Grid>
            {showMovies && (
              <Grid item xs={6} height="100%">
                <MovieArea />
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
