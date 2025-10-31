import { FC, ReactElement, useEffect, useState } from 'react';
import styles from './TariffCard.module.scss';
import { useNavigate } from 'react-router';
import { estateCollectionApi } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { PayModal } from '../PayModal/PayModal';
import { Button, Text } from '@/shared/ui';
import { DESCRIPTIONS_ENG, DESCRIPTIONS_RU } from './constants';
import { useIntl } from 'react-intl';
import { Spacer } from '@/widgets/Spacer/Spacer';
import { isMobile } from 'react-device-detect';
import {InfoModal} from "@/widgets/Modal/InfoModal";

type TariffCardProps = {
  description: string[];
  id: string;
  onClick: (id: string) => void;
  price: number;
  selected: boolean;
  title: string;
  // Pro | Standart | Starter
  extraId?: string;
  switcher?: ReactElement;
  userSubscriptionId?: string | null | undefined;
};

export const TariffCard: FC<TariffCardProps> = ({
  id,
  title,
  description,
  price,
  extraId,
  userSubscriptionId,
  switcher,
  selected,
  onClick,
}) => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const [infoModal, setInfoModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [desc, setDesc] = useState(DESCRIPTIONS_RU);
  const handleOpenInfoModal = () => {
    setInfoModal(true);
  };
  const handleCloseInfoModal = () => {
    setInfoModal(false);
  };

  const handleOpenContactModal = () => {
    setContactModal(true);
  };
  const handleCloseContactModal = () => {
    setContactModal(false);
  };

  const handleTariff = () => {
    if (id === '8acf9e68-c4d0-43b1-9c22-b7f712f101a4') {
      handleOpenContactModal()
    } else if (id === userSubscriptionId) {
      navigate('/listing');
    } else if (price === 0) {
      estateCollectionApi
        .saveUserSubscription(id)
        .then(async () => {
          if (extraId) {
            await estateCollectionApi.saveUserSubscription(extraId);
          }
          localStorage.setItem('subscriptionId', id);
          navigate('/listing');
        })
        .catch((e) => console.log(e));
    } else {
      handleOpenInfoModal();
    }
  };

  const getSubscription = (): string => {
    if (id === '8acf9e68-c4d0-43b1-9c22-b7f712f101a4')
      return formatMessage({ id: 'contact_us' })
    if (userSubscriptionId) {
      if (userSubscriptionId === id) {
        return price > 0
          ? formatMessage({ id: 'tariff_my' })
          : formatMessage({ id: 'tariff_free' });
      }
    }
    return price > 0
      ? `${price}$ ${formatMessage({ id: 'tariff_month' })}`
      : formatMessage({ id: 'tariff_free' });
  };

  useEffect(() => {
    setDesc(localStorage.getItem('language') === 'ru' ? DESCRIPTIONS_RU : DESCRIPTIONS_ENG);
  }, []);

  const handleSelect = () => {
    onClick(id);
  };

  return (
    <>
      <div
        className={styles.card}
        style={{
          border: selected
            ? '1px solid var(--ui-color-black)'
            : '1px solid var(--ui-color-black-24-opacity)',
          cursor: 'pointer',
        }}
        onClick={handleSelect}
      >
        <div className={styles.card__title}>
          <Text variant="heading4">{title}</Text>
          {title === 'Pro' && (
            <Text
              variant="body2"
              bold
              className={isMobile ? styles.card__badge_mobile : styles.card__badge}
            >
              {formatMessage({ id: 'tariff_popular' })}
            </Text>
          )}
        </div>
        <div style={{
          marginTop: '-10px'
        }}>
          <Text variant="body2" className={styles.card__descr}>{description[0].replace('- ', '')}</Text>
        </div>
        <ul className={styles.card__list}>
          {desc[title as keyof typeof desc].map(({ icon, text }) => (
            <li className={styles.item}>
              <span className={styles.icon}>{icon}</span>
              <Text variant="body1">{text}</Text>
            </li>
          ))}
        </ul>
        {switcher}
        <Spacer height={10} width={100} />
        <div className={styles.card__button}>
          <Spacer height={10} width={100} />
          <Button
            onClick={handleTariff}
            wide
            variant={userSubscriptionId === id ? 'base' : 'primary'}
            size="l"
          >
            <Text variant="heading4">{getSubscription()}</Text>
          </Button>
        </div>
      </div>
      <PayModal
        open={infoModal}
        onClose={handleCloseInfoModal}
        onOpen={handleOpenInfoModal}
        anchor="top"
        price={price * 100}
        bottom={0}
        id={id}
        extraId={title === 'Pro' ? undefined : extraId}
      />
      <InfoModal
        title={formatMessage({ id: 'contact_us' })}
        bottom={30}
        children={
        <ul>
          <li>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px'
            }}>
              <Text variant="body1">{formatMessage({ id: 'email' })}{' '}</Text>
              <a href={`mailto:sales@lotsof.properties`} target="_blank" rel="noreferrer">
                <Text variant="body1">sales@lotsof.properties</Text>
              </a>
            </div>
          </li>
          <Spacer height={10} width={100} />
          <li>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px'
            }}>
              <Text variant="body1">{formatMessage({ id: 'phone_call' })}</Text>
              <a href={`tel:+66 81-442-7717`} target="_blank" rel="noreferrer">
                <Text variant="body1">+66 81-442-7717</Text>
              </a>
            </div>
          </li>
        </ul>
      }
        onClose={handleCloseContactModal}
        onOpen={handleOpenContactModal}
        open={contactModal}
        anchor={'bottom'}
      />
    </>
  );
};
