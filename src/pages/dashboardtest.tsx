import type { GetServerSidePropsContext } from "next";
import Page from "~/components/templates/page";
import MovieList from "~/components/templates/movieList";
import { validateSession } from "~/server/clientAuth";

const DashboardTest = () => {
  return (
    <Page title="Dashboard">
      <MovieList url={"/api/movies/"} />
    </Page>
  );
};

export default DashboardTest;
