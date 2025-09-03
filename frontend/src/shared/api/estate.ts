import { api } from '@/shared/api/axiosConfig';

export const estateApi = {
  searchByName: async (name: string) => {
    try {
      return await api.get(`v1/estate/`, { params: name });
    } catch (e) {
      throw e;
    }
  },
};
