import { useEffect } from 'react';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import protectedRoutes from 'utils/protected-routes';

export default function AppUIndex() {
  const { push } = useRouter();

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      push('/home');
    } else {
      push('/auth');
    }
  }, [session, push]);

  return <></>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);

  return { props: { session } };
}
