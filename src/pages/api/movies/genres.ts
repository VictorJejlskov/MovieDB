import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { prisma } from "../../../server/db";
import axios from "axios";
import { env } from "~/env.mjs";
import { getApiMovieRequest } from "~/server/movieapi";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const trailers = await getApiMovieRequest(`genre/movie/list`);
      res.status(200).send(trailers);
      break;
    default:
      res.status(400).json({ message: "Invalid request method" });
      break;
  }
}
