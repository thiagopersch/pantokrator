import NextAuth from 'next-auth';
import { RedirectableProvider } from 'next-auth/react';

import { gprofile } from 'models/gprofile';

declare module 'next-auth' {
  interface Session {
    guser: {
      login: string;
      name: string;
      change_password: boolean;
    };
    jwt: string;
    id: string;

    guserprofile_id?: string;
    gprofile?: GPROFILE;
  }

  interface User {
    id: string;
    login: string;
    name: string;
    jwt: string;
    change_password: boolean;
    guserprofile_id: string;
    gprofile_id: GPROFILE;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    login: string;
    name: string;
    jwt: string;
    change_password: boolean;
    guserprofile_id: string;
    gprofile_id: GPROFILE;
  }
}
declare module 'next-auth/react' {
  export type CustomRedirectableProvider =
    | RedirectableProvider
    | 'refresh'
    | 'manualsignout';

  export function signIn<P extends SignInProvider = undefined>(
    provider?: P,
    options?: SignInOptions,
    authorizationParams?: SignInAuthorisationParams
  ): Promise<
    P extends CustomRedirectableProvider
      ? SignInResponse | undefined
      : undefined
  >;
}
