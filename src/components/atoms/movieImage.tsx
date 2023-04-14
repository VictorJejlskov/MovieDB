import MovieTrailerButton from "./movieTrailerButton";

interface MovieImageProps {
  path: string | null;
  movieId: number;
}

const MovieImage = (props: MovieImageProps) => {
  const posterBasePath = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
  const { path, movieId } = props;
  return (
    <div className="mx-2">
      <img
        src={posterBasePath + path}
        className="-translate-y-3 rounded-t-xl border-4 border-white"
      />
      <div className="-mb-1 -translate-y-3">
        <MovieTrailerButton movieId={movieId} />
      </div>
    </div>
  );
};

export default MovieImage;
