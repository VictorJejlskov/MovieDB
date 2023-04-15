import Head from "next/head";
import NavBar from "../molecules/navBar";

interface PageProps {
  title: string;
  children: React.ReactNode;
}

const Page = (props: PageProps) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="min-w-screen max-w-screen h-full min-h-screen bg-base-950 text-base-300">
        {props.children}
      </div>
    </>
  );
};

export default Page;
