import type {
  FavouriteMovie,
  MovieDetailsResponse,
  MovieResult,
} from "~/types/movies";
import MovieImage from "../atoms/movieImage";
import MovieInfo from "../atoms/movieInfo";
import { useQuery } from "react-query";
import axios from "axios";

interface MovieCardProps {
  movieData: MovieResult;
  favourites: FavouriteMovie[];
  onAddToFavourites: (id: string) => void;
}
const MovieCard = (props: MovieCardProps) => {
  const { movieData: movie, favourites, onAddToFavourites } = props;
  const match = favourites.filter((fav) => {
    return fav.movieId == movie.id.toString();
  });
  const isFavourite = match.length > 0;

  const { data, isLoading, error } = useQuery(
    "movie-details" + movie.id.toString(),
    async () => {
      return (await axios.get(`/api/movies/details?id=${movie.id}`, {}))
        .data as MovieDetailsResponse;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  if (isLoading)
    return (
      <div className="p-8">
        <div className="grid grid-cols-4 rounded-lg bg-base-800">
          <div className="col-span-1 mx-auto"></div>
          <div className="col-span-3"></div>
        </div>
      </div>
    );
  if (error || !data) return <p>Error: something went wrong =)</p>;
  return (
    <div className="p-8">
      <div className="grid grid-cols-4 rounded-lg bg-base-800">
        <div className="col-span-1 mx-auto">
          <MovieImage
            path={data.poster_path}
            movieId={movie.id}
            isFavourite={isFavourite}
            onAddToFavourites={onAddToFavourites}
          />
        </div>
        <div className="col-span-3">
          <MovieInfo movie={data} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
