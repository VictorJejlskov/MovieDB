import type { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

export async function validateSession(context: GetServerSidePropsContext) {
  const { req } = context;
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: { destination: "/" },
    };
  }
  return { props: {} };
}

export async function validateNoSession(
  context: GetServerSidePropsContext,
  redirectUrl: string
) {
  const { req } = context;
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: { destination: `/${redirectUrl}` },
    };
  }
  return { props: {} };
}
