import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getApiFavouriteMoviesRequest } from "~/server/movieapi";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const session = await getSession({ req });
      if (!session) return;
      const userId = session.user.id;

      const movies = await getApiFavouriteMoviesRequest(userId);
      res.status(200).send(movies);
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
      break;
  }
}
