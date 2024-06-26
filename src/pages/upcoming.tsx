import type { GetServerSidePropsContext } from "next";
import Page from "~/components/templates/page";
import MovieList from "~/components/templates/movieList";
import { validateSession } from "~/server/clientAuth";

const Dashboard = () => {
  return (
    <Page title="Dashboard">
      <MovieList url={"/api/movies/upcoming"} />
    </Page>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await validateSession(context);
}

export default Dashboard;
