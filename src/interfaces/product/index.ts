import { OutfitProductInterface } from 'interfaces/outfit-product';
import { CategoryInterface } from 'interfaces/category';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  category_id: string;
  link: string;
  created_at?: any;
  updated_at?: any;
  outfit_product?: OutfitProductInterface[];
  category?: CategoryInterface;
  _count?: {
    outfit_product?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  category_id?: string;
  link?: string;
}
