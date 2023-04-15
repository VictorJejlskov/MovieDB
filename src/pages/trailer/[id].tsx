import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import YoutubeEmbed from "~/components/atoms/youtubeEmbed";
import Page from "~/components/templates/page";
import { MovieTrailerListResponse, MovieTrailerResponse } from "~/types/movies";

const Trailer = () => {
  const router = useRouter();
  const id = router.query.id! as string; // Use non-null assertion operator to guarantee that id is a string
  const [chosenMovie, setChosenMovie] = useState<MovieTrailerResponse>();
  const [trailers, setTrailers] = useState<MovieTrailerListResponse>();

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

  useEffect(() => {
    if (data) {
      /* eslint-disable prefer-const */
      let temp = data;
      temp.results = temp.results.filter((trailer) => {
        if (trailer.type == "Trailer" || trailer.type == "Featurette")
          return trailer;
      });
      setChosenMovie(temp.results[0] as MovieTrailerResponse);
      setTrailers(temp);
    }
  }, [data]);
  if (!id) return null;
  if (isLoading)
    return (
      <Page title="Trailer">
        <p>Loading..</p>
      </Page>
    );
  if (error || !chosenMovie)
    return (
      <Page title="Trailer">
        <p>Error: something went wrong =)</p>
      </Page>
    );
  return (
    <Page title="Trailer">
      <div className="">
        <YoutubeEmbed embedKey={chosenMovie.key} />
      </div>
      <div className="flex w-full place-content-center">
        {trailers?.results.map((trailer) => (
          <div
            className="w-10 rounded-full bg-primary text-center"
            key={trailer.id}
          >
            <button className="w-full" onClick={() => setChosenMovie(trailer)}>
              1
            </button>
          </div>
        ))}
      </div>
    </Page>
  );
};
export default Trailer;
