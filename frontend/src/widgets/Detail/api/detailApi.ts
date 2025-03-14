import { api } from '@/shared/api';
import { AxiosResponse } from 'axios';

export type EstateDetail = {
  id: string;
  landPurchased: boolean;
  location: Location;
  name: string;
  projectId: string;
  buildEndDate?: string;
  developer?: Developer;
  eiaEnabled?: boolean;
  exteriorImages?: string[];
  facilityImages?: string[];
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
};

type Developer = {
  name?: string;
};

export type Grade = {
  comfortOfLife?: number;
  investmentPotential?: number;
  investmentSecurity?: number;
  main?: number;
  projectLocation?: number;
};

type ProjectUnitCount = {
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
  studio?: RoomLayout;
  one?: RoomLayout;
  three?: RoomLayout;
  two?: RoomLayout;
  four?: RoomLayout;
  five?: RoomLayout;
  villaTwo?: RoomLayout
  villaThree?: RoomLayout
  villaFour?: RoomLayout
  villaFive?: RoomLayout
};

export type Options = {
  childRoom?: boolean;
  coworking?: boolean;
  entertainment?: boolean;
  gym?: boolean;
  shop?: boolean;
};

export const detailApi = {
  getDetail: async (id: string | undefined): Promise<AxiosResponse<EstateDetail>> => {
    try {
      return await api.get<EstateDetail>(`v1/estate/${id}`);
    } catch (error) {
      throw error;
    }
  },
};
