import { Card, CardContent, Divider, Typography } from "@mui/material";
import useStore from "../../store/useStore";
import { MovieCard } from "./MovieCard";

export function MovieArea() {
  const listOfMovies = useStore((state: any) => state.listOfMovies);
  const loading = useStore((state: any) => state.loading);
  return (
    <Card variant="outlined" sx={{ maxHeight: "500px", overflowY: "scroll" }}>
      <CardContent>
        <Typography variant="h5" component="div" marginBottom="5px">
          What To Watch
        </Typography>
        <Divider sx={{ mb: "15px" }} />
        {!loading
          ? listOfMovies?.map((movie: any) => <MovieCard movie={movie} />)
          : "Loading..."}
      </CardContent>
    </Card>
  );
}
