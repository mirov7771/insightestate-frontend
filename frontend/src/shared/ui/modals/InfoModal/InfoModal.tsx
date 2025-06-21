import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { Button, Modal, Text } from '@/shared/ui';
import { useIntl } from 'react-intl';
import styles from './InfoModal.module.scss';
type InfoModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  text: string | ReactNode;
  title: string;
  withReload?: boolean;
};

export const InfoModal: FC<InfoModalProps> = ({
  open,
  title,
  text,
  setOpen,
  withReload = false,
}) => {
  const { formatMessage } = useIntl();
  const handleCloseModal = () => {
    setOpen(false);
    if (withReload) {
      window.location.reload();
    }
  };

  return (
    <Modal
      dialogProps={{ open, maxWidth: 'md', fullWidth: true, onClose: () => handleCloseModal() }}
    >
      <div className={styles.content}>
        <Text variant="heading3" as="span">
          {title}
        </Text>
        <Text variant="body1" as="p">
          {text}
        </Text>
        <Button onClick={handleCloseModal} size="l" className={styles.button}>
          <Text variant="body1" bold>
            {formatMessage({ id: 'ok' })}
          </Text>
        </Button>
      </div>
    </Modal>
  );
};
