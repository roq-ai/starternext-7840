import axios from 'axios';
import queryString from 'query-string';
import { OutfitProductInterface, OutfitProductGetQueryInterface } from 'interfaces/outfit-product';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getOutfitProducts = async (
  query?: OutfitProductGetQueryInterface,
): Promise<PaginatedInterface<OutfitProductInterface>> => {
  const response = await axios.get('/api/outfit-products', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createOutfitProduct = async (outfitProduct: OutfitProductInterface) => {
  const response = await axios.post('/api/outfit-products', outfitProduct);
  return response.data;
};

export const updateOutfitProductById = async (id: string, outfitProduct: OutfitProductInterface) => {
  const response = await axios.put(`/api/outfit-products/${id}`, outfitProduct);
  return response.data;
};

export const getOutfitProductById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/outfit-products/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteOutfitProductById = async (id: string) => {
  const response = await axios.delete(`/api/outfit-products/${id}`);
  return response.data;
};
