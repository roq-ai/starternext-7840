import { OutfitProductInterface } from 'interfaces/outfit-product';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface OutfitInterface {
  id?: string;
  name: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  outfit_product?: OutfitProductInterface[];
  organization?: OrganizationInterface;
  _count?: {
    outfit_product?: number;
  };
}

export interface OutfitGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
}
