import React, { FC, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './CardView.module.scss';
import {
  OfferCollectionCopy,
  OfferCollectionDots,
  OfferCollectionEdit,
  OfferCollectionTrash,
} from '@/shared/assets/icons';
import { Button, ModalChangeEstateName, ModalDeleteEstate, Text } from '@/shared/ui';
import { Estate } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { useIntl } from 'react-intl';

type ActionButtonProps = {
  copyLink: () => void;
  deleteCollection: () => void;
  estateName: string;
  estates: Estate[];
};

export const ActionButton: FC<ActionButtonProps> = ({
  deleteCollection,
  estateName,
  estates,
  copyLink,
}) => {
  const { formatMessage } = useIntl();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openChangeNameModal, setOpenChangeNameModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleToggleShowChangeNameModal = () => {
    setOpenChangeNameModal(!openChangeNameModal);
  };
  const handleToggleShowDeleteEstateModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCopyLink = () => {
    handleClose();
    copyLink();
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
        {!!estates.length && (
          <MenuItem classes={{ root: styles.listItem }} onClick={handleCopyLink}>
            <OfferCollectionCopy />
            <Text variant="heading5">{formatMessage({ id: 'userCollection.copyLink' })}</Text>
          </MenuItem>
        )}
        <MenuItem
          classes={{ root: styles.listItem }}
          onClick={() => {
            handleClose();
            handleToggleShowChangeNameModal();
          }}
        >
          <OfferCollectionEdit />
          <Text variant="heading5">{formatMessage({ id: 'userCollection.changeName' })}</Text>
        </MenuItem>
        <MenuItem
          classes={{ root: styles.listItem }}
          onClick={() => {
            handleClose();
            handleToggleShowDeleteEstateModal();
          }}
        >
          <OfferCollectionTrash />
          <Text variant="heading5">{formatMessage({ id: 'userCollection.deleteCollection' })}</Text>
        </MenuItem>
      </Menu>
      <ModalChangeEstateName
        estateName={estateName}
        open={openChangeNameModal}
        setOpen={setOpenChangeNameModal}
      />
      <ModalDeleteEstate
        setOpen={setOpenDeleteModal}
        open={openDeleteModal}
        onDeleteEstate={deleteCollection}
      />
    </>
  );
};
