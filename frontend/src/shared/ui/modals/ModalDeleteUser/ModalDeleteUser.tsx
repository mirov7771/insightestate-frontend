import React, { Dispatch, FC, SetStateAction } from 'react';
import { Button, Modal, Text } from '@/shared/ui';
import { FormattedMessage } from 'react-intl';
import styles from './ModalDeleteUser.module.scss';
import { useNavigate } from 'react-router';
import { usersApi } from '@/shared/api/users';

type ModalDeleteUserProps = {
  id: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
export const ModalDeleteUser: FC<ModalDeleteUserProps> = ({ setOpen, open, id }) => {
  const navigate = useNavigate();
  const handleCancel = () => {
    setOpen(false);
  };
  const deleteUser = async () => {
    try {
      await usersApi.deleteUser(id);
      localStorage.removeItem('basicToken');
      navigate('/');
      window.location.reload();
    } catch (e) {
      console.log({ e });
    } finally {
      localStorage.clear();
    }
  };

  return (
    <Modal
      dialogProps={{ open, maxWidth: 'sm', fullWidth: true, onClose: () => handleCancel() }}
      withCloseIcon
    >
      <Text variant="heading3">
        <FormattedMessage id="deleteProfile" />
      </Text>
      <Text className={styles.description} variant="body1">
        <FormattedMessage id="deleteProfileMessage" values={{ br: () => <br /> }} />
      </Text>
      <div className={styles.buttons}>
        <Button wide variant="base" onClick={handleCancel} size="l">
          <Text variant="body1" bold align="center">
            <FormattedMessage id="deleteProfileNo" />
          </Text>
        </Button>
        <Button wide onClick={deleteUser} size="l">
          <Text variant="body1" bold align="center">
            <FormattedMessage id="deleteProfileYes" />
          </Text>
        </Button>
      </div>
    </Modal>
  );
};
