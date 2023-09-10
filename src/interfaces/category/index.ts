import { ProductInterface } from 'interfaces/product';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CategoryInterface {
  id?: string;
  name: string;
  organization_id: string;
  is_locked?: boolean;
  created_at?: any;
  updated_at?: any;
  product?: ProductInterface[];
  organization?: OrganizationInterface;
  _count?: {
    product?: number;
  };
}

export interface CategoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
}
