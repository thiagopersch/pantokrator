import { gprofilemodule } from './gprofilemodule';

export type gappmodule = {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_At: string;
  gprofile_module: gprofilemodule[];
};
