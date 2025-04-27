import { useEffect, useState } from 'react';
import { BottomSheet, Button, Text } from '@/shared/ui';
import styles from './ContactManager.module.scss';
import Avatar from './assets/avatar.png';
import {
  OfferCollectionBrandTelegram,
  OfferCollectionMail,
  OfferCollectionPhoneCall,
  OfferCollectionWhatsUp,
} from '@/shared/assets/icons';
import { AgentInfo, estateCollectionApi } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { useSearchParams } from 'react-router';
import { localField } from '@/i18n/localField';

export const ContactManager = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [agentInfo, setAgentInfo] = useState<AgentInfo>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const token = searchParams.get('token');

    estateCollectionApi
      .getAgentInfo(token!!)
      .then((r) => {
        setAgentInfo(r.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <img src={agentInfo?.profileImage} alt="avatar" className={styles.avatar} />
          <div>
            <Text variant="heading4">{agentInfo?.fio}</Text>
            <Text variant="caption1" className={styles.manager}>
              {localField('your_manager')}
            </Text>
          </div>
        </div>
        <Button size="l" onClick={() => setOpen(true)} className={styles.button}>
          <Text variant="heading4">{localField('connect')}</Text>
        </Button>
      </div>

      <BottomSheet isOpen={open} onClose={() => setOpen(false)}>
        <div>
          <div className={styles.content}>
            <img src={agentInfo?.profileImage} alt="avatar" className={styles.avatar} />
            <div>
              <Text variant="heading4">{agentInfo?.fio}</Text>
              <Text variant="caption1" className={styles.manager}>
                {localField('your_manager')}
              </Text>
            </div>
          </div>
          <hr className={styles.hr} />
          <ul className={styles.bottomSheetList}>
            {!!agentInfo?.mobileNumber && (
              <li>
                <OfferCollectionPhoneCall />
                <a href={`tel:${agentInfo?.mobileNumber}`} target="_blank" rel="noreferrer">
                  <Text variant="body1">{localField('phone_call')}</Text>
                </a>
              </li>
            )}
            <li>
              <OfferCollectionMail />
              <a href={`mailto:${agentInfo?.login}`} target="_blank" rel="noreferrer">
                <Text variant="body1">{localField('email')}</Text>
              </a>
            </li>
            {!!agentInfo?.whatsUp && (
              <li>
                <OfferCollectionWhatsUp />
                <a
                  href={`https://wa.me/${agentInfo?.whatsUp.replaceAll('+', '').replaceAll('-', '').replaceAll(' ', '')}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text variant="body1">{localField('go_wa')}</Text>
                </a>
              </li>
            )}
            {!!agentInfo?.tgName && (
              <li>
                <OfferCollectionBrandTelegram />
                <a href={`https://t.me/${agentInfo?.tgName}`} target="_blank" rel="noreferrer">
                  <Text variant="body1">{localField('go_tg')}</Text>
                </a>
              </li>
            )}
          </ul>
        </div>
      </BottomSheet>
    </>
  );
};
