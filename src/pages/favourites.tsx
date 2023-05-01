import type { GetServerSidePropsContext } from "next";
import Page from "~/components/templates/page";
import { validateSession } from "~/server/clientAuth";
import FavouriteList from "~/components/templates/favouriteList";

const Dashboard = () => {
  return (
    <Page title="Dashboard">
      <FavouriteList />
    </Page>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await validateSession(context);
}

export default Dashboard;
