import { FC, useState, MouseEvent } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './CardView.module.scss';
import {ArchiveSvg, IconCopy, IconDots, IconEdit, IconTrash} from '@/shared/assets/icons';
import { Button, ModalChangeEstateName, ModalDeleteEstate, Text } from '@/shared/ui';
import { Estate } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { useIntl } from 'react-intl';

type ActionButtonProps = {
  copyLink: () => void;
  deleteCollection: () => void;
  estateName: string;
  estates: Estate[];
  id: string;
  archiveCollection: () => void;
  archive: boolean
};

export const ActionButton: FC<ActionButtonProps> = ({
  deleteCollection,
  estateName,
  estates,
  copyLink,
  id,
  archiveCollection,
  archive
}) => {
  const { formatMessage } = useIntl();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openChangeNameModal, setOpenChangeNameModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openArchiveModal, setOpenArchiveModal] = useState(false);
  const handleToggleShowChangeNameModal = () => {
    setOpenChangeNameModal(!openChangeNameModal);
  };
  const handleToggleShowDeleteEstateModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCopyLink = () => {
    handleClose();
    copyLink();
  };
  const handleToggleArchiveModal = () => {
      setOpenArchiveModal(!openArchiveModal)
  }

  return (
    <>
      <Button className={styles.button} icon={<IconDots />} onClick={handleClick} />
      <Menu
        classes={{ list: styles.list }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {!!estates.length && (
          <MenuItem classes={{ root: styles.listItem }} onClick={handleCopyLink}>
            <IconCopy />
            <Text variant="body1" bold>
              {formatMessage({ id: 'userCollection.copyLink' })}
            </Text>
          </MenuItem>
        )}
        <MenuItem
          classes={{ root: styles.listItem }}
          onClick={() => {
            handleClose();
            handleToggleShowChangeNameModal();
          }}
        >
          <IconEdit />
          <Text variant="body1" bold>
            {formatMessage({ id: 'userCollection.changeName' })}
          </Text>
        </MenuItem>
        <MenuItem
          classes={{ root: styles.listItem }}
          onClick={() => {
            handleClose();
            handleToggleShowDeleteEstateModal();
          }}
        >
          <IconTrash />
          <Text variant="body1" bold>
            {formatMessage({ id: 'userCollection.deleteCollection' })}
          </Text>
        </MenuItem>
        <MenuItem
            classes={{ root: styles.listItem }}
            onClick={() => {
                handleClose();
                handleToggleArchiveModal();
            }}
        >
            <ArchiveSvg />
            <Text variant="body1" bold>
                {archive ?
                    formatMessage({ id: 'userCollection.archiveCollectionOut' }) :
                    formatMessage({ id: 'userCollection.archiveCollection' })}
            </Text>
        </MenuItem>
      </Menu>
      <ModalChangeEstateName
        estateName={estateName}
        open={openChangeNameModal}
        setOpen={setOpenChangeNameModal}
        id={id}
      />
      <ModalDeleteEstate
        setOpen={setOpenDeleteModal}
        open={openDeleteModal}
        onDeleteEstate={deleteCollection}
      />
      <ModalDeleteEstate
          setOpen={setOpenArchiveModal}
          open={openArchiveModal}
          onArchiveEstate={archiveCollection}
          archive={archive}
      />
    </>
  );
};
