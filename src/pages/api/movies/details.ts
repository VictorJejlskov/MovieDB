import type { NextApiRequest, NextApiResponse } from "next";
import { getApiMovieRequest } from "~/server/movieapi";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const details = await getApiMovieRequest(`/movie/${req.query.id}`);
      res.status(200).send(details);
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
      break;
  }
}
