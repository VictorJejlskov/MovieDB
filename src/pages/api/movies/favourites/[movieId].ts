import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getApiFavouriteMovieCreateRequest } from "~/server/movieapi";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const { movieId } = req.query;
      const session = await getSession({ req });
      if (!session) return;
      const userId = session.user.id;
      if (!movieId) return;
      const idString: string = movieId.toString();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const details = await getApiFavouriteMovieCreateRequest(idString, userId);
      res.status(200).send(details);
      break;
    case "GET":
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
      break;
  }
}
