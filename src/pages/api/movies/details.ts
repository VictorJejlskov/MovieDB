import type { NextApiRequest, NextApiResponse } from "next";
import { getApiMovieRequest } from "~/server/movieapi";
import { MovieDetailsResponse } from "~/types/movies";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const details = await getApiMovieRequest<MovieDetailsResponse>(
        `/movie/${typeof req.query.id === "string" ? req.query.id : ""}`
      );
      res.status(200).send(details);
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
      break;
  }
}
