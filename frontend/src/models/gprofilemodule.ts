import { gappmodule } from './gappmodule';
import { gprofile } from './gprofile';

export type gprofilemodule = {
  id: string;
  gprofile_id: gprofile;
  gprofile: string;
  gappmodule_id: gappmodule;
  gappmodule: string;
  read: boolean;
  write: boolean;
  created_at: string;
  updated_at: string;
};
