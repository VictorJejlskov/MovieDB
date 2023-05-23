import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { getApiMovieRequest } from "~/server/movieapi";
import type { MovieDetailsResponse } from "~/types/movies";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const validatedQueryParams = movieQueryParamsSchema.parse(req.query);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const movies = await getApiMovieRequest<MovieDetailsResponse>(
        "search/movie",
        validatedQueryParams
      );
      res.status(200).send(movies);
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
      break;
  }
}

const movieQueryParamsSchema = z.object({
  query: z.string(),
  page: z.string().optional(),
});
