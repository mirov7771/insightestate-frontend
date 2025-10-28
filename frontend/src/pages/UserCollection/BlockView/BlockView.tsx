import { FC, useState } from 'react';
import {Button, ModalChangeEstateName, ModalDeleteEstate, Text, useNotifications} from '@/shared/ui';
import styles from './BlockView.module.scss';
import { IconEdit, IconTrash } from '@/shared/assets/icons';
import {Estate, estateCollectionApi} from '@/widgets/EstateCollection/api/estateCollectionApi';
import { DEFAULT_IMG } from '@/entities/Card/Card';
import {FormattedMessage, useIntl} from 'react-intl';
import { FETCHING_STATUS } from '@/shared/constants/constants';
import {ModalComment} from "@/shared/ui/modals/ModalComment";

type BlockViewProps = {
  copyLink: () => void;
  copyLinkStatus: keyof typeof FETCHING_STATUS;
  deleteCollection: () => void;
  estates: Estate[];
  goToCollection: () => void;
  goToCollectionClient: () => void;
  id: string;
  name: string;
};

export const BlockView: FC<BlockViewProps> = ({
  name,
  estates,
  goToCollection,
  goToCollectionClient,
  deleteCollection,
  copyLink,
  id,
  copyLinkStatus,
}) => {
  const { formatMessage } = useIntl();
  const [openChangeNameModal, setOpenChangeNameModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openCommentModal, setOpenCommentModal] = useState(false);
  const { notify } = useNotifications();
  const handleToggleShowChangeNameModal = () => {
    setOpenChangeNameModal(!openChangeNameModal);
  };
  const handleToggleShowDeleteEstateModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  const handleToggleCommentModal = () => {
    setOpenCommentModal(!openChangeNameModal);
  };

  const handleDuplicate = () => {
    estateCollectionApi.duplicate(id).then(() => {
      notify({ message: formatMessage({ id: 'userCollection.duplicateCreate' }), duration: 2000 });
      setTimeout(() => window.location.reload(), 2200)
    }).catch(e => console.log(e))
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Text className={styles.header} variant="heading3">
            {name}
          </Text>
          <div className={styles.actions}>
            <Button
              className={styles.actions__button}
              icon={<IconEdit />}
              onClick={handleToggleShowChangeNameModal}
            />
            <Button
              onClick={handleToggleShowDeleteEstateModal}
              className={styles.actions__button}
              icon={<IconTrash />}
            />
          </div>
        </div>
        <Text className={styles.description} variant="body1" bold>
          <FormattedMessage id={'userCollection.objects'} values={{ count: estates.length }} />
        </Text>
        <div className={styles.slide}>
          <div className={styles.estates}>
            {estates.map((estate) => {
              const img =
                estate.exteriorImages?.[0] ||
                estate.facilityImages?.[0] ||
                estate.interiorImages?.[0] ||
                DEFAULT_IMG;

              return (
                <div className={styles.estate}>
                  <img className={styles.estate__img} src={img} width={200} height={200} />
                  <Text className={styles.estate__text} variant="body1" bold>
                    {estate.name}
                  </Text>
                </div>
              );
            })}
          </div>
        </div>
        {!!estates.length && (
          <div className={styles.buttons}>
            <Button onClick={goToCollection}>
              <Text variant="body1" bold>
                <FormattedMessage id="userCollection.view" />
              </Text>
            </Button>
            <Button onClick={goToCollectionClient}>
              <Text variant="body1" bold>
                <FormattedMessage id="userCollection.clientView" />
              </Text>
            </Button>
            <Button onClick={handleDuplicate}>
              <Text variant="body1" bold>
                <FormattedMessage id="userCollection.duplicate" />
              </Text>
            </Button>
            <Button variant="base" onClick={copyLink} loading={copyLinkStatus === 'LOADING'}>
              <Text variant="body1" bold>
                <FormattedMessage id="userCollection.copyLink" />
              </Text>
            </Button>
            <Button onClick={handleToggleCommentModal}>
              <Text variant="body1" bold>
                <FormattedMessage id="userCollection.comment" />
              </Text>
            </Button>
          </div>
        )}
      </div>
      <ModalChangeEstateName
        estateName={name}
        open={openChangeNameModal}
        setOpen={setOpenChangeNameModal}
        id={id}
      />
      <ModalDeleteEstate
        setOpen={setOpenDeleteModal}
        open={openDeleteModal}
        onDeleteEstate={deleteCollection}
      />
      <ModalComment
          open={openCommentModal}
          setOpen={setOpenCommentModal}
          id={id}
      />
    </>
  );
};
