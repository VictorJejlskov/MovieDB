import type { GetServerSidePropsContext } from "next";
import Page from "~/components/templates/page";
import MovieList from "~/components/templates/movieList";
import { validateSession } from "~/server/clientAuth";

const NowPlaying = () => {
  return (
    <Page title="Now Playing">
      <MovieList url={"/api/movies/nowplaying"} />
    </Page>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await validateSession(context);
}

export default NowPlaying;
