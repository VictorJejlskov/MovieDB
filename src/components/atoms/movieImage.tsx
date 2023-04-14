import MovieTrailerButton from "./movieTrailerButton";

interface MovieImageProps {
  path: string | null;
  movieId: number;
}

const MovieImage = (props: MovieImageProps) => {
  const posterBasePath = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
  const { path, movieId } = props;
  return (
    <div className="">
      <img
        src={posterBasePath + path}
        className="m-auto mr-3 w-[90%] -translate-y-3 rounded-xl border-4 border-white"
      />
      <div className="-mb-1 -translate-y-3 text-center">
        <MovieTrailerButton movieId={movieId} />
      </div>
    </div>
  );
};

export default MovieImage;
