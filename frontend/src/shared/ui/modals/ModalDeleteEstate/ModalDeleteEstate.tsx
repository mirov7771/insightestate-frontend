import { Dispatch, FC, SetStateAction } from 'react';
import { Button, Modal, Text } from '@/shared/ui';
import styles from './ModalDeleteEstate.module.scss';
import { FormattedMessage } from 'react-intl';

type ModalDeleteEstateProps = {
  onDeleteEstate: () => void;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const ModalDeleteEstate: FC<ModalDeleteEstateProps> = ({
  setOpen,
  open,
  onDeleteEstate,
}) => {
  const handleCancel = () => {
    setOpen(false);
  };

  const handleDeleteEstate = () => {
    onDeleteEstate();
    handleCancel();
  };

  return (
    <Modal
      dialogProps={{ open, maxWidth: 'sm', fullWidth: true, onClose: () => handleCancel() }}
      withCloseIcon
    >
      <Text variant="heading4">
        <FormattedMessage id="userCollection.deleteCollection" />
      </Text>
      <Text className={styles.description} variant="body1">
        <FormattedMessage
          id="userCollection.deleteCollectionDescription"
          values={{ br: () => <br /> }}
        />
      </Text>
      <div className={styles.buttons}>
        <Button wide variant="base" onClick={handleCancel}>
          <Text variant="body1" bold align="center">
            <FormattedMessage id="userCollection.cancel" />
          </Text>
        </Button>
        <Button wide onClick={handleDeleteEstate}>
          <Text variant="body1" bold align="center">
            <FormattedMessage id="userCollection.yesDelete" />
          </Text>
        </Button>
      </div>
    </Modal>
  );
};
