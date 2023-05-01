import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import MovieInfo from "~/components/atoms/movieInfo";
import MovieRatingStars from "~/components/atoms/movieRatingStars";
import YoutubeEmbed from "~/components/atoms/youtubeEmbed";
import Page from "~/components/templates/page";
import type {
  MovieDetailsResponse,
  MovieTrailerListResponse,
  MovieTrailerResponse,
} from "~/types/movies";

const Trailer = () => {
  const router = useRouter();
  const id = router.query.id! as string; // Use non-null assertion operator to guarantee that id is a string
  const [chosenMovie, setChosenMovie] = useState<MovieTrailerResponse>();
  const [trailers, setTrailers] = useState<MovieTrailerListResponse>();
  const [featurettes, setFeaturettes] = useState<MovieTrailerListResponse>();
  let trailerCounter = 1;
  let featureCounter = 1;
  const { data, isLoading, error } = useQuery(
    ["movie-trailers", id],
    async () => {
      return (await axios.get(`/api/movies/trailers?id=${id}`, {}))
        .data as MovieTrailerListResponse;
    },
    {
      enabled: !!id,
      refetchOnWindowFocus: false,
    }
  );

  const {
    data: movieData,
    isLoading: movieIsLoading,
    error: movieError,
  } = useQuery(
    "movie-details" + id,
    async () => {
      return (await axios.get(`/api/movies/details?id=${id}`, {}))
        .data as MovieDetailsResponse;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  useEffect(() => {
    if (data) {
      /* eslint-disable prefer-const */
      let trailerList = data;
      let featureList = Object.assign({}, data);
      trailerList.results = trailerList.results.filter((trailer) => {
        if (trailer.type == "Trailer") return trailer;
      });
      trailerList.results.reverse();
      featureList.results = featureList.results.filter((trailer) => {
        if (trailer.type == "Featurette") return trailer;
      });
      setChosenMovie(trailerList.results[0] as MovieTrailerResponse);
      setTrailers(trailerList);
      setFeaturettes(featureList);
    }
  }, [data]);
  if (!id) return null;
  if (isLoading || movieIsLoading)
    return (
      <Page title="Trailer">
        <p>Loading..</p>
      </Page>
    );
  if (error || movieError || !chosenMovie || !movieData)
    return (
      <Page title="Trailer">
        <p>Error: something went wrong =)</p>
      </Page>
    );
  return (
    <Page title="Trailer">
      <div className="">
        <div className="mb-2 mt-8">
          <YoutubeEmbed embedKey={chosenMovie.key} />
        </div>
        <div className="mb-2 flex w-full place-content-center">
          {trailers?.results.map((trailer) => (
            <div
              className="w-10 rounded-full bg-secondary text-center text-secondary-content"
              key={trailer.id}
            >
              <button
                className="w-full"
                onClick={() => setChosenMovie(trailer)}
              >
                {trailerCounter++}
              </button>
            </div>
          ))}
          {featurettes?.results.length ? (
            <div className="mx-5">|</div>
          ) : (
            <div></div>
          )}
          {featurettes?.results.map((trailer) => (
            <div
              className="w-10 rounded-full bg-primary text-center text-primary-content"
              key={trailer.id}
            >
              <button
                className="w-full"
                onClick={() => setChosenMovie(trailer)}
              >
                {featureCounter++}
              </button>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3">
          <div></div>
          <div className="">
            <div className="h-full overflow-hidden pt-4">
              <div className="">
                <div className="relative flex pb-8 ">
                  <p className="text-bold absolute left-0 right-0 line-clamp-1 text-center text-xl font-extrabold">
                    {movieData.title} ({movieData.release_date.split("-")[0]}){" "}
                  </p>
                  <div className="absolute right-0 mt-1">
                    {movieData.vote_average.toPrecision(2)}/10 |{" "}
                    {movieData.vote_count} Votes
                  </div>
                </div>
                <hr className="bg-base-850 from-base-900 via-base-500 to-base-900  my-3 h-px border-t-0 bg-gradient-to-r opacity-100" />
                <p className="line-clamp-8">{movieData.overview}</p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default Trailer;
