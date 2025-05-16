import { FC } from 'react';
import styles from './CardView.module.scss';
import { AvatarGroup, Text } from '@/shared/ui';
import { Estate } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { ActionButton } from '@/pages/UserCollection/CardView/ActionButton';

type CardViewProps = {
  deleteCollection: () => void;
  estates: Estate[];
  goToCollection: () => void;
  images: string[];
  name: string;
};

export const CardView: FC<CardViewProps> = ({
  images,
  name,
  estates,
  goToCollection,
  deleteCollection,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.images}>
        <AvatarGroup images={images} avatarSize={48} overlap={24} maxDisplay={4} />
        <ActionButton deleteCollection={deleteCollection} />
      </div>
      <Text className={styles.name} variant="heading4" as="span" onClick={goToCollection}>
        {name}
      </Text>
      <Text className={styles.description} variant="heading4" as="span">
        {estates.length} объекта
      </Text>
    </div>
  );
};
