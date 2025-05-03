import { api } from '@/shared/api';
import { AxiosResponse } from 'axios';
import {
  EstateDetail,
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
  floors?: number;
  grade?: Grade;
  infrastructure?: InfrastructureDto;
  interiorImages?: string[];
  location?: Location;
  price?: Price;
  profitability?: Profitability;
  roomLayouts?: RoomLayouts;
};

export type CreateCollectionRs = {
  id: string;
};

export type AgentInfo = {
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
  main: Tariff[],
  extra: Tariff[]
}

export type Tariff = {
  id: string,
  title: string,
  description: string[],
  price: number
}

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
  getEstateCollectionById: async (id: string): Promise<AxiosResponse<EstateCollection>> => {
    try {
      return await api.get<EstateCollection>(`/v1/estate-collections/${id}`);
    } catch (error) {
      throw error;
    }
  },
  getTariffs: async (): Promise<TariffRs> => {
    return {
      "main": [
        {
          "id": "f1628768-72c2-40e4-9e6d-7c4ab7b1909b",
          "title": "Бесплатная версия",
          "description": [
            "— 3 бесплатных генераций предложений клиенту",
            "— 2 бесплатные подборки",
            "— 2 бесплатных запроса в AI подборщик",
            "— ограниченную аналитику по объекту: только оценки"
          ],
          "price": 0
        },
        {
          "id": "8acf9e68-c4d0-43b1-9c22-b7f712f101a4",
          "title": "PRO",
          "description": [
            "— 30 генераций предложений клиенту",
            "— 7 подборок",
            "— 4 бесплатных запроса в AI подборщик",
            "— вся аналитика по объекту: оценки, расчет экономики",
            "— возможность вступить в клуб",
            "— 2 инвайта в клуб каждый месяц"
          ],
          "price": 39
        },
        {
          "id": "b749d197-846e-49d4-aedc-abf7b3784b11",
          "title": "PREMIUM",
          "description": [
            "— Без ограничений генераций предложений клиенту",
            "— Без ограничений по подборокам",
            "— 8 бесплатных запросов в AI подборщик",
            "— вся аналитика по объекту: оценки, расчет экономики",
            "— возможность вступить в клуб",
            "— 5 инвайтов в клуб каждый месяц"
          ],
          "price": 59
        }
      ],
      "extra": [
        {
          "id": "4aee86e7-0b36-45a7-b19e-ad0086a81e6a",
          "title": "AI пакет к любому тарифу",
          "description": [
            "— Не ограниченное количество запросов в AI подборщик"
          ],
          "price": 29
        }
      ]
    }
  }
};
