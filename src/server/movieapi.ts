import axios, { AxiosResponse } from "axios";
import { env } from "~/env.mjs";

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
