import { ReactNode, useCallback, useState } from 'react';
import { Snackbar } from '@mui/material';
import { NotificationCenterContext, Notification } from './NotificationCenterContext';
import { Text } from '@/shared/ui';
import styles from './NotificationCenter.module.scss';
import { OfferCollectionCircleCheckFilled } from '@/shared/assets/icons';

export const NotificationsProvider = ({ children }: { children: ReactNode }) => {
  const [show, setShow] = useState(false);
  const [snackbarItem, setSnackbarItem] = useState<Notification>();

  const notify = useCallback((notification: Notification) => {
    setSnackbarItem({
      severity: notification.severity,
      duration: notification.duration || 2000,
      message: notification.message,
    });
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
  };
  const renderMessages = () => {
    return typeof snackbarItem?.message === 'string' ? (
      <div className={styles.message}>
        <OfferCollectionCircleCheckFilled />
        <Text variant="heading5">{snackbarItem?.message}</Text>
      </div>
    ) : (
      <div className={styles.message}>
        <OfferCollectionCircleCheckFilled />
        {snackbarItem?.message}
      </div>
    );
  };

  return (
    <NotificationCenterContext.Provider value={{ notify }}>
      {children}

      <Snackbar
        open={show}
        autoHideDuration={snackbarItem?.duration}
        onClose={() => handleClose()}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        message={renderMessages()}
        classes={{ root: styles.root }}
      />
    </NotificationCenterContext.Provider>
  );
};
