import { OutfitInterface } from 'interfaces/outfit';
import { ProductInterface } from 'interfaces/product';
import { GetQueryInterface } from 'interfaces';

export interface OutfitProductInterface {
  id?: string;
  outfit_id: string;
  product_id: string;
  created_at?: any;
  updated_at?: any;

  outfit?: OutfitInterface;
  product?: ProductInterface;
  _count?: {};
}

export interface OutfitProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  outfit_id?: string;
  product_id?: string;
}
