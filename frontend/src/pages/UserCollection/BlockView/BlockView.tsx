import { FC, useState } from 'react';
import { Button, ModalChangeEstateName, ModalDeleteEstate, Text } from '@/shared/ui';
import styles from './BlockView.module.scss';
import { OfferCollectionEdit, OfferCollectionTrash } from '@/shared/assets/icons';
import { Estate } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { DEFAULT_IMG } from '@/entities/Card/Card';
import { FormattedMessage } from 'react-intl';

type BlockViewProps = {
  copyLink: () => void;
  deleteCollection: () => void;
  estates: Estate[];
  goToCollection: () => void;
  name: string;
  id: string;
};

export const BlockView: FC<BlockViewProps> = ({
  name,
  estates,
  goToCollection,
  deleteCollection,
  copyLink,
  id
}) => {
  const [openChangeNameModal, setOpenChangeNameModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleToggleShowChangeNameModal = () => {
    setOpenChangeNameModal(!openChangeNameModal);
  };
  const handleToggleShowDeleteEstateModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

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
              icon={<OfferCollectionEdit />}
              onClick={handleToggleShowChangeNameModal}
            />
            <Button
              onClick={handleToggleShowDeleteEstateModal}
              className={styles.actions__button}
              icon={<OfferCollectionTrash />}
            />
          </div>
        </div>
        <Text className={styles.description} variant="heading4">
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
                  <Text className={styles.estate__text} variant="heading5">
                    {estate.name}
                  </Text>
                </div>
              );
            })}
          </div>
          <div className={styles.shadow} />
        </div>
        {!!estates.length && (
          <div className={styles.buttons}>
            <Button onClick={goToCollection}>
              <Text variant="heading4">
                <FormattedMessage id="userCollection.view" />
              </Text>
            </Button>
            <Button variant="base" onClick={copyLink}>
              <Text variant="heading4">
                <FormattedMessage id="userCollection.copyLink" />
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
    </>
  );
};
