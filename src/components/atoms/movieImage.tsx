import MovieTrailerButton from "./movieTrailerButton";
import FavouriteHeartButton from "./favouriteHeartButton";

interface MovieImageProps {
  path: string;
  movieId: number;
  isFavourite: boolean;
  onAddToFavourites: (id: string, isFavourite: boolean) => Promise<void>;
}

const MovieImage = (props: MovieImageProps) => {
  const posterBasePath = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
  const { path, movieId, isFavourite, onAddToFavourites } = props;

  return (
    <div className="relative mx-2">
      <div className="">
        <img
          src={posterBasePath + path}
          className="w-full -translate-y-3 rounded-t-xl border-4 border-white"
          alt="Poster Image"
        />
        <div className="absolute bottom-[13%] right-[4%] z-50">
          <FavouriteHeartButton
            movieId={movieId}
            isFavourite={isFavourite}
            onAddToFavourites={onAddToFavourites}
          />
        </div>
      </div>
      <div className="-mb-1 -translate-y-3">
        <MovieTrailerButton movieId={movieId} />
      </div>
    </div>
  );
};

export default MovieImage;
