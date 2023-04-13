import { Genre, MovieResult } from "~/types/movies";

interface InfoProps {
  movie: MovieResult;
  genres: Genre[];
}
const MovieInfo = (props: InfoProps) => {
  const { movie: movie, genres: genreList } = props;
  // console.log(genreList);
  return (
    <div>
      {movie.title}
      {movie.overview}
      {movie.release_date}
      {movie.vote_average}
      {movie.vote_count}
    </div>
  );
};
export default MovieInfo;
