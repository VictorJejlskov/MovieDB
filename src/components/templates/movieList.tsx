import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { MovieListResponse } from "~/types/movies";
import MovieCard from "../molecules/movieCard";

const MovieList = () => {
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string | null>(null);
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

  if (moviesLoading) return <p>Loading...</p>;
  if (moviesError) return <p>Error: something went wrong =)</p>;

  // console.log(genres.results);
  return (
    <div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {movies?.results.map((movie) => (
          <div className="" key={movie.id}>
            <MovieCard movieData={movie} />
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
