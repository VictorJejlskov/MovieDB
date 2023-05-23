import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import Page from "~/components/templates/page";
import SearchList from "~/components/templates/searchList";
import { validateSession } from "~/server/clientAuth";

const Search = () => {
  const router = useRouter();
  let searchTerm = router.query.term; // Access the searchTerm from the query parameter
  if (Array.isArray(searchTerm)) {
    searchTerm = searchTerm[0];
  }
  if (!searchTerm) searchTerm = "lol";
  return (
    <Page title="Searchlist">
      <SearchList url={"/api/movies/search"} searchQuery={searchTerm} />
    </Page>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await validateSession(context);
}

export default Search;
