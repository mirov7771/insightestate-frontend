import React, { FC } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './CardView.module.scss';
import {
  OfferCollectionCopy,
  OfferCollectionDots,
  OfferCollectionEdit,
  OfferCollectionTrash,
} from '@/shared/assets/icons';
import { Button, Text } from '@/shared/ui';

type ActionButtonProps = {
  deleteCollection: () => void;
};

export const ActionButton: FC<ActionButtonProps> = ({ deleteCollection }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteCollection = () => {
    deleteCollection();
    handleClose();
  };

  return (
    <>
      <Button className={styles.button} icon={<OfferCollectionDots />} onClick={handleClick} />
      <Menu
        classes={{ list: styles.list }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem classes={{ root: styles.listItem }} onClick={handleClose}>
          <OfferCollectionCopy />
          <Text variant="heading5">Скопировать ссылку</Text>
        </MenuItem>
        <MenuItem classes={{ root: styles.listItem }} onClick={handleClose}>
          <OfferCollectionEdit />
          <Text variant="heading5">Изменить название</Text>
        </MenuItem>
        <MenuItem classes={{ root: styles.listItem }} onClick={handleDeleteCollection}>
          <OfferCollectionTrash />
          <Text variant="heading5">Удалить подборку</Text>
        </MenuItem>
      </Menu>
    </>
  );
};
