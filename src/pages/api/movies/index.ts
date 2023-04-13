import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { getServerAuthSession } from "~/server/auth";
import { getApiMovieRequest } from "~/server/movieapi";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerAuthSession({ req, res });
  // if (!session || !session.user)
  //   res.status(403).json({ message: "Not permitted!" });
  switch (req.method) {
    case "GET":
      const validatedQueryParams = movieQueryParamsSchema.parse(req.query);
      const movies = await getApiMovieRequest(
        "discover/movie",
        validatedQueryParams
      );
      console.log(movies);
      res.status(200).send(movies);
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
      break;
  }
}

const movieQueryParamsSchema = z.object({
  sort_by: z
    .enum([
      "popularity.asc",
      "popularity.desc",
      "release_date.asc",
      "release_date.desc",
      "revenue.asc",
      "revenue.desc",
      "primary_release_date.asc",
      "primary_release_date.desc",
      "original_title.asc",
      "original_title.desc",
      "vote_average.asc",
      "vote_average.desc",
      "vote_count.asc",
      "vote_count.desc",
    ])
    .optional(),
  page: z.string().optional(),
});
