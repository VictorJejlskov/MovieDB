import type { MovieDetailsResponse } from "~/types/movies";
import MovieRatingStars from "./movieRatingStars";

interface InfoProps {
  movie: MovieDetailsResponse;
}
const MovieInfo = (props: InfoProps) => {
  const { movie: movie } = props;
  return (
    <div className="grid h-full grid-rows-6 overflow-hidden px-3 pt-4">
      <div className="row-span-5">
        <p className="text-bold text-center text-2xl font-extrabold line-clamp-1">
          {movie.title} ({movie.release_date.split("-")[0]})
        </p>
        <hr className="bg-base-850 my-3 h-px border-t-0  bg-gradient-to-r from-base-900 via-base-500 to-base-900 opacity-100" />
        <p></p>
        <p className="line-clamp-5">{movie.overview}</p>
      </div>
      <div className="row-span-1">
        <div className="flex place-items-center">
          <MovieRatingStars rating={movie.vote_average} />
          <div className="">
            <div className="pl-2">
              {movie.vote_average.toPrecision(2)}/10 | {movie.vote_count} Votes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieInfo;
