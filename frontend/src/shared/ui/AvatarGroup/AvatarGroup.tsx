import { FC } from 'react';
import styles from './AvatarGroup.module.scss';
import { Text } from '@/shared/ui';

interface AvatarGroupProps {
  images: string[];
  // Процент наложения аватаров (0-100)
  avatarSize?: number;
  maxDisplay?: number;
  // Максимальное количество отображаемых аватаров
  overlap?: number; // Размер аватаров в пикселях
}

export const AvatarGroup: FC<AvatarGroupProps> = ({
  images,
  maxDisplay = 4,
  overlap = 25,
  avatarSize = 40,
}) => {
  const displayedImages = images.slice(0, maxDisplay);
  const remainingCount = images.length - maxDisplay;

  // Стиль для каждого аватара с учетом наложения
  const avatarStyle = (index: number) => ({
    width: `${avatarSize}px`,
    height: `${avatarSize}px`,
    marginLeft: !index ? 0 : `-${overlap}px`,
  });

  return (
    <div className={styles.avatarGroup}>
      {displayedImages.map((image, index) => (
        <img key={index} src={image} className={styles.avatar} style={avatarStyle(index)} />
      ))}
      {remainingCount > 0 && (
        <div
          className={`${styles.avatar} ${styles.remaining}`}
          style={avatarStyle(images.length - 1)}
        >
          <Text variant="heading5" as="span" align="center">
            +{remainingCount}
          </Text>
        </div>
      )}
    </div>
  );
};
