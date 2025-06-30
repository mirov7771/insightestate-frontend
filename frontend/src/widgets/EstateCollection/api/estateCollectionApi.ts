import { api } from '@/shared/api';
import { AxiosResponse } from 'axios';
import {
  Grade,
  InfrastructureDto,
  Location,
  Price,
  Profitability,
  RoomLayouts,
} from '@/widgets/Detail/api/detailApi';

type ResponseGetEstateCollection = {
  hasMore: boolean;
  items: Array<EstateCollection>;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
};

export type EstateCollection = {
  id: string;
  name: string;
  agentInfo?: AgentInfo;
  estates?: Array<Estate>;
};

export type EstateOptions = {
  childRoom: boolean;
  coworking: boolean;
  entertainment: boolean;
  gym: boolean;
  petFriendly: boolean;
  shop: boolean;
};

export type Estate = {
  buildEndDate: string;
  city: string;
  id: string;
  level: 'COMFORT' | 'LUX' | 'PREMIUM' | 'UNKNOWN';
  name: string;
  options: EstateOptions;
  projectId: string;
  exteriorImages?: string[];
  facilityImages?: string[];
  floors?: number;
  grade?: Grade;
  infrastructure?: InfrastructureDto;
  interiorImages?: string[];
  likes?: number;
  location?: Location;
  paymentPlanList?: string[];
  price?: Price;
  profitability?: Profitability;
  roomLayouts?: RoomLayouts;
  shortDescriptionEn?: string;
  shortDescriptionRu?: string;
};

export type CreateCollectionRs = {
  id: string;
};

export type AgentInfo = {
  id: string;
  fio?: string;
  location?: string;
  login?: string;
  mobileNumber?: string;
  profileImage?: string;
  tgName?: string;
  whatsUp?: string;
};

export type HelpWithClientRq = {
  lastName: string;
  location: string;
  name: string;
  objectId: string;
  objectName: string;
  phone: string;
};

export type TariffRs = {
  extra: Tariff[];
  main: Tariff[];
};

export type Tariff = {
  description: string[];
  id: string;
  price: number;
  title: string;
};

export type UserSubscription = {
  subscription?: Subscription;
  tariffs?: TariffRs;
};

export type Subscription = {
  extra?: SubscriptionInfo;
  main?: SubscriptionInfo;
};

export type SubscriptionInfo = {
  id?: string;
  payAmount?: number;
  payDate?: string;
};

export type StripeRq = {
  amount: number;
  currency: string;
};

export type StripeRs = {
  clientSecret: string;
};

export type LikeDto = {
  collection: string;
  collectionId: string;
  email: string;
  estateId: string;
  title: string;
  url: string;
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
    collectionId: string,
    estateId: string,
    unitId?: string
  ): Promise<AxiosResponse<void>> => {
    try {
      return await api.post<void>(
        `/v1/estate-collections/${collectionId}/estate`,
        {},
        {
          params: { estateId, unitId },
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
  getEstateCollectionById: async (id: string): Promise<AxiosResponse<EstateCollection>> => {
    try {
      return await api.get<EstateCollection>(`/v1/estate-collections/${id}`);
    } catch (error) {
      throw error;
    }
  },
  getTariffs: async (): Promise<AxiosResponse<TariffRs>> => {
    try {
      return await api.get<TariffRs>('/v1/tariff');
    } catch (error) {
      throw error;
    }
  },
  getUserSubscription: async (token: string): Promise<AxiosResponse<UserSubscription>> => {
    try {
      const userInfo = await api.get<AgentInfo>(`/users/me`, {
        headers: {
          Authorization: `Basic ${token.replace('Basic ', '')}`,
        },
      });

      localStorage.setItem('userId', userInfo.data.id);
      return await api.get<UserSubscription>(`/v1/subscription?userId=${userInfo.data.id}`);
    } catch (error) {
      throw error;
    }
  },
  saveUserSubscription: async (tariffId: string): Promise<AxiosResponse<void>> => {
    try {
      return await api.post<void>('/v1/subscription', {
        userId: localStorage.getItem('userId'),
        tariffId: tariffId,
      });
    } catch (error) {
      throw error;
    }
  },
  stripeSession: async (price: number): Promise<AxiosResponse<StripeRs>> => {
    try {
      return await api.post<StripeRs>('/v1/stripe/session', {
        amount: price,
        currency: 'usd',
        userId: localStorage.getItem('userId'),
      });
    } catch (error) {
      throw error;
    }
  },
  updateCollection: async (id: string, name: string): Promise<AxiosResponse<void>> => {
    try {
      return await api.put<void>(`/v1/estate-collections/${id}`, {
        name: name,
      });
    } catch (error) {
      throw error;
    }
  },
  saveLike: async (rq: LikeDto): Promise<AxiosResponse<void>> => {
    try {
      return await api.post<void>('/v1/estate-collections/like', rq);
    } catch (error) {
      throw error;
    }
  },
};
