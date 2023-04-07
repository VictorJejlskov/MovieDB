import { MovieResult } from "~/types/movies";

interface MovieCardProps {
  movieData: MovieResult;
}
const MovieCard = (props: MovieCardProps) => {
  const { movieData: movie } = props;
  const posterBasePath = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
  return (
    <div>
      <div className="max-w-sm">
        <img className="w-full" src={posterBasePath + movie.poster_path} />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">
            {movie.title.length > 20
              ? movie.title.substring(0, 20).concat("...")
              : movie.title}
          </div>
          <p className="text-accent">
            {movie.overview.substring(0, 100).concat("....")}
          </p>
        </div>
        <div className="px-6 pb-2 pt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            Favourite
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #travel
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            Trailer
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
