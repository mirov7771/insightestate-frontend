import React, { FC, ReactElement, useEffect, useState } from 'react';
import styles from './TariffCard.module.scss';
import { useNavigate } from 'react-router';
import { estateCollectionApi } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { PayModal } from '../PayModal/PayModal';
import { Button, Text } from '@/shared/ui';
import { DESCRIPTIONS_ENG, DESCRIPTIONS_RU } from './constants';
import { useIntl } from 'react-intl';

type TariffCardProps = {
  description: string[];
  id: string;
  price: number;
  title: string; // Pro | Standart | Starter
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
          : formatMessage({ id: 'tariff_free_continue' });
      }
    }
    return price > 0
      ? `${price}$ ${formatMessage({ id: 'tariff_month' })}`
      : formatMessage({ id: 'tariff_free' });
  };

  useEffect(() => {
    setDesc(localStorage.getItem('language') === 'ru' ? DESCRIPTIONS_RU : DESCRIPTIONS_ENG);
  }, []);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__title}>
          <Text variant="heading3" as="span">
            {title}
          </Text>
          {title === 'Pro' && (
            <Text variant="heading4" as="span" className={styles.card__badge}>
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
        <Button
          className={styles.card__button}
          onClick={handleTariff}
          wide
          variant={userSubscriptionId === id ? 'base' : 'primary'}
          size="l"
        >
          <Text variant="heading4">{getSubscription()}</Text>
        </Button>
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
