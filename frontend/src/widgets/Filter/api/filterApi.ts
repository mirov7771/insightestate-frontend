import { api } from '@/shared/api';
import { AxiosResponse } from 'axios';

export type Estate = {
  beachTravelTime: number;
  buildEndDate: string;
  grade: number;
  id: string;
  level: 'COMFORT' | 'LUX' | 'PREMIUM' | 'UNKNOWN';
  name: string;
  priceMin: number;
  projectId: string;
  roi: number;
  exteriorImages?: string[];
  facilityImages?: string[];
  interiorImages?: string[];
};

export type GetEstateParams = {
  airportTravelTimes?: string[];
  beachTravelTimes?: string[];
  buildEndYears?: number[];
  grades?: string[];
  pageNumber?: number;
  pageSize?: number;
  parking?: boolean;
  price?: string;
  rooms?: string[];
  types?: string[];
};

type ResponseGetEstate = {
  hasMore: boolean;
  items: Array<Estate>;
  pageNumber: number;
  pageSize: number;
};

export const filterApi = {
  getEstate: async (params?: GetEstateParams): Promise<AxiosResponse<ResponseGetEstate>> => {
    try {
      const response = await api.get<ResponseGetEstate>('v1/estate', {
        params: { ...params, pageSize: 4 },
      });

      return response;
    } catch (error) {
      throw error;
    }
  },
};
