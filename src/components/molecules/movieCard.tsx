import type {
  FavouriteMovie,
  MovieDetailsResponse,
  MovieResult,
} from "~/types/movies";
import MovieImage from "../atoms/movieImage";
import MovieInfo from "../atoms/movieInfo";
import { useQuery } from "react-query";
import axios from "axios";
import MovieCardPlaceholder from "./movieCardPlaceholder";

interface MovieCardProps {
  movieData: MovieResult;
  favourites: FavouriteMovie[];
  onAddToFavourites: (id: string, isFavourite: boolean) => Promise<void>;
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
      <div className="w-full">
        <MovieCardPlaceholder />
      </div>
    );
  if (error || !data) return <p>Error: something went wrong =)</p>;
  return (
    <div className="grid grid-cols-3 rounded-lg bg-primary-focus text-primary-content">
      <div className="col-span-1">
        <MovieImage
          path={data.poster_path}
          movieId={movie.id}
          isFavourite={isFavourite}
          onAddToFavourites={onAddToFavourites}
        />
      </div>
      <div className="col-span-2">
        <MovieInfo movie={data} />
      </div>
    </div>
  );
};

export default MovieCard;
