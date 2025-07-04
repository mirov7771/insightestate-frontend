import { FC } from 'react';
import styles from './Story.module.scss';
import { Button, Text } from '@/shared/ui';
import { StoryProps } from './types';
import { FormattedMessage, useIntl } from 'react-intl';

export const Story: FC<StoryProps> = ({
  backgroundColor,
  img,
  title,
  description,
  button,
  variant = 'default',
  color = '#ffffff',
}) => {
  const { locale } = useIntl();

  // Определяем нужную картинку
  const imgUrl =
    typeof img === 'string'
      ? img
      : img[locale as keyof typeof img] || img['en'] || Object.values(img)[0];

  switch (variant) {
    case 'revert': {
      return (
        <div
          className={`${styles.story} ${styles.story_revert}`}
          style={{ backgroundColor, color }}
        >
          <div className={styles.story__content}>
            <Text variant="heading5_upper">
              <FormattedMessage id={title} />
            </Text>
            <Text variant="body1">
              <FormattedMessage id={description} />
            </Text>
          </div>
          <div className={styles.story__img}>
            <img src={imgUrl} alt="" />
          </div>
          {!!button && (
            <Button
              className={styles.story__button}
              size="l"
              variant="base"
              wide
              onClick={button.onClick}
            >
              <Text align="center" variant="body1" bold>
                <FormattedMessage id={button.text} />
              </Text>
            </Button>
          )}
        </div>
      );
    }
    default: {
      return (
        <div
          className={styles.story}
          style={{ backgroundColor, backgroundImage: `url(${imgUrl})`, color }}
        >
          <div className={styles.story__content}>
            <Text variant="heading5_upper">
              <FormattedMessage id={title} />
            </Text>
            <Text variant="body1">
              <FormattedMessage id={description} />
            </Text>
            {!!button && (
              <Button
                className={styles.story__button}
                size="l"
                variant="base"
                wide
                onClick={button.onClick}
              >
                <Text align="center" variant="body1" bold>
                  <FormattedMessage id={button.text} />
                </Text>
              </Button>
            )}
          </div>
        </div>
      );
    }
  }
};
