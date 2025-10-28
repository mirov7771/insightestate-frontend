import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import { Button, Input, Modal, Text } from '@/shared/ui';
import styles from './ModalComment.module.scss';
import { FormattedMessage, useIntl } from 'react-intl';
import { estateCollectionApi } from '@/widgets/EstateCollection/api/estateCollectionApi';
import {BaseField} from "@/widgets/BaseField/BaseField";
type ModalCommentProps = {
  id: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const ModalComment: FC<ModalCommentProps> = ({
  open,
  setOpen,
  id,
}) => {
  const { formatMessage } = useIntl();
  const [comment, setComment] = useState<string>();
  const handleChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleChange = () => {
    debugger;
    if (comment) {
      estateCollectionApi
          .updateCollectionComment(id, comment)
          .then(() => {
            console.log('success update');
            handleCancel();
            window.location.reload();
          })
          .catch((e) => {
            console.log('error update', e);
          }).finally(() => handleCancel());
    } else {
      handleCancel();
    }
  };

  return (
    <Modal
      dialogProps={{ open, maxWidth: 'sm', fullWidth: true, onClose: () => handleCancel() }}
      withCloseIcon
    >
      <BaseField
          onChange={handleChangeComment}
          value={comment}
          name="comment"
          rows={7}
          multiline={true}
          placeholder={formatMessage({ id: 'userCollection.comment' })}
      />
      <div className={styles.buttons}>
        <Button wide variant="base" onClick={handleCancel}>
          <Text variant="body1" bold align="center">
            <FormattedMessage id="userCollection.cancel" />
          </Text>
        </Button>
        <Button wide>
          <Text variant="body1" bold align="center" onClick={handleChange}>
            <FormattedMessage id="userCollection.save" />
          </Text>
        </Button>
      </div>
    </Modal>
  );
};
