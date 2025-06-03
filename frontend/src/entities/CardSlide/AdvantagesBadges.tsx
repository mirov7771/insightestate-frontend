import { FC } from 'react';
import styles from './CardSlide.module.scss';
import { Text } from '@/shared/ui';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

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

export const AdvantagesBadges: FC = () => {
  return (
    <ul className={styles.advantages}>
      <Tooltip
        {...tooltipProps}
        title={
          <Text variant="caption2" className={styles.tooltip__text}>
            Подходит для инвестиций
          </Text>
        }
      >
        <li className={`${styles.advantages__item} ${styles.advantages__item_green}`}>
          <Text variant="heading5">И</Text>
        </li>
      </Tooltip>
      <Tooltip
        {...tooltipProps}
        title={
          <Text variant="caption2" className={styles.tooltip__text}>
            Подходит для перепродажи
          </Text>
        }
      >
        <li className={`${styles.advantages__item} ${styles.advantages__item_yellow}`}>
          <Text variant="heading5">П</Text>
        </li>
      </Tooltip>
      <Tooltip
        {...tooltipProps}
        title={
          <Text variant="caption2" className={styles.tooltip__text}>
            Подходит для проживания
          </Text>
        }
      >
        <li className={`${styles.advantages__item} ${styles.advantages__item_blue}`}>
          <Text variant="heading5">Ж</Text>
        </li>
      </Tooltip>
    </ul>
  );
};
