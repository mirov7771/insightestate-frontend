import { api } from '@/shared/api';

export const usersApi = {
  deleteUser: async (token: string): Promise<void> => {
    try {
      return await api.delete('users', {
        headers: { Authorization: `Basic ${token.replace('Basic ', '')}` },
      });
    } catch (e) {
      throw e;
    }
  },
};
