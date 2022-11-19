import { useMemo } from 'react';
import { Session } from 'next-auth';
import { QueryObserverOptions, useQuery } from 'react-query';

import { gprofilemodule } from 'models/gprofilemodule';

import { initializeApi } from 'services/api';

export const GPROFILEMODULEKeys = {
  all: 'gprofile-modules' as const,
  lists: () => [...GPROFILEMODULEKeys.all, 'list'],
  list: (filters: string) => [...GPROFILEMODULEKeys.lists(), { filters }]
};

type ListGProfileModuleFilters = {
  GPROFILE_ID?: string;
};

export const listGProfileModule = (
  session: Session | null,
  filters: ListGProfileModuleFilters = {}
) => {
  const api = initializeApi(session);

  return api
    .get<gprofilemodule[]>('/app/gprofile-module', { params: filters })
    .then((response) => response.data)
    .catch(() => undefined);
};

export const useListGProfileModule = (
  session: Session | null,
  filters: ListGProfileModuleFilters = {},
  queryOptions: QueryObserverOptions<gprofilemodule[] | undefined> = {}
) => {
  const key = useMemo(
    () =>
      GPROFILEMODULEKeys.list(
        JSON.stringify({ ...filters, TOKEN: session?.JWT })
      ),
    [filters, session]
  );

  const result = useQuery<gprofilemodule[] | undefined>(
    key,
    () => listGProfileModule(session, filters),
    queryOptions
  );

  return { ...result, key };
};
