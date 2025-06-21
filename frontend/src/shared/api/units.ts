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

export const unitsApi = {
  getUnitsByEstateId: async ({
    id,
  }: {
    id: string;
  }): Promise<AxiosResponse<{ id: string; images: string[]; items: Unit[]; name: string }>> => {
    try {
      return await api.get(`v1/estate/${id}/units`);
    } catch (e) {
      throw e;
    }
  },
};
