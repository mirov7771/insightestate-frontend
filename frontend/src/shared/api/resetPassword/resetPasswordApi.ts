import { api } from '@/shared/api';

export const resetPasswordApi = {
  reset: (login: string): Promise<void> => {
    try {
      return api.post('/auth/password/reset', { login });
    } catch (e) {
      throw e;
    }
  },
  resetConfirm: (data: {
    confirmCode: string;
    login: string;
    newPassword: string;
  }): Promise<any> => {
    try {
      return api.post('/auth/password/reset/confirm', data);
    } catch (e) {
      throw e;
    }
  },
};
