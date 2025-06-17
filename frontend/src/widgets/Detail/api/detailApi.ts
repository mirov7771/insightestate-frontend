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
  facilityImages?: string[];
  grade?: Grade;
  infrastructure?: InfrastructureDto;
  interiorImages?: string[];
  level?: string;
  managementCompany?: ManagementCompany;
  options?: Options;
  paymentPlanList?: string[];
  price?: Price;
  product?: string;
  profitability?: Profitability;
  projectCount?: ProjectUnitCount;
  roomLayouts?: RoomLayouts;
  shortDescriptionEn?: string;
  shortDescriptionRu?: string;
  status?: string;
  type?: string;
  unitCount?: ProjectUnitCount;
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
  avg?: string;
  max?: string;
  min?: string;
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

export type ManagementCompany = {
  enabled?: boolean;
};

export const LevelTypeRu = new Map<string, string>([
  ['COMFORT', 'Комфорт'],
  ['LUX', 'Люкс'],
  ['PREMIUM', 'Премиум'],
  ['UNKNOWN', 'Не указан'],
]);

export const LevelTypeEn = new Map<string, string>([
  ['COMFORT', 'Comfort'],
  ['LUX', 'Lux'],
  ['PREMIUM', 'Premium'],
  ['UNKNOWN', 'Unknow'],
]);

export const EstateTypeRu = new Map<string, string>([
  ['VILLA', 'Вилла'],
  ['APARTMENT', 'Квартира'],
]);

export const EstateTypeEn = new Map<string, string>([
  ['VILLA', 'Villa'],
  ['APARTMENT', 'Apartment'],
]);

export const ScheduleByProject = new Map<string, string[]>([
  ['TH-HKT-NI-00060', ['30%', '20%', '20%', '20%', '10%']],
  ['TH-HKT-BT-00003', ['35%', '60%', '5%']],
  ['TH-HKT-KT-00005', ['15%', '15%', '70%']],
  ['TH-HKT-BT-00008', ['35%', '30%', '20%', '10%', '5%']],
  ['TH-HKT-MK-00066', ['35%', '20%', '30%', '15%']],
  ['TH-HKT-BT-00020', ['30%', '60%', '10%']],
  ['TH-HKT-LY-00023', ['30%', '30%', '20%', '15%', '5%']],
  ['TH-HKT-PT-00077', ['40%', '10%', '10%', '40%']],
  ['TH-HKT-BT-00026', ['35%', '5%', '15%', '20%', '25%']],
  ['TH-HKT-RW-00076', ['20%', '15%', '25%', '25%', '15%']],
  ['TH-HKT-RW-00031', ['35%', '20%', '20%', '20%', '5%']],
  ['TH-HKT-LY-00032', ['35%', '20%', '15%', '15%', '10%', '5%']],
  ['TH-HKT-RW-00033', ['30%', '20%', '20%', '10%', '10%', '10%']],
  ['TH-HKT-LY-00035', ['30%', '20%', '20%', '15%', '15%']],
  ['TH-HKT-SU-00038', ['35%', '25%', '15%', '15%', '10%']],
  ['TH-HKT-LY-00042', ['35%', '15%', '15%', '15%', '10%', '10%']],
  ['TH-HKT-KR-00044', ['35%', '10%', '15%', '15%', '15%', '5%', '5%']],
  ['TH-HKT-LY-00045', ['30%', '15%', '15%', '40%']],
  ['TH-HKT-BT-00046', ['35%', '25%', '20%', '20%']],
  ['TH-HKT-BT-00049', ['35%', '10%', '15%', '15%', '15%', '10%']],
  ['TH-HKT-KL-00051', ['35%', '15%', '10%', '40%']],
  ['TH-HKT-BT-00055', ['35%', '15%', '15%', '15%', '15%', '5%']],
  ['TH-HKT-BT-00068', ['30%', '30%', '40%']],
  ['TH-HKT-SU-00073', ['30%', '20%', '20%', '20%', '10%']],
  ['TH-HKT-KL-00074', ['30%', '30%', '15%', '15%', '10%']],
  ['TH-HKT-NY-00085', ['25%', '15%', '15%', '15%', '15%', '15%']],
  ['TH-BKK-PT-00090', ['5%', '15%', '80%']],
]);

