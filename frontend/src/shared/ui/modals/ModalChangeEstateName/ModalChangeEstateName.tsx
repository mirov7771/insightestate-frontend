import React, { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import { Button, Input, Modal, Text } from '@/shared/ui';
import styles from './ModalChangeEstateName.module.scss';
import { FormattedMessage, useIntl } from 'react-intl';
import {estateCollectionApi} from "@/widgets/EstateCollection/api/estateCollectionApi";

type ModalChangeEstateNameProps = {
  estateName: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  id: string;
};

export const ModalChangeEstateName: FC<ModalChangeEstateNameProps> = ({
  open,
  estateName,
  setOpen,
  id
}) => {
  const { formatMessage } = useIntl();
  const [name, setName] = useState(estateName);
  const handleChangeEstateName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleChange = () => {
    estateCollectionApi.updateCollection(id, name).then(() => console.log("success update"))
        .catch((e) => console.log("error update", e))
    setOpen(false);
    window.location.reload()
  }

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
        <Button wide variant="base" onClick={handleCancel}>
          <Text variant="heading4" align="center">
            <FormattedMessage id="userCollection.cancel" />
          </Text>
        </Button>
        <Button wide>
          <Text variant="heading4" align="center" onClick={handleChange}>
            <FormattedMessage id="userCollection.save" />
          </Text>
        </Button>
      </div>
    </Modal>
  );
};
