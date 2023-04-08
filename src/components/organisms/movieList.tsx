import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { useState } from "react";
import { useQuery } from "react-query";
import { validateSession } from "~/server/clientAuth";
import { MovieListResponse } from "~/types/movies";
import MovieCard from "../molecules/movieCard";

const MovieList = () => {
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const { data, isLoading, error } = useQuery(
    ["movie-list", page],
    async () => {
      return (
        await axios.get(`http://localhost:3000/api/movies/`, {
          params: {
            page: page.toString(),
            sort_by: sortBy,
          },
        })
      ).data as MovieListResponse;
    }
    //TODO { staleTime: 1000 }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: something went wrong =)</p>;
  return (
    <div>
      <div className="grid grid-cols-3">
        {data?.results.map((movie) => (
          <div className="">
            <MovieCard movieData={movie} key={movie.id} />
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
