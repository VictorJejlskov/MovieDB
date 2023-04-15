import type { NextApiRequest, NextApiResponse } from "next";
import { getApiMovieRequest } from "~/server/movieapi";
import { MovieTrailerListResponse } from "~/types/movies";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

      const trailers = await getApiMovieRequest<MovieTrailerListResponse>(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `movie/${req.query.id}/videos`
      );
      res.status(200).send(trailers);
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
      break;
  }
}
