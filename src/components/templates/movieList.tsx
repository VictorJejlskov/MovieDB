import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import type { FavouriteMovie, MovieListResponse } from "~/types/movies";
import MovieCard from "../molecules/movieCard";

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
  const handleAddToFavourites = async (id: string) => {
    await axios.get(`/api/movies/favourites/${id}`);
    await refetchFavourites();
    console.log(favourites);
  };
  if (moviesLoading || favouritesLoading || !favourites)
    return <p>Loading...</p>;
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
              onAddToFavourites={async (id: string) => {
                await handleAddToFavourites(id);
              }}
            />
          </div>
        ))}
      </div>
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
  );
};

export default MovieList;
