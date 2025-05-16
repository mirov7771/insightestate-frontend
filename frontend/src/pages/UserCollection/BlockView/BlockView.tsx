import { FC } from 'react';
import { Button, Text } from '@/shared/ui';
import styles from './BlockView.module.scss';
import { OfferCollectionEdit, OfferCollectionTrash } from '@/shared/assets/icons';
import { Estate } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { DEFAULT_IMG } from '@/entities/Card/Card';

type BlockViewProps = {
  deleteCollection: () => void;
  estates: Estate[];
  goToCollection: () => void;
  name: string;
};

export const BlockView: FC<BlockViewProps> = ({
  name,
  estates,
  goToCollection,
  deleteCollection,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Text className={styles.header} variant="heading3">
          {name}
        </Text>
        <div className={styles.actions}>
          <Button className={styles.actions__button} icon={<OfferCollectionEdit />} />
          <Button
            onClick={deleteCollection}
            className={styles.actions__button}
            icon={<OfferCollectionTrash />}
          />
        </div>
      </div>
      <Text className={styles.description} variant="heading4">
        {estates.length} объектов
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
      <div className={styles.buttons}>
        <Button onClick={goToCollection}>
          <Text variant="heading4">Посмотреть</Text>
        </Button>
        <Button variant="base">
          <Text variant="heading4">Скопировать ссылку</Text>
        </Button>
      </div>
    </div>
  );
};
