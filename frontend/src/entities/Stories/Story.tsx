import { FC } from 'react';
import styles from './Story.module.scss';
import { Text } from '@/shared/ui';
import { StoryProps } from './types';

export const Story: FC<StoryProps> = ({ backgroundColor, img, title, description }) => {
  return (
    <div className={styles.story} style={{ backgroundColor, backgroundImage: `url(${img})` }}>
      {/*<div className={styles.story__img}>/!*<img src={img} alt="" />*!/</div>*/}
      <div className={styles.story__content}>
        <Text variant="heading5_upper">{title}</Text>
        <Text variant="body1">{description}</Text>
      </div>
    </div>
  );
};
