import { FC } from 'react';
import styles from './CardSlide.module.scss';
import { Text } from '@/shared/ui';
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
};

export const AdvantagesBadges: FC<AdvantagesBadgesProps> = ({ toolTip1, toolTip2, toolTip3 }) => {
  const { formatMessage } = useIntl();

  if (!toolTip1 && !toolTip2 && !toolTip3) {
    return null;
  }

  return (
    <ul className={styles.advantages}>
      {toolTip1 && (
        <Tooltip
          {...tooltipProps}
          title={
            <Text variant="caption2" className={styles.tooltip__text}>
              {formatMessage({ id: 'toolTip1_desc' })}
            </Text>
          }
        >
          <li className={`${styles.advantages__item} ${styles.advantages__item_green}`}>
            <Text variant="heading5">{formatMessage({ id: 'toolTip1_badge' })}</Text>
          </li>
        </Tooltip>
      )}
      {toolTip2 && (
        <Tooltip
          {...tooltipProps}
          title={
            <Text variant="caption2" className={styles.tooltip__text}>
              {formatMessage({ id: 'toolTip2_desc' })}
            </Text>
          }
        >
          <li className={`${styles.advantages__item} ${styles.advantages__item_yellow}`}>
            <Text variant="heading5">{formatMessage({ id: 'toolTip2_badge' })}</Text>
          </li>
        </Tooltip>
      )}
      {toolTip3 && (
        <Tooltip
          {...tooltipProps}
          title={
            <Text variant="caption2" className={styles.tooltip__text}>
              {formatMessage({ id: 'toolTip3_desc' })}
            </Text>
          }
        >
          <li className={`${styles.advantages__item} ${styles.advantages__item_blue}`}>
            <Text variant="heading5">{formatMessage({ id: 'toolTip3_badge' })}</Text>
          </li>
        </Tooltip>
      )}
    </ul>
  );
};
