import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { GenreListResponse, MovieListResponse } from "~/types/movies";
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
  const {
    data: genres,
    isLoading: genresLoading,
    error: genresError,
  } = useQuery(
    "movie-genres",
    async () => {
      return (await axios.get(`/api/movies/genres`)).data as GenreListResponse;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  if (moviesLoading || genresLoading) return <p>Loading...</p>;
  if (moviesError || genresError || !genres)
    return <p>Error: something went wrong =)</p>;
  // console.log(genres.results);
  return (
    <div>
      <div className="grid grid-cols-3">
        {movies?.results.map((movie) => (
          <div className="" key={movie.id}>
            <MovieCard movieData={movie} genres={genres.results} />
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
