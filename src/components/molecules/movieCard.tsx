import { MovieDetailsResponse, MovieResult } from "~/types/movies";
import MovieImage from "../atoms/movieImage";
import FavouriteStarButton from "../atoms/favouriteHeartButton";
import MovieTrailerButton from "../atoms/movieTrailerButton";
import MovieInfo from "../atoms/movieInfo";
import { useQuery } from "react-query";
import axios from "axios";

interface MovieCardProps {
  movieData: MovieResult;
}
const MovieCard = (props: MovieCardProps) => {
  const { movieData: movie } = props;
  const { data, isLoading, error } = useQuery(
    "movie-details" + movie.id,
    async () => {
      return (await axios.get(`/api/movies/details?id=${movie.id}`, {}))
        .data as MovieDetailsResponse;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Error: something went wrong =)</p>;
  // console.log(genres);
  return (
    <div className="p-8">
      <div className="grid grid-cols-4 rounded-lg bg-base-800">
        <div className="col-span-1 mx-auto">
          <MovieImage path={data.poster_path} movieId={movie.id} />
        </div>
        <div className="col-span-3">
          <MovieInfo movie={data} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
