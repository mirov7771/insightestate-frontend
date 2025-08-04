import { FC, useState, MouseEvent, ReactElement, cloneElement } from 'react';
import { Button, Text } from '@/shared/ui';
import Menu from '@mui/material/Menu';
import styles from './FastFilter.module.scss';
import { GetEstateParams } from '@/widgets/Filter/api/filterApi';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useWindowResize } from '@/shared/utils/useWindowResize';

function withRenderNameFalse(element: ReactElement<{ renderName: boolean }>): ReactElement {
  return cloneElement(element, { renderName: false });
}

type FasFilterProps = {
  filter: ReactElement<{ renderName: boolean }>;
  filterName: Required<keyof Omit<GetEstateParams, 'pageNumber'>>;
  name: string | ReactElement;
};

export const FastFilter: FC<FasFilterProps> = ({ name, filter, filterName }) => {
  const { width } = useWindowResize();
  const filters = useFilters();
  const value = (() => {
    if (filterName === 'price') {
      return { minPrice: filters.minPrice, maxPrice: filters.maxPrice };
    }
    return filters[filterName];
  })();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button variant="base" size="s" onClick={handleClick}>
        <Text variant="body1" bold>
          {name}
        </Text>
      </Button>
      {width >= 768 ? (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          classes={{ paper: styles.paper }}
          slotProps={{
            list: {
              'aria-labelledby': 'basic-button',
              classes: { root: styles.root },
            },
          }}
        >
          {withRenderNameFalse(filter)}
        </Menu>
      ) : (
        <SwipeableDrawer
          classes={{ paper: styles.drawer }}
          onClose={handleClose}
          onOpen={handleClick}
          open={open}
          anchor="bottom"
        >
          {filter}
        </SwipeableDrawer>
      )}
    </>
  );
};
