import {FC, useEffect, useRef, useState} from 'react';
import { BottomSheet, Button, Text, useNotifications } from '@/shared/ui';
import styles from './ContactManager.module.scss';
import {
  OfferCollectionBrandTelegram,
  OfferCollectionMail,
  OfferCollectionPhoneCall,
  OfferCollectionWhatsUp,
} from '@/shared/assets/icons';
import { AgentInfo, estateCollectionApi } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { useSearchParams } from 'react-router';
import { useIntl } from 'react-intl';
import { Spacer } from '@/widgets/Spacer/Spacer';
import { detailApi } from '@/widgets/Detail/api/detailApi';
import { useCopyToClipboard } from '@uidotdev/usehooks';
import { isMobile } from 'react-device-detect';

export const ContactManager: FC<{id: string}> = ({
  id
}) => {
  const { formatMessage } = useIntl();
  const { notify } = useNotifications();
  const refManager = useRef<HTMLDivElement>(null);
  const refQuestion = useRef<HTMLDivElement>(null);
  const [agentInfo, setAgentInfo] = useState<AgentInfo>();
  const [open, setOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [, copyToClipboard] = useCopyToClipboard();
  const clickable =
    localStorage.getItem('basicToken') !== null &&
    localStorage.getItem('basicToken') !== undefined &&
    localStorage.getItem('basicToken') !== '';

  useEffect(() => {
    estateCollectionApi.getEstateCollectionById(id).then((r) => {
      setAgentInfo(r.data.agentInfo);
    })
        .catch((e) => console.log(e));
  }, []);

  async function copyTask() {
    const el = document.createElement('input');

    el.value = window.location.href;

    const { data } = await detailApi.shortUrl(el.value);

    el.value = data.url;
    document.body.appendChild(el);
    if (isMobile) {
      el.setSelectionRange(0, el.value.length);
    } else {
      el.select();
    }
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  const handleCopyLink = async () => {
    // let url = window.location.href;
    // if (!url.startsWith("http")) url = `https://${url}`
    // const { data } = await detailApi.shortUrl(url)
    copyTask();
    // copyToClipboard(data.url);
    // await navigator.clipboard.writeText( data.url )
    notify({ message: formatMessage({ id: 'userCollection.copiedLink' }), duration: 3000 });
  };

  return (
    <>
      {clickable ? (
        <div
          className={`${styles.wrapper} ${styles.wrapper__question} ${open || openInfo ? styles.wrapper__open : ''}`}
          ref={refQuestion}
        >
          <Button size="l" onClick={handleCopyLink} className={styles.button2}>
            <Text variant="heading4">{formatMessage({ id: 'copy_link' })}</Text>
          </Button>
          <Button size="l" onClick={() => setOpenInfo(true)} className={styles.button3}>
            <Text variant="heading4">?</Text>
          </Button>
        </div>
      ) : (
        <div
          className={`${styles.wrapper} ${open || openInfo ? styles.wrapper__open : ''}`}
          ref={refManager}
        >
          <div className={styles.content}>
            <img src={agentInfo?.profileImage} alt="avatar" className={styles.avatar} />
            <div>
              <Text variant="heading4">{agentInfo?.fio}</Text>
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
            <Text variant="heading4">
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
              <OfferCollectionPhoneCall />
              <a href={`tel:${agentInfo?.mobileNumber}`} target="_blank" rel="noreferrer">
                <Text variant="body1">{formatMessage({ id: 'phone_call' })}</Text>
              </a>
            </li>
          )}
          <li className={styles.bottomSheetList__item}>
            <OfferCollectionMail />
            <a href={`mailto:${agentInfo?.login}`} target="_blank" rel="noreferrer">
              <Text variant="body1">{formatMessage({ id: 'email' })}</Text>
            </a>
          </li>
          {!!agentInfo?.whatsUp && (
            <li className={styles.bottomSheetList__item}>
              <OfferCollectionWhatsUp />
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
              <OfferCollectionBrandTelegram />
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
