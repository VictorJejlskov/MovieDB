import { MovieResult } from "~/types/movies";
import MovieImage from "../atoms/movieImage";

interface MovieCardProps {
  movieData: MovieResult;
}
const MovieCard = (props: MovieCardProps) => {
  const { movieData: movie } = props;
  return (
    <div className="grid grid-cols-4 bg-base-800">
      <div>
        <MovieImage path={movie.poster_path} />
      </div>
    </div>
  );
};

export default MovieCard;
