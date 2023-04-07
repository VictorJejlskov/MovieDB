import axios from "axios";
import { env } from "~/env.mjs";

export const getApiMovieRequest = async (
  endpoint: string,
  queryParams: any = null
) => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/${endpoint}`, {
    params: { ...queryParams, api_key: env.MOVIEDB_API_KEY },
  });
  return data;
};
