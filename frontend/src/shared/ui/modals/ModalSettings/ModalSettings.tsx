import React, {Dispatch, FC, SetStateAction, useRef, useState} from 'react';
import styles from './ModalSettings.module.scss';
import {Button, Modal, Text} from '@/shared/ui';
import { useWindowResize } from '@/shared/utils/useWindowResize';
import {useIntl} from "react-intl";
import MuiAvatar from "@mui/material/Avatar";
import DefaultLogo from './assets/DefaultLogo.png';

type ModalGalleryProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const COLORS = [
    {
        id: 'Primary',
        color: '#04B0BE'
    },
    {
        id: 'Orange',
        color: '#FB8D1F'
    },
    {
        id: 'Red',
        color: '#F74C4C'
    },
    {
        id: 'Purple',
        color: '#9A64CD'
    },
    {
        id: 'Blue',
        color: '#00668F'
    },
    {
        id: 'Green',
        color: '#2C8F5D'
    }
]

export const ModalSettings: FC<ModalGalleryProps> = ({
  open,
  setOpen
}) => {
  const refLogo = useRef<HTMLInputElement>(null);
  const handleClickLogo = () => {
      if (refLogo.current) {
          refLogo.current.click();
      }
  };
  const { formatMessage } = useIntl();
  const { width, height } = useWindowResize();
  const isFullScreen = width <= 768;
  const handleCloseModal = () => {
    setOpen(false);
  };
  const [id, setId] = useState('Primary')


  return (
    <>
      <Modal
        withCloseIcon={true}
        dialogProps={{
          open,
          maxWidth: 'md',
          fullWidth: true,
          fullScreen: isFullScreen,
          onClose: () => handleCloseModal(),
        }}
      >
        <div className={styles.container}>
            <Text variant="heading3">
                {formatMessage({ id: 'theme_settings_title' })}
            </Text>
            <Text variant="body1">
                {formatMessage({ id: 'theme_settings_description' })}
            </Text>

            <Text variant="heading5">
                {formatMessage({ id: 'theme_settings_logo' })}
            </Text>
            <div>
                <MuiAvatar className={styles.logo_loader} onClick={handleClickLogo} src={''}>
                    <Text variant="heading3" align="center" className={styles.letter}>
                        <img src={DefaultLogo} alt="" />
                    </Text>
                </MuiAvatar>
                <input
                    type="file"
                    accept="image/*"
                    style={{
                        display: 'none',
                    }}
                    ref={refLogo}
                    onChange={() => {}}
                />
            </div>
            <Text variant="body2">
                {formatMessage({ id: 'theme_settings_logo_description' })}
            </Text>

            <Text variant="heading5">
                {formatMessage({ id: 'theme_settings_buttons' })}
            </Text>
            <div className={styles.colors_container}>
                {COLORS.map((item) =>
                    <div
                        className={id === item.id ? styles.selected : styles.not_selected}
                        onClick={() => setId(item.id)}
                    >
                        <div
                            className={styles.button}
                            style={{
                                backgroundColor: item.color,
                            }}
                            onClick={() => setId(item.id)}
                        />
                    </div>
                )}
            </div>
            <Button size={'m'}>
                <Text variant="body1" bold>
                    {formatMessage({ id: 'save' })}
                </Text>
            </Button>
        </div>
      </Modal>
    </>
  );
};
