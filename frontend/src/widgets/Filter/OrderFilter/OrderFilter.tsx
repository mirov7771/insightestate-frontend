import { FC, MouseEvent, useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import styles from './OrderFilter.module.scss';
import { Button, Text } from '@/shared/ui';
import { IconChevronDown } from '@/shared/assets/icons';
import MaterialMenu from '@mui/material/Menu';
import MaterialMenuItem from '@mui/material/MenuItem';
import {ORDER_BY} from "@/widgets/Filter/api/filterApi";
import {useFilters} from "@/widgets/Filter/model/useFilters";

export const OrderFilter: FC = () => {
  const { setFilters, orderBy } = useFilters();
  const { formatMessage } = useIntl();
  const [activeFilter, setActiveFilter] = useState<{
    id: ORDER_BY;
    text: string;
  }>({
    text: formatMessage({ id: `order_by_${orderBy || 'UPDATED_AT'}` }),
    id: orderBy || 'UPDATED_AT',
  });
  const FILTERS = useMemo<Array<{ id: ORDER_BY; text: string }>>(
    () => [
      { text: formatMessage({ id: 'order_by_UPDATED_AT' }), id: 'UPDATED_AT' },
      { text: formatMessage({ id: 'order_by_PRICE_ASC' }), id: 'PRICE_ASC' },
      { text: formatMessage({ id: 'order_by_PRICE_DESC' }), id: 'PRICE_DESC' },
      { text: formatMessage({ id: 'order_by_SIZE_ASC' }), id: 'SIZE_ASC' },
      { text: formatMessage({ id: 'order_by_SIZE_DESC' }), id: 'SIZE_DESC' },
    ],
    [formatMessage]
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const handleToggleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl((prev) => (prev === null ? event.currentTarget : null));
  };

  const handleSetFilter = (filterName: typeof activeFilter) => {
    setActiveFilter(filterName);
    localStorage.setItem('ORDER_BY', filterName.id)
    setFilters({ orderBy: filterName.id });
    setAnchorEl(null);
  };

  return (
    <Button
      className={`${styles.button} ${menuOpen ? styles.active : ''}`}
      type="button"
      size="s"
      variant="base"
      onClick={handleToggleMenuOpen}
    >
      <Text variant="body1" bold>
        {activeFilter.text}
      </Text>
      <IconChevronDown />
      <MaterialMenu
        classes={{ paper: styles.menu__paper }}
        className={styles.menu}
        open={menuOpen}
        anchorEl={anchorEl}
        onClose={handleToggleMenuOpen}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: -8,
          horizontal: 'right',
        }}
      >
        {FILTERS.map((filter) => (
          <MaterialMenuItem
            classes={{ root: styles.menu__item_root }}
            onClick={() => handleSetFilter(filter)}
            key={filter.id}
          >
            <Text variant="body2" bold>
              {filter.text}
            </Text>
          </MaterialMenuItem>
        ))}
      </MaterialMenu>
    </Button>
  );
};
