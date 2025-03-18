import { api } from '@/shared/api';
import { AxiosResponse } from 'axios';

export type EstateDetail = {
  floors: number;
  id: string;
  landPurchased: boolean;
  location: Location;
  name: string;
  projectId: string;
  buildEndDate?: string;
  developer?: Developer;
  eiaEnabled?: boolean;
  exteriorImages?: string[];
  grade?: Grade;
  infrastructure?: InfrastructureDto;
  interiorImages?: string[];
  level?: string;
  options?: Options;
  price?: Price;
  product?: string;
  profitability?: Profitability;
  projectCount?: ProjectUnitCount;
  roomLayouts?: RoomLayouts;
  shortDescriptionRu?: string;
  status?: string;
  type?: string;
  unitCount?: ProjectUnitCount;
  facilityImages?: string[];
};

export type Developer = {
  name?: string;
};

export type Grade = {
  comfortOfLife?: number;
  investmentPotential?: number;
  investmentSecurity?: number;
  main?: number;
  projectLocation?: number;
};

export type ProjectUnitCount = {
  available?: number;
  build?: number;
  finished?: number;
  sailed?: number;
  total?: number;
};

export type Location = {
  beach?: string;
  district?: string;
  mapUrl?: string;
  name?: string;
};

export type Profitability = {
  capRateFirstYear?: number;
  irr?: number;
  roi?: number;
  roiSummary?: number;
};

type Time = {
  car?: number;
  walk?: number;
};

export type InfrastructureDto = {
  airportTime?: Time;
  beachTime?: Time;
  mallTime?: Time;
  schoolRadius?: number;
};

export type Price = {
  avg?: number;
  max?: number;
  min?: number;
};

type RoomLayout = {
  price?: Price;
  pricePerMeter?: Price;
  square?: Price;
};

export type RoomLayouts = {
  five?: RoomLayout;
  four?: RoomLayout;
  one?: RoomLayout;
  studio?: RoomLayout;
  three?: RoomLayout;
  two?: RoomLayout;
  villaFive?: RoomLayout;
  villaFour?: RoomLayout;
  villaThree?: RoomLayout;
  villaTwo?: RoomLayout;
};

export type Options = {
  childRoom?: boolean;
  coworking?: boolean;
  entertainment?: boolean;
  gym?: boolean;
  parkingSize?: number;
  shop?: boolean;
};

export const LevelType = new Map<string, string>([
  ['COMFORT', 'Комфорт'],
  ['LUX', 'Люкс'],
  ['PREMIUM', 'Премиум'],
  ['UNKNOWN', 'Не указан'],
]);

export const EstateType = new Map<string, string>([
  ['VILLA', 'Вилла'],
  ['APARTMENT', 'Квартира'],
]);

export const detailApi = {
  getDetail: async (id: string | undefined): Promise<AxiosResponse<EstateDetail>> => {
    try {
      return await api.get<EstateDetail>(`v1/estate/${id}`);
    } catch (error) {
      throw error;
    }
  },
};
