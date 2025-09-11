import React, {ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useRef, useState} from 'react';
import styles from './ModalSettings.module.scss';
import {Button, Modal, Text} from '@/shared/ui';
import { useWindowResize } from '@/shared/utils/useWindowResize';
import {useIntl} from "react-intl";
import MuiAvatar from "@mui/material/Avatar";
import DefaultLogo from './assets/DefaultLogo.png';
import {detailApi} from "@/widgets/Detail/api/detailApi";
import {estateCollectionApi} from "@/widgets/EstateCollection/api/estateCollectionApi";
import {isMobile} from "react-device-detect";
import {Spacer} from "@/widgets/Spacer/Spacer";

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
  const token = localStorage.getItem('basicToken');
  const userId = localStorage.getItem('userId')
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
  const [imageUrl, setImageUrl] = useState<string | null>()
  const [id, setId] = useState('Primary')
  const [color, setColor] = useState<string>('#04B0BE')
  const onChangeLogo = async (e: ChangeEvent<HTMLInputElement>) => {
      try {
          const profileImage = e.target.files;
          const imageUrl = await detailApi.uploadProfileImage(profileImage!![0]);

          setImageUrl(imageUrl);
      } catch (e) {
          console.log({ e });
      }
  };

  const onSaveTheme = async () => {
      try {
          if (id === 'Primary') {
              await detailApi.updateTheme(userId!!, imageUrl, null, null)
          } else {
              await detailApi.updateTheme(userId!!, imageUrl, id, color)
          }
      } catch (e) {
          console.log(e)
      } finally {
          handleCloseModal()
      }
  }

  const onClearTheme = async () => {
      setId('Primary')
      setColor('#04B0BE')
      setImageUrl(null)
  }

  const selectColor = (id: string, color: string) => {
      setColor(color)
      setId(id)
  }

    useEffect(() => {
        if (open && token) {
            estateCollectionApi.getAgentInfo(token)
                .then((r) => {
                    if (r.data.collectionColorValue) {
                        setColor(r.data.collectionColorValue)
                    } else {
                        setColor('#04B0BE')
                    }
                    if (r.data.collectionColorId) {
                        setId(r.data.collectionColorId)
                    } else {
                        setId('Primary')
                    }
                    if (r.data.collectionLogo) {
                        setImageUrl(r.data.collectionLogo)
                    } else {
                        setImageUrl(null)
                    }
                }).catch(e => console.log(e))
        }
    }, [open]);

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
            <MobileSpace />
            <Text variant="heading3" align={'center'}>
                {formatMessage({ id: 'theme_settings_title' })}
            </Text>
            <Text variant="body1" align={'center'}>
                {formatMessage({ id: 'theme_settings_description' })}
            </Text>
            <MobileSpace />
            <Text variant="heading5" align={'center'}>
                {formatMessage({ id: 'theme_settings_logo' })}
            </Text>
            <div>
                <MuiAvatar className={
                    imageUrl ? styles.logo_loaded : styles.logo_loader
                } onClick={handleClickLogo} src={''}>
                    <Text variant="heading3" align="center" className={styles.letter}>
                        <img
                            src={imageUrl ? imageUrl : DefaultLogo}
                            alt=""
                            className={styles.img_loaded}
                        />
                    </Text>
                </MuiAvatar>
                <input
                    type="file"
                    accept="image/*"
                    style={{
                        display: 'none',
                    }}
                    ref={refLogo}
                    onChange={onChangeLogo}
                />
            </div>
            <Text variant="body2" align={'center'}>
                {formatMessage({ id: 'theme_settings_logo_description' })}
            </Text>
            <MobileSpace />
            <Text variant="heading5" align={'center'}>
                {formatMessage({ id: 'theme_settings_buttons' })}
            </Text>
            <div className={styles.colors_container}>
                {COLORS.map((item) =>
                    <div
                        className={id === item.id ? styles.selected : styles.not_selected}
                        onClick={() => selectColor(item.id, item.color)}
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
            <MobileSpace />
            <div className={styles.buttons}>
                <Button size={'m'} onClick={onSaveTheme}>
                    <Text variant="body1" bold>
                        {formatMessage({ id: 'save' })}
                    </Text>
                </Button>
                <Button variant={'white'} size={'m'} onClick={onClearTheme}>
                    <Text variant="body1" bold>
                        {formatMessage({ id: 'default_theme' })}
                    </Text>
                </Button>
            </div>
        </div>
      </Modal>
    </>
  );
};

export const MobileSpace: FC = () => {
    return (
        isMobile ? <Spacer height={20} width={100} /> : <></>
    )
}
