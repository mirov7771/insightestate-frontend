import { useState } from 'react';
import { BottomSheet, Button, Text } from '@/shared/ui';
import styles from './ContactManager.module.scss';
import Avatar from './assets/avatar.png';
import {
  OfferCollectionBrandTelegram,
  OfferCollectionMail,
  OfferCollectionPhoneCall,
  OfferCollectionWhatsUp,
} from '@/shared/assets/icons';

export const ContactManager = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <img src={Avatar} alt="avatar" className={styles.avatar} />
          <div>
            <Text variant="heading4">Юлия</Text>
            <Text variant="caption1" className={styles.manager}>
              Ваш менеджер
            </Text>
          </div>
        </div>
        <Button size="l" onClick={() => setOpen(true)} className={styles.button}>
          <Text variant="heading4">Связаться</Text>
        </Button>
      </div>

      <BottomSheet isOpen={open} onClose={() => setOpen(false)}>
        <div>
          <div className={styles.content}>
            <img src={Avatar} alt="avatar" className={styles.avatar} />
            <div>
              <Text variant="heading4">Юлия</Text>
              <Text variant="caption1" className={styles.manager}>
                Ваш менеджер
              </Text>
            </div>
          </div>
          <hr className={styles.hr} />
          <ul className={styles.bottomSheetList}>
            <li>
              <OfferCollectionPhoneCall />
              <Text variant="body1">Позвонить по телефону</Text>
            </li>
            <li>
              <OfferCollectionMail />
              <Text variant="body1">Написать на почту</Text>
            </li>
            <li>
              <OfferCollectionWhatsUp />
              <Text variant="body1">Написать в WhatsApp</Text>
            </li>
            <li>
              <OfferCollectionBrandTelegram />
              <Text variant="body1">Написать в Telegram</Text>
            </li>
          </ul>
        </div>
      </BottomSheet>
    </>
  );
};
