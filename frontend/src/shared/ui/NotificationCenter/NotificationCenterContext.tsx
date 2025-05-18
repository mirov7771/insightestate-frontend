import { createContext, ReactNode, useContext } from 'react';

export type Notification = {
  message: string | ReactNode;
  duration?: number; // в ms
  severity?: 'success' | 'error' | 'info' | 'warning';
};

type NotificationsContextType = {
  notify: (notification: Notification) => void;
};

export const NotificationCenterContext = createContext<NotificationsContextType | undefined>(
  undefined
);

export const useNotifications = () => {
  const ctx = useContext(NotificationCenterContext);

  if (!ctx) throw new Error('useNotifications must be used within NotificationsProvider');
  return ctx;
};
