import { FC, MouseEvent, useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import styles from './ShortFilter.module.scss';
import { Button, Text } from '@/shared/ui';
import { IconChevronDown } from '@/shared/assets/icons';
import MaterialMenu from '@mui/material/Menu';
import MaterialMenuItem from '@mui/material/MenuItem';

export const ShortFilter: FC = () => {
  const { formatMessage } = useIntl();
  const [activeFilter, setActiveFilter] = useState(
    formatMessage({ id: 'units.filter.short.price' })
  );
  const FILTERS = useMemo(
    () => [
      { text: formatMessage({ id: 'units.filter.short.price' }), id: 'price' },
      { text: formatMessage({ id: 'units.filter.short.area' }), id: 'area' },
      { text: formatMessage({ id: 'units.filter.short.income' }), id: 'income' },
      { text: formatMessage({ id: 'units.filter.short.payback' }), id: 'payback' },
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

  const handleSetFilter = (filterName: string) => {
    setActiveFilter(filterName);
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
        {activeFilter}
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
            onClick={() => handleSetFilter(filter.text)}
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
