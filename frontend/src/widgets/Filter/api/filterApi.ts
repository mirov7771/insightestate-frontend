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
  toolTip1?: string,
  toolTip2?: string,
  toolTip3?: string,
  city?: string,
  beach?: string,
  beachTravelTimeCar?: number,
  beachTravelTimeWalk?: number,
};

export type GetEstateParams = {
  airportTravelTimes?: string[];
  beachName?: string[];
  beachTravelTimes?: string[];
  buildEndYears?: number[];
  city?: string[];
  grades?: string[];
  managementCompanyEnabled?: string;
  maxPrice?: number;
  minPrice?: number;
  pageNumber?: number;
  pageSize?: number;
  parking?: boolean;
  price?: string;
  rooms?: string[];
  types?: string[];
};

export type GetEstateAi = {
  request: string;
};

type ResponseGetEstate = {
  hasMore: boolean;
  items: Array<Estate>;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
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
  getEstateWithParams: async (
    params?: GetEstateParams
  ): Promise<AxiosResponse<ResponseGetEstate>> => {
    try {
      return await api.get<ResponseGetEstate>('v1/estate', {
        params: { ...params },
      });
    } catch (error) {
      throw error;
    }
  },
  getEstateAi: async (params?: GetEstateAi): Promise<AxiosResponse<ResponseGetEstate>> => {
    try {
      return await api.post<ResponseGetEstate>('v1/estate/ai', params);
    } catch (error) {
      throw error;
    }
  },
};
