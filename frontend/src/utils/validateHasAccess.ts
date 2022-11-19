import { Session } from 'next-auth';

import { gprofilemodule } from 'models/gprofilemodule';

export type WithAccessOptions = {
  module: string;
  rule?: 'READ' | 'WRITE';
};

export const validateHasAccess = (
  session: Session | null,
  modules: gprofilemodule[],
  { module, rule }: WithAccessOptions
) => {
  if (!session) return false;

  const findedModule = modules.find(
    ({ gappmodule_id }) => gappmodule_id.name === module
  );
  if (!findedModule) return false;

  if (rule) {
    if (rule === 'READ') return findedModule.read;
    if (rule === 'WRITE') return findedModule.write;
    return false;
  }

  return true;
};
