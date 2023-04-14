import { MovieDetailsResponse } from "~/types/movies";
import FavouriteStarButton from "./favouriteHeartButton";
import MovieTrailerButton from "./movieTrailerButton";
import MovieRatingStars from "./movieRatingStars";

interface InfoProps {
  movie: MovieDetailsResponse;
}
const MovieInfo = (props: InfoProps) => {
  const { movie: movie } = props;
  return (
    <div className="grid h-full grid-rows-6">
      <div className="row-span-5">
        <p className="text-bold truncate pt-4 text-center text-2xl font-extrabold">
          {movie.title} ({movie.release_date.split("-")[0]})
        </p>
        <hr className="bg-base-850 my-3 h-px border-t-0  bg-gradient-to-r from-base-900 via-base-500 to-base-900 opacity-100" />
        <p></p>
        <p className="pr-3 line-clamp-5">{movie.overview}</p>
      </div>

      <div className="row-span-1">
        <div className="place-items-left grid grid-cols-6">
          <div className="col-span-4 flex">
            <FavouriteStarButton movieId={movie.id} />
            Rating: {movie.vote_average.toPrecision(2)}/10 | Votes:{" "}
            {movie.vote_count}
          </div>
          <MovieRatingStars rating={movie.vote_average} />
        </div>
      </div>
    </div>
  );
};
export default MovieInfo;
