import { FC } from 'react';
import styles from './CardSlide.module.scss';
import { BadgeRating, Text } from '@/shared/ui';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import { useIntl } from 'react-intl';

const tooltipProps: Omit<TooltipProps, 'title' | 'children'> = {
  enterTouchDelay: 0,
  placement: 'top',
  classes: { tooltip: styles.tooltip },
  slotProps: {
    popper: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, -10],
          },
        },
      ],
    },
  },
};

type AdvantagesBadgesProps = {
  toolTip1?: string;
  toolTip2?: string;
  toolTip3?: string;
  variant?: 'tooltip' | 'text';
};

export const AdvantagesBadges: FC<AdvantagesBadgesProps> = ({
  toolTip1,
  toolTip2,
  toolTip3,
  variant = 'tooltip',
}) => {
  const { formatMessage } = useIntl();

  if (!toolTip1 && !toolTip2 && !toolTip3) {
    return null;
  }

  if (variant === 'tooltip') {
    return (
      <ul className={styles.advantages}>
        {toolTip1 && (
          <Tooltip
            {...tooltipProps}
            title={
              <Text variant="caption1" bold className={styles.tooltip__text}>
                {formatMessage({ id: 'toolTip2_desc' })}
              </Text>
            }
          >
            <span>
              <BadgeRating
                text={formatMessage({ id: 'toolTip2_badge' })}
                className={`${styles.advantages__item} ${styles.advantages__item_green}`}
              />
            </span>
          </Tooltip>
        )}
        {toolTip2 && (
          <Tooltip
            {...tooltipProps}
            title={
              <Text variant="caption1" bold className={styles.tooltip__text}>
                {formatMessage({ id: 'toolTip1_desc' })}
              </Text>
            }
          >
            <span>
              <BadgeRating
                text={formatMessage({ id: 'toolTip1_badge' })}
                className={`${styles.advantages__item} ${styles.advantages__item_yellow}`}
              />
            </span>
          </Tooltip>
        )}
        {toolTip3 && (
          <Tooltip
            {...tooltipProps}
            title={
              <Text variant="caption1" bold className={styles.tooltip__text}>
                {formatMessage({ id: 'toolTip3_desc' })}
              </Text>
            }
          >
            <span>
              <BadgeRating
                text={formatMessage({ id: 'toolTip3_badge' })}
                className={`${styles.advantages__item} ${styles.advantages__item_blue}`}
              />
            </span>
          </Tooltip>
        )}
      </ul>
    );
  }

  return (
    <ul className={`${styles.advantages} ${styles.advantages__text}`}>
      {toolTip1 && (
        <li className={styles.advantages__text_wrapper}>
          <Text
            variant="heading5"
            className={`${styles.advantages__item} ${styles.advantages__item_text} ${styles.advantages__item_green}`}
          >
            {formatMessage({ id: 'toolTip2_badge' })}
          </Text>{' '}
          <Text variant="body1" className={styles.tooltip__text}>
            {formatMessage({ id: 'toolTip2_desc' })}
          </Text>
        </li>
      )}
      {toolTip2 && (
        <li className={styles.advantages__text_wrapper}>
          <Text
            variant="heading5"
            className={`${styles.advantages__item} ${styles.advantages__item_text} ${styles.advantages__item_yellow}`}
          >
            {formatMessage({ id: 'toolTip1_badge' })}
          </Text>{' '}
          <Text variant="body1" className={styles.tooltip__text}>
            {formatMessage({ id: 'toolTip1_desc' })}
          </Text>
        </li>
      )}
      {toolTip3 && (
        <li className={styles.advantages__text_wrapper}>
          <Text
            variant="heading5"
            className={`${styles.advantages__item} ${styles.advantages__item_text} ${styles.advantages__item_blue}`}
          >
            {formatMessage({ id: 'toolTip3_badge' })}
          </Text>{' '}
          <Text variant="body1" className={styles.tooltip__text}>
            {formatMessage({ id: 'toolTip3_desc' })}
          </Text>
        </li>
      )}
    </ul>
  );
};
