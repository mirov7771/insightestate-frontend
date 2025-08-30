import { FC, ReactElement, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import styles from './WideFilters.module.scss';
import { IconAdjustmentsFilter, IconX } from '@/shared/assets/icons';
import { Button, Text } from '@/shared/ui';
import { FilterRooms } from './FilterRooms';
import { FilterSlider } from './FilterSlider';
import { useUnitsFilters } from '../../UnitsContext';
import { UnitsFiltersParams } from '@/shared/api/units';

const FILTERS: {
  filterName: string | ReactElement;
  maxPlaceholder: string;
  maxValue: number;
  maxValueName: Exclude<keyof UnitsFiltersParams, 'orderBy' | 'rooms'>;
  minPlaceholder: string;
  minValue: number;
  minValueName: Exclude<keyof UnitsFiltersParams, 'orderBy' | 'rooms'>;
}[] = [
  {
    filterName: <FormattedMessage id="units.filter.wide.price" />,
    minPlaceholder: '$275,000',
    maxPlaceholder: '$600,000',
    minValue: 275000,
    maxValue: 600000,
    minValueName: 'minPrice',
    maxValueName: 'maxPrice',
  },
  {
    filterName: <FormattedMessage id="units.filter.wide.pricePerM2" />,
    minPlaceholder: '$3,788 м²',
    maxPlaceholder: '$24,090 м²',
    minValue: 3788,
    maxValue: 24090,
    minValueName: 'minPriceSq',
    maxValueName: 'maxPriceSq',
  },
  {
    filterName: <FormattedMessage id="units.filter.wide.area" />,
    minPlaceholder: '0 м²',
    maxPlaceholder: '312 м²',
    minValue: 0,
    maxValue: 312,
    minValueName: 'minSize',
    maxValueName: 'maxSize',
  },
];

export const WideFilters: FC = () => {
  const { units, setFiltersParams, status } = useUnitsFilters();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleResetAll = () => {
    setFiltersParams({ orderBy: 'price' });
  };
  const handleClose = () => {
    setOpen(false);
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
            <Text variant="heading4">
              <FormattedMessage id="units.filters" />
            </Text>
            <span onClick={() => setOpen(false)}>
              <IconX />
            </span>
          </div>
          <div className={styles.filters}>
            <FilterRooms />
            {FILTERS.map((props) => (
              <FilterSlider key={props.minValue} {...props} />
            ))}
          </div>
          <div className={styles.bottom}>
            <Button
              wide
              loading={status === 'LOADING'}
              disabled={!units.length}
              onClick={handleClose}
            >
              <Text variant="body1" bold>
                <FormattedMessage id="units.filter.wide.show" values={{ count: units.length }} />
              </Text>
            </Button>
            <Button variant="base" wide onClick={handleResetAll}>
              <Text variant="body1" bold>
                <FormattedMessage id="units.filter.wide.resetAll" />
              </Text>
            </Button>
          </div>
        </div>
      </SwipeableDrawer>
    </>
  );
};
