import type { MovieDetailsResponse } from "~/types/movies";
import MovieRatingStars from "./movieRatingStars";

interface InfoProps {
  movie: MovieDetailsResponse;
}
const MovieInfo = (props: InfoProps) => {
  const { movie: movie } = props;
  return (
    <div className="relative grid h-full grid-rows-6 pt-4">
      <div className="row-span-6 ">
        <p className="text-bold line-clamp-1 text-center text-xl font-extrabold">
          {movie.title} ({movie.release_date.split("-")[0]})
        </p>
        <hr className="bg-base-850 my-3 h-px border-t-0  bg-gradient-to-r from-base-900 via-base-500 to-base-900 opacity-100" />
        <p className="line-clamp-6">{movie.overview}</p>
      </div>
      <div className="">
        <div className="absolute bottom-1 flex place-items-center">
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
