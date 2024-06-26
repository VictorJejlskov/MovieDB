import type { MovieDetailsResponse } from "~/types/movies";
import MovieRatingStars from "./movieRatingStars";

interface InfoProps {
  movie: MovieDetailsResponse;
}
const MovieInfo = (props: InfoProps) => {
  const timeToHrMinutes = (input: number) => {
    let hours = 0;
    while (input >= 60) {
      hours++;
      input -= 60;
    }
    if (hours && input) return `${hours}h ${input}min`;
    if (hours) return `${hours}h`;
    if (input) return `${input}min`;
    return "";
  };
  const genresToString = () => {
    if (!movie.genres.length) return;
    let stringToReturn = "";
    movie.genres.forEach((genre) => {
      stringToReturn += genre.name + ", ";
    });
    stringToReturn = stringToReturn.slice(0, -2);
    return stringToReturn;
  };
  const { movie: movie } = props;
  return (
    <div className="relative h-full overflow-hidden pr-3 pt-4">
      <div className="">
        <p className="text-bold line-clamp-1 text-center text-xl font-extrabold">
          {movie.title} ({movie.release_date.split("-")[0]})
        </p>
        <hr className="my-3 h-1 border-t-0 bg-base-100 bg-gradient-to-r from-base-300 via-base-100 to-base-300 opacity-100" />
        <div className="pb-2 font-bold">
          {timeToHrMinutes(movie.runtime)} | {genresToString()}
        </div>
        <p className="line-clamp-5">{movie.overview}</p>
      </div>
      <div className="">
        <div className="absolute bottom-1 flex place-items-center">
          <MovieRatingStars rating={movie.vote_average} />
          <div className="">
            <div className="pl-2 ">
              {movie.vote_average.toPrecision(2)}/10 | {movie.vote_count} Votes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieInfo;
