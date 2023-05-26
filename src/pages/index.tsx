import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const { data: sessionData } = useSession();
  return (
    <>
      <Head>
        <title>MovieFinder</title>
        <meta
          name="google-site-verification"
          content="BdVPlTJ3_LsiaYoB_IstOr5K1cNHnW24LKvXBrrSoKk"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-primary to-base-100">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Movie<span className="text-secondary">Finder</span>
          </h1>
          <button
            className={
              sessionData
                ? "btn-secondary btn rounded-full text-secondary-content "
                : "hidden"
            }
            onClick={() => void router.push("/dashboard")}
          >
            Dashboard
          </button>
          <button
            className={
              sessionData
                ? "btn-secondary btn rounded-full text-secondary-content "
                : "hidden"
            }
            onClick={() => void router.push("/dashboardtest")}
          >
            Dashboard Test (not logged in)
          </button>
          <button
            className={
              sessionData
                ? "btn-primary btn rounded-full px-10 py-3 font-semibold text-secondary-content no-underline transition"
                : "btn-secondary btn rounded-full px-10 py-3 font-semibold text-secondary-content no-underline transition"
            }
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >
            {sessionData ? "Sign out" : "Sign in"}
          </button>
        </div>
      </main>
    </>
  );
};
// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   return await validateNoSession(context, "/");
// }
export default Home;
