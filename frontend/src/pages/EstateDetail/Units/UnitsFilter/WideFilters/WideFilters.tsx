import { FC, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import styles from './WideFilters.module.scss';
import { IconAdjustmentsFilter, IconX } from '@/shared/assets/icons';
import { Button, Text } from '@/shared/ui';
import { FilterRooms } from './FilterRooms';
import { FilterSlider } from './FilterSlider';

const FILTERS = [
  {
    filterName: 'Стоимость',
    minPlaceholder: 'от $275,000',
    maxPlaceholder: 'до $600,000',
    minValue: 275000,
    maxValue: 600000,
    minValueName: 'minPrice',
    maxValueName: 'maxPrice',
  },
  {
    filterName: 'Цена за м2',
    minPlaceholder: 'от $3,788 м2',
    maxPlaceholder: 'до $24,090 м2',
    minValue: 3788,
    maxValue: 24090,
    minValueName: 'minPriceSq',
    maxValueName: 'maxPriceSq',
  },
  {
    filterName: 'Площадь',
    minPlaceholder: 'от 0 м2',
    maxPlaceholder: 'до 312 м2',
    minValue: 0,
    maxValue: 312,
    minValueName: 'minSize',
    maxValueName: 'maxSize',
  },
];

export const WideFilters: FC = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <Button className={styles.button} onClick={handleClick} size="s" variant="base">
        <IconAdjustmentsFilter />
        <Text variant="body1" bold>
          <FormattedMessage id="units.filters" />
        </Text>
      </Button>
      <SwipeableDrawer
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <div className={styles.container}>
          <div className={styles.header}>
            <Text variant="heading4">Фильтры</Text>
            <span onClick={() => setOpen(false)}>
              <IconX />
            </span>
          </div>
          <div className={styles.filters}>
            <FilterRooms />
            {FILTERS.map((props) => (
              <FilterSlider key={props.filterName} {...props} />
            ))}
          </div>
          <div className={styles.bottom}>
            <Button wide>
              <Text variant="body1" bold>
                Показать
              </Text>
            </Button>
            <Button variant="base" wide>
              <Text variant="body1" bold>
                Сбросить все
              </Text>
            </Button>
          </div>
        </div>
      </SwipeableDrawer>
    </>
  );
};
