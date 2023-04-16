import axios, { type AxiosResponse } from "axios";
import { env } from "~/env.mjs";
import { prisma } from "./db";

export const getApiMovieRequest = async <T>(
  endpoint: string,
  queryParams: Record<string, string | number> | null = null
): Promise<T> => {
  const response: AxiosResponse<T> = await axios.get(
    `https://api.themoviedb.org/3/${endpoint}`,
    {
      params: { ...queryParams, api_key: env.MOVIEDB_API_KEY },
    }
  );
  const data: T = response.data;
  return data;
};

export const getApiFavouriteMovieCreateRequest = async (
  movieId: string,
  userId: string
) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error(`User with ID ${userId} not found`);
  }

  const matchMovie = await prisma.favouriteMovie.findFirst({
    where: {
      movieId: movieId,
      userId: userId,
    },
  });

  if (matchMovie) {
    await prisma.favouriteMovie.deleteMany({
      where: {
        movieId: movieId,
        userId: userId,
      },
    });
  } else {
    await prisma.favouriteMovie.create({
      data: { movieId: movieId, user: { connect: { id: userId } } },
    });
  }
};
export const getApiFavouriteMoviesRequest = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error(`User with ID ${userId} not found`);
  }

  const movieList = await prisma.favouriteMovie.findMany({
    where: {
      userId: userId,
    },
  });

  return movieList;
};
