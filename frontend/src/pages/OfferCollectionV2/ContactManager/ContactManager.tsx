import { FC, useEffect, useRef, useState } from 'react';
import { BottomSheet, Button, Text, useNotifications } from '@/shared/ui';
import styles from './ContactManager.module.scss';
import { IconBrandTelegram, IconMail, IconPhoneCall, IconWhatsUp } from '@/shared/assets/icons';
import { AgentInfo, estateCollectionApi } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { useIntl } from 'react-intl';
import { Spacer } from '@/widgets/Spacer/Spacer';
import { copyToClipboard } from '@/shared/utils';

export const ContactManager: FC<{ id: string; client?: string | null }> = ({ id, client }) => {
  const { formatMessage } = useIntl();
  const { notify } = useNotifications();
  const refManager = useRef<HTMLDivElement>(null);
  const refQuestion = useRef<HTMLDivElement>(null);
  const [agentInfo, setAgentInfo] = useState<AgentInfo>();
  const [open, setOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const clickable =
    localStorage.getItem('basicToken') !== null &&
    localStorage.getItem('basicToken') !== undefined &&
    localStorage.getItem('basicToken') !== '';

  useEffect(() => {
    estateCollectionApi
      .getEstateCollectionById(id)
      .then((r) => {
        setAgentInfo(r.data.agentInfo);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleCopyLink = async () => {
    try {
      const result = await copyToClipboard(`${window.location.href}?client=true&like=true`);

      if (result) {
        console.log('RUN!');
        notify({ message: formatMessage({ id: 'userCollection.copiedLink' }), duration: 3000 });
      }
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <>
      {clickable && !client ? (
        <div
          className={`${styles.wrapper} ${styles.wrapper__question} ${open || openInfo ? styles.wrapper__open : ''}`}
          ref={refQuestion}
        >
          <Button size="l" onClick={handleCopyLink} className={styles.button2}>
            <Text variant="body1" bold>
              {formatMessage({ id: 'copy_link' })}
            </Text>
          </Button>
          <Button size="l" onClick={() => setOpenInfo(true)} className={styles.button3}>
            <Text variant="body1" bold>
              ?
            </Text>
          </Button>
        </div>
      ) : (
        <div
          className={`${styles.wrapper} ${open || openInfo ? styles.wrapper__open : ''}`}
          ref={refManager}
        >
          <div className={styles.content}>
            <img
              src={
                agentInfo?.profileImage || 'https://insightestate.pro/estate-images/profile_img.png'
              }
              alt="avatar"
              className={styles.avatar}
            />
            <div>
              <Text variant="heading5">{agentInfo?.fio}</Text>
              <Text variant="caption1" className={styles.manager}>
                {formatMessage({ id: 'your_manager' })}
              </Text>
            </div>
          </div>
          <Button
            size="l"
            onClick={() => setOpen((prevState) => !prevState)}
            variant={open || openInfo ? 'cta' : 'primary'}
            className={styles.button}
          >
            <Text variant="body1" bold>
              {formatMessage({ id: open || openInfo ? 'close' : 'connect' })}
            </Text>
          </Button>
        </div>
      )}

      <BottomSheet isOpen={open} triggerRef={refManager} onClose={() => setOpen(false)}>
        <div className={`${styles.content} ${styles.content__hidden}`}>
          <img src={agentInfo?.profileImage} alt="avatar" className={styles.avatar} />
          <div>
            <Text variant="heading4">{agentInfo?.fio}</Text>
            <Text variant="caption1" className={styles.manager}>
              {formatMessage({ id: 'your_manager' })}
            </Text>
          </div>
        </div>
        <hr className={`${styles.hr} ${styles.hidden__desktop}`} />
        <ul className={styles.bottomSheetList}>
          {!agentInfo?.mobileNumber && (
            <li className={styles.bottomSheetList__item}>
              <IconPhoneCall />
              <a href={`tel:${agentInfo?.mobileNumber}`} target="_blank" rel="noreferrer">
                <Text variant="body1">{formatMessage({ id: 'phone_call' })}</Text>
              </a>
            </li>
          )}
          <li className={styles.bottomSheetList__item}>
            <IconMail />
            <a href={`mailto:${agentInfo?.login}`} target="_blank" rel="noreferrer">
              <Text variant="body1">{formatMessage({ id: 'email' })}</Text>
            </a>
          </li>
          {!!agentInfo?.whatsUp && (
            <li className={styles.bottomSheetList__item}>
              <IconWhatsUp />
              <a
                href={`https://wa.me/${agentInfo.whatsUp?.replaceAll('+', '').replaceAll('-', '').replaceAll(' ', '')}`}
                target="_blank"
                rel="noreferrer"
              >
                <Text variant="body1">{formatMessage({ id: 'go_wa' })}</Text>
              </a>
            </li>
          )}
          {!!agentInfo?.tgName && (
            <li className={styles.bottomSheetList__item}>
              <IconBrandTelegram />
              <a href={`https://t.me/${agentInfo?.tgName}`} target="_blank" rel="noreferrer">
                <Text variant="body1">{formatMessage({ id: 'go_tg' })}</Text>
              </a>
            </li>
          )}
        </ul>
        <hr className={`${styles.hr} ${styles.hidden__mobile}`} />
      </BottomSheet>

      <BottomSheet isOpen={openInfo} onClose={() => setOpenInfo(false)} triggerRef={refQuestion}>
        <div className={styles.content}>
          <Spacer height={25} width={100} />
          <Text variant="heading4">{formatMessage({ id: 'offer_info_title' })}</Text>
        </div>
        <Spacer height={25} width={100} />
        <ul className={styles.bottomSheetList}>
          <Text variant="body1">{formatMessage({ id: 'offer_info_text' })}</Text>
          <Spacer height={25} width={100} />
          <Text variant="body1">{formatMessage({ id: 'offer_info_text_1' })}</Text>
          <Spacer height={10} width={100} />
          <Text variant="body1">{formatMessage({ id: 'offer_info_text_2' })}</Text>
          <Spacer height={10} width={100} />
          <Text variant="body1">{formatMessage({ id: 'offer_info_text_3' })}</Text>
          <Spacer height={32} width={100} />
        </ul>
      </BottomSheet>
    </>
  );
};
