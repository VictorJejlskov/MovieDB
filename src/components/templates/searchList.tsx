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

interface MovieListProps {
  url: string;
  searchQuery: string;
}
const SearchList = (props: MovieListProps) => {
  const [page, setPage] = useState<number>(1);
  const { url, searchQuery } = props;
  const {
    data: movies,
    isLoading: moviesLoading,
    error: moviesError,
  } = useQuery(
    ["movie-list", searchQuery],
    async () => {
      return (
        await axios.get(url, {
          params: {
            page: page.toString(),
            query: searchQuery,
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
  const notify = (id: string, title: string, isFavourite: boolean) =>
    toast.promise(
      handleAddToFavourites(id),
      {
        pending: isFavourite
          ? `Removing ${title} from favourites`
          : `Adding ${title} to favourites`,
        success: isFavourite ? `Removed ${title}` : `Added ${title}`,
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
  const handleAddToFavourites = async (id: string): Promise<void> => {
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
              movieId={movie.id.toString()}
              favourites={favourites}
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onAddToFavourites={async (
                id: string,
                title: string,
                isFavourite: boolean
              ): Promise<void> => {
                await notify(id, title, isFavourite);
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

export default SearchList;
