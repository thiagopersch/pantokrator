import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { WithAccessOptions } from './validateHasAccess';

type ProtectedRoutesOptions = Partial<WithAccessOptions> & {
  validateChangePass?: boolean;
};

async function protectedRoutes(
  context: GetServerSidePropsContext,
  options?: ProtectedRoutesOptions
) {
  const session = await getSession(context);

  if (!session) {
    context.res.writeHead(302, {
      Location: '/home'
      // Location: `/sign-in?callbackUrl=${context.resolvedUrl}`
    });
    context.res.end();
  } else if (options?.validateChangePass && session.guser.change_password) {
    context.res.writeHead(302, {
      Location: `/change-password?callbackUrl=${context.resolvedUrl}`
    });
    context.res.end();
  }

  return session;
}

export default protectedRoutes;
