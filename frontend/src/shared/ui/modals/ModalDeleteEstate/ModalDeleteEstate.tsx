import { Dispatch, FC, SetStateAction } from 'react';
import { Button, Modal, Text } from '@/shared/ui';
import styles from './ModalDeleteEstate.module.scss';

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
      <Text variant="heading3">Изменение названия</Text>
      <Text className={styles.description} variant="body1">
        Вы уверены, что хотите удалить всю подборку? <br />
        Ссылка на сформированный оффер будет недействительна
      </Text>
      <div className={styles.buttons}>
        <Button wide variant="base" onClick={handleCancel}>
          <Text variant="heading4" align="center">
            Отмена
          </Text>
        </Button>
        <Button wide onClick={handleDeleteEstate}>
          <Text variant="heading4" align="center">
            Да, удалить
          </Text>
        </Button>
      </div>
    </Modal>
  );
};
