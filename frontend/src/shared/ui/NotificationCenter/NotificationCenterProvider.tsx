import { ReactNode, useCallback, useState } from 'react';
import { Snackbar } from '@mui/material';
import { NotificationCenterContext, Notification } from './NotificationCenterContext';
import { Text } from '@/shared/ui';
import styles from './NotificationCenter.module.scss';
import { IconCircleCheckFilled, IconMoodSadFilled } from '@/shared/assets/icons';

const MAPPED_ICONS = {
  success: <IconCircleCheckFilled />,
  warning: <IconCircleCheckFilled />,
  error: <IconMoodSadFilled />,
  info: <IconCircleCheckFilled />,
};

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
        <span className={styles.message__icon}>
          {MAPPED_ICONS[snackbarItem?.severity || 'success']}
        </span>
        <Text variant="body1" bold>
          {snackbarItem?.message}
        </Text>
      </div>
    ) : (
      <div className={styles.message}>
        <span className={styles.message__icon}>
          {MAPPED_ICONS[snackbarItem?.severity || 'success']}
        </span>
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
        security={snackbarItem?.severity}
      />
    </NotificationCenterContext.Provider>
  );
};
