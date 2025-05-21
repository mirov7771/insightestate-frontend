import React, { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import { Button, Input, Modal, Text } from '@/shared/ui';
import styles from './ModalChangeEstateName.module.scss';
import { FormattedMessage, useIntl } from 'react-intl';
import { estateCollectionApi } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { FETCHING_STATUS } from '@/shared/constants/constants';

type ModalChangeEstateNameProps = {
  estateName: string;
  id: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const ModalChangeEstateName: FC<ModalChangeEstateNameProps> = ({
  open,
  estateName,
  setOpen,
  id,
}) => {
  const [status, setStatus] = useState<keyof typeof FETCHING_STATUS>('IDLE');
  const { formatMessage } = useIntl();
  const [name, setName] = useState(estateName);
  const handleChangeEstateName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleChange = () => {
    setStatus('LOADING');
    estateCollectionApi
      .updateCollection(id, name)
      .then(() => {
        console.log('success update');
        setStatus('SUCCESS');
        handleCancel();
        window.location.reload();
      })
      .catch((e) => {
        console.log('error update', e);
        setStatus('ERROR');
      });
  };

  return (
    <Modal
      dialogProps={{ open, maxWidth: 'sm', fullWidth: true, onClose: () => handleCancel() }}
      withCloseIcon
    >
      <Text variant="heading3">
        <FormattedMessage id="userCollection.rename" />
      </Text>
      <Input
        className={styles.input}
        placeholder={formatMessage({ id: 'collection_name' })}
        value={name}
        onChange={handleChangeEstateName}
      />
      <div className={styles.buttons}>
        <Button wide variant="base" onClick={handleCancel} disabled={status === 'LOADING'}>
          <Text variant="heading4" align="center">
            <FormattedMessage id="userCollection.cancel" />
          </Text>
        </Button>
        <Button wide loading={status === 'LOADING'}>
          <Text variant="heading4" align="center" onClick={handleChange}>
            <FormattedMessage id="userCollection.save" />
          </Text>
        </Button>
      </div>
    </Modal>
  );
};
