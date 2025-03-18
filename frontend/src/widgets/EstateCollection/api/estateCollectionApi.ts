import { api } from '@/shared/api';
import { AxiosResponse } from 'axios';
import {
  EstateDetail,
  Grade,
  InfrastructureDto,
  Price,
  Profitability,
} from '@/widgets/Detail/api/detailApi';

type ResponseGetEstateCollection = {
  hasMore: boolean;
  items: Array<EstateCollection>;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
};

export type EstateCollection = {
  estates: Array<Estate>;
  id: string;
  name: string;
};

export type Estate = {
  buildEndDate: string;
  id: string;
  level: 'COMFORT' | 'LUX' | 'PREMIUM' | 'UNKNOWN';
  name: string;
  projectId: string;
  exteriorImages?: string[];
  facilityImages?: string[];
  grade?: Grade;
  infrastructure?: InfrastructureDto;
  interiorImages?: string[];
  price?: Price;
  profitability?: Profitability;
};

export type CreateCollectionRs = {
  id: string;
};

export type AgentInfo = {
  fio?: string;
  location?: string;
  login?: string;
  mobileNumber?: string;
};

export type HelpWithClientRq = {
  lastName: string;
  location: string;
  name: string;
  objectId: string;
  objectName: string;
  phone: string;
};

export const estateCollectionApi = {
  getEstateCollection: async (
    token: string
  ): Promise<AxiosResponse<ResponseGetEstateCollection>> => {
    try {
      return await api.get<ResponseGetEstateCollection>(
        '/v1/estate-collections?pageNumber=0&pageSize=25',
        {
          headers: {
            Authorization: `Basic ${token.replace('Basic ', '')}`,
          },
        }
      );
    } catch (error) {
      throw error;
    }
  },
  createCollection: async (
    token: string,
    name?: string
  ): Promise<AxiosResponse<CreateCollectionRs>> => {
    try {
      return await api.post<CreateCollectionRs>(
        '/v1/estate-collections',
        {
          name: name || `Подборка ${token.replace('Basic ', '')}`,
        },
        {
          headers: {
            Authorization: `Basic ${token.replace('Basic ', '')}`,
          },
        }
      );
    } catch (error) {
      throw error;
    }
  },
  addToCollection: async (
    token: string,
    id: string,
    estateId: string
  ): Promise<AxiosResponse<void>> => {
    try {
      return await api.post<void>(
        `/v1/estate-collections/${id}/estate?estateId=${estateId}`,
        {},
        {
          headers: {
            Authorization: `Basic ${token.replace('Basic ', '')}`,
          },
        }
      );
    } catch (error) {
      throw error;
    }
  },
  deleteFromCollection: async (
    token: string,
    id: string,
    estateId: string
  ): Promise<AxiosResponse<void>> => {
    try {
      return await api.delete<void>(`/v1/estate-collections/${id}/estate?estateId=${estateId}`, {
        headers: {
          Authorization: `Basic ${token.replace('Basic ', '')}`,
        },
      });
    } catch (error) {
      throw error;
    }
  },
  deleteCollection: async (token: string, id: string): Promise<AxiosResponse<void>> => {
    try {
      return await api.delete<void>(`/v1/estate-collections/${id}`, {
        headers: {
          Authorization: `Basic ${token.replace('Basic ', '')}`,
        },
      });
    } catch (error) {
      throw error;
    }
  },
  getAgentInfo: async (token: string): Promise<AxiosResponse<AgentInfo>> => {
    try {
      return await api.get<AgentInfo>(`/users/me`, {
        headers: {
          Authorization: `Basic ${token.replace('Basic ', '')}`,
        },
      });
    } catch (error) {
      throw error;
    }
  },
  helpWithClient: async (token: string, rq: HelpWithClientRq): Promise<AxiosResponse<void>> => {
    try {
      return await api.post<void>(`/users/help`, rq, {
        headers: {
          Authorization: `Basic ${token.replace('Basic ', '')}`,
        },
      });
    } catch (error) {
      throw error;
    }
  },
};
