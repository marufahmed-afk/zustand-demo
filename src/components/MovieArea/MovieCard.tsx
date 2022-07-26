import { Card, CardMedia, CardContent, Typography } from "@mui/material";

type MovieCardProps = {
  movie: any;
};

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card sx={{ mb: 1 }}>
      <CardMedia
        component="img"
        height="140"
        image={movie?.image}
        alt="poster"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}
