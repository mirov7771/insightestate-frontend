import { FC } from 'react';
import styles from './CardView.module.scss';
import { AvatarGroup, Text } from '@/shared/ui';
import { Estate } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { ActionButton } from '@/pages/UserCollection/CardView/ActionButton';
import { FormattedMessage } from 'react-intl';

type CardViewProps = {
  copyLink: () => void;
  deleteCollection: () => void;
  estates: Estate[];
  goToCollection: () => void;
  id: string;
  images: string[];
  name: string;
  archiveCollection: () => void;
  archive: boolean
};

export const CardView: FC<CardViewProps> = ({
  images,
  name,
  estates,
  goToCollection,
  deleteCollection,
  copyLink,
  id,
  archiveCollection,
  archive
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.images}>
        <AvatarGroup images={images} avatarSize={48} overlap={24} maxDisplay={4} />
        <ActionButton
          deleteCollection={deleteCollection}
          estateName={name}
          estates={estates}
          copyLink={copyLink}
          id={id}
          archiveCollection={archiveCollection}
          archive={archive}
        />
      </div>
      <Text
        className={`${styles.name} ${!estates.length ? styles.name__disabled : ''}`}
        variant="body1"
        bold
        onClick={!!estates.length ? goToCollection : undefined}
      >
        {name}
      </Text>
      <Text className={styles.description} variant="body1" bold>
        <FormattedMessage id={'userCollection.objects'} values={{ count: estates.length }} />
      </Text>
    </div>
  );
};
