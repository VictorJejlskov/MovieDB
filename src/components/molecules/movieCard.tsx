import { Genre, MovieResult } from "~/types/movies";
import MovieImage from "../atoms/movieImage";
import FavouriteStarButton from "../atoms/favouriteStarButton";
import MovieTrailerButton from "../atoms/movieTrailerButton";
import MovieInfo from "../atoms/movieInfo";

interface MovieCardProps {
  movieData: MovieResult;
  genres: Genre[];
}
const MovieCard = (props: MovieCardProps) => {
  const { movieData: movie, genres: genres } = props;
  return (
    <div className="flex">
      <div className="flex-col">
        <MovieImage path={movie.poster_path} />
        <div className="flex">
          <FavouriteStarButton movieId={movie.id} />
          <MovieTrailerButton movieId={movie.id} />
        </div>
      </div>
      <div className="flex-col">
        <MovieInfo movie={movie} genres={genres} />
      </div>
    </div>
  );
};

export default MovieCard;
