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
  priceMax: number;
  projectId: string;
  roi: number;
  beach?: string;
  beachTravelTimeCar?: number;
  beachTravelTimeWalk?: number;
  city?: string;
  collectionCount?: number;
  exteriorImages?: string[];
  facilityImages?: string[];
  interiorImages?: string[];
  roiSummary?: number;
  toolTip1?: string;
  toolTip2?: string;
  toolTip3?: string;
  status?: string;
};

export type GetEstateParams = {
  airportTravelTimes?: string[];
  beachName?: string[];
  beachTravelTimes?: string[];
  buildEndYears?: number[];
  city?: string[];
  developer?: string[];
  grades?: string[];
  managementCompanyEnabled?: string;
  maxPrice?: number;
  minPrice?: number;
  name?: string;
  pageNumber?: number;
  parking?: boolean;
  petFriendly?: string;
  price?: string;
  rooms?: string[];
  types?: string[];
  untis?: string[];
  sizeMin?: number;
  sizeMax?: number;
  orderBy?: ORDER_BY;
  landPurchased?: string;
  eia?: string;
};

export type GetEstateAi = {
  request: string;
};

type ResponseGetEstate = {
  hasMore: boolean;
  items: Array<Estate>;
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

export type ORDER_BY = 'UPDATED_AT' | 'PRICE_ASC' | 'PRICE_DESC' | 'SIZE_ASC' | 'SIZE_DESC'

export const filterApi = {
  getEstate: async (params?: GetEstateParams): Promise<AxiosResponse<ResponseGetEstate>> => {
    const orderBy = params?.orderBy || localStorage.getItem('ORDER_BY') || 'UPDATED_AT'
    try {
      const userId = localStorage.getItem('userId');
      const response = userId
        ? await api.get<ResponseGetEstate>('v1/estate', {
            params: { ...params, pageSize: 12, orderBy },
            headers: { 'x-user-id': userId },
          })
        : await api.get<ResponseGetEstate>('v1/estate', {
            params: { ...params, pageSize: 12, orderBy },
          });

      return response;
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
