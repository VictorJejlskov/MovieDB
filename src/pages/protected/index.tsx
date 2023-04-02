import { UserRole } from "@prisma/client";
import { GetServerSidePropsContext } from "next";
import { getSession, useSession } from "next-auth/react";

const Index = (props: any) => {
  const { data: sessionData } = useSession();
  console.log(props);
  return (
    <>
      <h1>Hello World!</h1>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const session = await getSession({ req });
  console.log(session);
  if (session?.user.role != UserRole.USER) {
    return {
      redirect: { destination: "/" },
    };
  }
  return { props: { name: "joe" } };
}
export default Index;