type AuthRs = {
  accessToken: string;
};

type LoadFileRs = {
  imageUrl: string;
};

export type ShortDto = {
  url: string;
};

export const detailApi = {
  getDetail: async (id: string | undefined): Promise<AxiosResponse<EstateDetail>> => {
    try {
      return await api.get<EstateDetail>(`v1/estate/${id}`);
    } catch (error) {
      throw error;
    }
  },
  login: async (username: string, password: string): Promise<string | undefined | null> => {
    try {
      const basicAuth = 'Basic ' + btoa(username + ':' + password);
      const rs = await api.post<AuthRs>(
        'auth/sign-in',
        {},
        {
          headers: { Authorization: basicAuth },
        }
      );

      if (rs.data.accessToken) {
        localStorage.setItem('basicToken', basicAuth);
      }
      return rs.data.accessToken;
    } catch (error) {
      throw error;
    }
  },
  signUp: async (email: string): Promise<string | null | undefined> => {
    try {
      const rs = await api.post<void>('auth/sign-up', {
        login: email,
      });

      if (rs.status === 200) {
        localStorage.setItem('email', email);
      }
      return email;
    } catch (error) {
      throw error;
    }
  },
  signUpCheck: async (email: string, code: string): Promise<string | null | undefined> => {
    try {
      const rs = await api.post<void>('auth/sign-up/confirm-code/check', {
        login: email,
        confirmCode: code,
      });

      if (rs.status === 200) {
        localStorage.setItem('email', email);
      }
      return email;
    } catch (error) {
      return null;
    }
  },
  register: async (
    username: string,
    email: string,
    password: string,
    phone: string,
    location: string,
    whatsUp: string,
    tgName: string,
    profileImage: string
  ): Promise<string | null | undefined> => {
    try {
      const rs = await api.post<void>('auth/sign-up/end', {
        fio: username,
        login: email,
        password: password,
        mobileNumber: phone,
        location,
        whatsUp,
        tgName,
        profileImage,
      });

      if (rs.status === 200) {
        const basicAuth = 'Basic ' + btoa(email + ':' + password);

        localStorage.setItem('basicToken', basicAuth);
        localStorage.setItem('email', email);
      }
      return email;
    } catch (error) {
      return null;
    }
  },
  uploadProfileImage: async (file: File): Promise<string | undefined | null> => {
    try {
      const formData = new FormData();

      formData.append('file', file);
      const rs = await api.post<LoadFileRs>('auth/load/image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      return rs.data.imageUrl;
    } catch (error) {
      return null;
    }
  },
  profileUpdate: async ({
    username,
    email,
    password,
    location,
    whatsUp,
    tgName,
    profileImage,
    phone,
  }: {
    email: string;
    location: string;
    password: string;
    phone: string;
    profileImage: string;
    tgName: string;
    username: string;
    whatsUp: string;
  }): Promise<string | null | undefined> => {
    try {
      const token = localStorage.getItem('basicToken');
      const rs = await api.put<void>(
        'users/me',
        {
          fio: username,
          login: email,
          password: password !== '' ? password : null,
          mobileNumber: phone,
          location,
          whatsUp,
          tgName,
          profileImage,
        },
        { headers: { Authorization: token } }
      );

      if (rs.status === 200) {
        const basicAuth = 'Basic ' + btoa(email + ':' + password);

        localStorage.setItem('basicToken', basicAuth);
        localStorage.setItem('email', email);
      }
      return email;
    } catch (error) {
      throw error;
    }
  },
  shortUrl: async (url: string): Promise<AxiosResponse<ShortDto>> => {
    try {
      return await api.post<ShortDto>(`v1/estate-collections/short`, {
        url: url,
      });
    } catch (error) {
      throw error;
    }
  },
};
