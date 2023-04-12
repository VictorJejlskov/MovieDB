import { MovieResult } from "~/types/movies";
import MovieImage from "../atoms/movieImage";
import FavouriteStarButton from "../atoms/favouriteStarButton";

interface MovieCardProps {
  movieData: MovieResult;
}
const MovieCard = (props: MovieCardProps) => {
  const { movieData: movie } = props;
  return (
    <div className="flex">
      <div className="flex-col">
        <MovieImage path={movie.poster_path} />
        <FavouriteStarButton movieId={movie.id} />
      </div>
      <div className="flex-col">xD</div>
    </div>
  );
};

export default MovieCard;
