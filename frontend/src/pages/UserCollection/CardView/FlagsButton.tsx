import { FC, useState, MouseEvent } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './CardView.module.scss';
import {IconDots} from '@/shared/assets/icons';
import { Button, Text } from '@/shared/ui';
import { useIntl } from 'react-intl';
import {estateCollectionApi} from "@/widgets/EstateCollection/api/estateCollectionApi";

type FlagButtonProps = {
  id: string;
  finance: boolean;
  presentation: boolean;
};

export const FlagsButton: FC<FlagButtonProps> = ({
  id,
  finance,
  presentation
}) => {
  const { formatMessage } = useIntl();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleToggleShowChangeNameModal = () => {
      estateCollectionApi.flags(id, !finance, undefined).then(() => handleClose()).catch((e) => {
          handleClose();
          console.log(e)
      }).finally(() => window.location.reload())
  };
  const handleToggleShowDeleteEstateModal = () => {
      estateCollectionApi.flags(id, undefined, !presentation).then(() => handleClose()).catch((e) => {
          handleClose();
          console.log(e)
      }).finally(() => window.location.reload())
  };
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <MenuItem
          classes={{ root: styles.listItem }}
          onClick={handleToggleShowChangeNameModal}
        >
          <Text variant="body1" bold>
            {finance ? formatMessage({ id: 'finance_close' }) : formatMessage({ id: 'finance' })}
          </Text>
        </MenuItem>
        <MenuItem
          classes={{ root: styles.listItem }}
          onClick={handleToggleShowDeleteEstateModal}
        >
          <Text variant="body1" bold>
            {presentation ? formatMessage({ id: 'presentation_close' }) : formatMessage({ id: 'presentation' })}
          </Text>
        </MenuItem>
      </Menu>
    </>
  );
};
