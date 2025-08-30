import { api } from '@/shared/api';
import { AxiosResponse } from 'axios';

export type Unit = {
  code: string;
  corpus: string;
  createdAt: string;
  floor: string;
  id: string;
  isNew: boolean;
  number: string;
  planImage: string;
  price: string;
  priceSq: string;
  rooms: string;
  square: string;
  updatedAt: string;
};

export type UnitsFiltersParams = {
  maxPrice?: number;
  maxPriceSq?: number;
  maxSize?: number;
  minPrice?: number;
  minPriceSq?: number;
  minSize?: number;
  orderBy?: 'price' | 'area' | 'income' | 'payback';
  rooms?: '1' | '2' | '3' | '4' | 'studio';
};

export const unitsApi = {
  getUnitsByEstateId: async ({
    id,
    ...params
  }: UnitsFiltersParams & {
    id: string;
  }): Promise<AxiosResponse<{ id: string; images: string[]; items: Unit[]; name: string }>> => {
    try {
      return await api.get(`v1/estate/${id}/units`, { params });
    } catch (e) {
      throw e;
    }
  },
};
