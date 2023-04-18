import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import type {
  FavouriteMovie,
  MovieListResponse,
  MovieResult,
} from "~/types/movies";
import MovieCard from "../molecules/movieCard";
import MovieCardPlaceholder from "../molecules/movieCardPlaceholder";
import { toast } from "react-toastify";

const MovieList = () => {
  const [page, setPage] = useState<number>(1);
  const [sortBy] = useState<string | null>(null);
  const {
    data: movies,
    isLoading: moviesLoading,
    error: moviesError,
  } = useQuery(
    ["movie-list", page],
    async () => {
      return (
        await axios.get(`/api/movies/`, {
          params: {
            page: page.toString(),
            sort_by: sortBy,
          },
        })
      ).data as MovieListResponse;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  const {
    data: favourites,
    isLoading: favouritesLoading,
    error: favouritesError,
    refetch: refetchFavourites,
  } = useQuery(
    ["movie-favourites"],
    async () => {
      return (await axios.get(`/api/movies/favourites`))
        .data as FavouriteMovie[];
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  const notify = (id: string, movie: MovieResult, isFavourite: boolean) =>
    toast.promise(
      handleAddToFavourites(id, movie, isFavourite),
      {
        pending: isFavourite
          ? `Removing ${movie.title} from favourites`
          : `Adding ${movie.title} to favourites`,
        success: isFavourite
          ? `Removed ${movie.title}`
          : `Added ${movie.title}`,
        error: "ERROR D:",
      },
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        pauseOnFocusLoss: false,
        theme: "dark",
      }
    );
  const handleAddToFavourites = async (
    id: string,
    movie: MovieResult,
    isFavourite: boolean
  ): Promise<void> => {
    await axios.get(`/api/movies/favourites/${id}`);
    await refetchFavourites();
  };
  const n = 15; // Or something else

  if (moviesLoading || favouritesLoading || !favourites)
    return (
      <div className="mx-6 mt-6">
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {[...Array<number>(n)].map((e, i) => (
            <div className="w-full" key={i}>
              <MovieCardPlaceholder />
            </div>
          ))}
        </div>
      </div>
    );
  if (moviesError || favouritesError)
    return <p>Error: something went wrong =)</p>;

  return (
    <div className="mx-6 mt-6">
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {movies?.results.map((movie) => (
          <div className="" key={movie.id}>
            <MovieCard
              movieData={movie}
              favourites={favourites}
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onAddToFavourites={async (
                id: string,
                isFavourite: boolean
              ): Promise<void> => {
                await notify(id, movie, isFavourite);
              }}
            />
          </div>
        ))}
      </div>
      <div className="absolute top-8">
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next Page
        </button>
        <button
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
        >
          Previous Page
        </button>
      </div>
    </div>
  );
};

export default MovieList;
