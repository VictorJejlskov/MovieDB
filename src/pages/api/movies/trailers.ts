import type { NextApiRequest, NextApiResponse } from "next";
import { getApiMovieRequest } from "~/server/movieapi";
import { MovieTrailerListResponse } from "~/types/movies";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const trailers = await getApiMovieRequest<MovieTrailerListResponse>(
        `/movie/${typeof req.query.id === "string" ? req.query.id : ""}`
      );
      res.status(200).send(trailers);
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
      break;
  }
}
