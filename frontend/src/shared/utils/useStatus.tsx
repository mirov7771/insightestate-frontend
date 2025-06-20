import { FC, useState } from 'react';
import { FETCHING_STATUS } from '@/shared/constants/constants';

export const useStatus = () => {
  const [status, setStatus] = useState<keyof typeof FETCHING_STATUS>('IDLE');

  return { status, setStatus };
};
