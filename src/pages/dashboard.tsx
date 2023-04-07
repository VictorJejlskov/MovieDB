import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { signOut } from "next-auth/react";
import Page from "~/components/atoms/templates/page";
import MovieList from "~/components/organisms/movieList";
import { validateSession } from "~/server/clientAuth";

const Dashboard = () => {
  return (
    <Page title="Dashboard">
      <div>
        <MovieList />
      </div>
      <button
        className="text-black rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        onClick={() => void signOut()}
      >
        Sign Out
      </button>
    </Page>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await validateSession(context);
}

export default Dashboard;
