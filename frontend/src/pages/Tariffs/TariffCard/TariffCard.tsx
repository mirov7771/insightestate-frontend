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
  const [desc, setDesc] = useState(DESCRIPTIONS_RU);
  const handleOpenInfoModal = () => {
    setInfoModal(true);
  };
  const handleCloseInfoModal = () => {
    setInfoModal(false);
  };

  const handleTariff = () => {
    if (id === userSubscriptionId) {
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
          <Text variant="heading3" as="span">
            {title}
          </Text>
          {title === 'Pro' && (
            <Text
              variant="heading4"
              as="span"
              className={isMobile ? styles.card__badge_mobile : styles.card__badge}
            >
              {formatMessage({ id: 'tariff_popular' })}
            </Text>
          )}
        </div>
        <ul className={styles.card__list}>
          {desc[title as keyof typeof desc].map(({ icon, text }) => (
            <li className={styles.item}>
              <span className={styles.icon}>{icon}</span>
              {text}
            </li>
          ))}
        </ul>
        {switcher}
        <Spacer height={10} width={100} />
        <div className={styles.card__button}>
          <div className={styles.card__border} />
          <Spacer height={25} width={100} />
          {price === 0 ? (
            <p className={styles.card__text_p}>{getSubscription()}</p>
          ) : (
            <div
              style={{
                display: 'inline-flex',
                gap: '10px',
              }}
            >
              <p className={styles.card__text_p_decline}>{getSubscription()}</p>
              <li className={styles.card__badge_discount}>
                <Text variant="heading4">-100%</Text>
              </li>
            </div>
          )}
          <Spacer height={10} width={100} />
          {/*<Button*/}
          {/*  onClick={handleTariff}*/}
          {/*  wide*/}
          {/*  variant={userSubscriptionId === id ? 'base' : 'primary'}*/}
          {/*  size="l"*/}
          {/*>*/}
          {/*  <Text variant="heading4">{getSubscription()}</Text>*/}
          {/*</Button>*/}
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
    </>
  );
};
