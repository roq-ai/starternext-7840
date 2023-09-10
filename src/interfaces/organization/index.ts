import { CategoryInterface } from 'interfaces/category';
import { OutfitInterface } from 'interfaces/outfit';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  category?: CategoryInterface[];
  outfit?: OutfitInterface[];
  user?: UserInterface;
  _count?: {
    category?: number;
    outfit?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
