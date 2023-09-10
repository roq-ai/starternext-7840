import axios from 'axios';
import queryString from 'query-string';
import { OutfitInterface, OutfitGetQueryInterface } from 'interfaces/outfit';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getOutfits = async (query?: OutfitGetQueryInterface): Promise<PaginatedInterface<OutfitInterface>> => {
  const response = await axios.get('/api/outfits', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createOutfit = async (outfit: OutfitInterface) => {
  const response = await axios.post('/api/outfits', outfit);
  return response.data;
};

export const updateOutfitById = async (id: string, outfit: OutfitInterface) => {
  const response = await axios.put(`/api/outfits/${id}`, outfit);
  return response.data;
};

export const getOutfitById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/outfits/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteOutfitById = async (id: string) => {
  const response = await axios.delete(`/api/outfits/${id}`);
  return response.data;
};
