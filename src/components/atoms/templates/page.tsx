import Head from "next/head";

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
      <div className="bg-base-950">{props.children}</div>
    </>
  );
};

export default Page;
