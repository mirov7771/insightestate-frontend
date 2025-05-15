import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import styles from './Tariffs.module.scss';
import { estateCollectionApi, TariffRs } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { Spacer } from '@/widgets/Spacer/Spacer';
import { Button, Switcher, Text } from '@/shared/ui';
import { FormControlLabel, FormGroup, Switch as SwitcherUI } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router';
import { PayModal } from './PayModal/PayModal';
import { TariffCard } from '@/pages/Tariffs/TariffCard/TariffCard';

export const Tariffs: FC = () => {
  const [tariffs, setTariffs] = useState<TariffRs>();
  const [extra, setExtra] = useState(true);
  const [extraPrice, setExtraPrice] = useState(0);
  const [extraId, setExtraId] = useState<string>();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const tariffId = searchParams.get('tariffId');
    const extraTariffId = searchParams.get('extraTariffId');

    if (tariffId) {
      if (extraTariffId) {
        estateCollectionApi
          .saveUserSubscription(extraTariffId)
          .then(() => {})
          .catch((e) => console.log(e));
      }
      estateCollectionApi
        .saveUserSubscription(tariffId)
        .then(() => {
          localStorage.setItem('subscriptionId', tariffId);
          navigate('/listing');
        })
        .catch((e) => console.log(e));
    } else {
      estateCollectionApi
        .getTariffs()
        .then((r) => setTariffs(r.data))
        .catch((e) => console.log(e));
    }
  }, []);

  const handleChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setExtra(e.target.checked);
  };

  useEffect(() => {
    estateCollectionApi
      .getTariffs()
      .then((r) => {
        setTariffs(r.data);
        if (r.data.extra) {
          setExtraPrice(r.data.extra[0].price ?? 0);
          setExtraId(r.data.extra[0].id);
        }
      })
      .catch((e) => console.log(e));
  }, [extra]);

  return (
    <>
      <div>
        <Text variant="heading2" as="h2" align="center">
          Выберите тариф
        </Text>
        <Text variant="body1" as="h2" align="center" className={styles.description}>
          Платные тарифы можно отменить в любое время
        </Text>
      </div>
      <div className={styles.wrapper}>
        {tariffs?.main
          .sort((a, b) => b.price - a.price)
          .map((tariff) => (
            <TariffCard
              title={tariff.title}
              description={tariff.description}
              price={extra && tariff.price > 0 ? tariff.price + extraPrice : tariff.price}
              id={tariff.id}
              extraId={extraId}
              userSubscriptionId={localStorage.getItem('subscriptionId')}
              switcher={
                tariff.title === 'Standart' ? (
                  <div className={styles.switcher}>
                    <div>
                      <Switcher checked={extra} onChange={handleChangeChecked} id="" value={''} />
                    </div>
                    <Text variant="heading4">Неограниченные запросы в AI‑подборщике за $29</Text>
                  </div>
                ) : (
                  <></>
                )
              }
            />
          ))}
      </div>
    </>
  );
};

const Tariff: FC<{
  description: string[];
  id: string;
  price: number;
  title: string;
  extraId?: string;
  userSubscriptionId?: string | null | undefined;
}> = ({ id, title, description, price, extraId, userSubscriptionId }) => {
  const navigate = useNavigate();
  const [infoModal, setInfoModal] = useState(false);
  const handleOpenInfoModal = () => {
    setInfoModal(true);
  };
  const handleCloseInfoModal = () => {
    setInfoModal(false);
  };
  const handleTariff = () => {
    if (price === 0) {
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
    }
    handleOpenInfoModal();
  };

  const getSubscription = (): string => {
    if (userSubscriptionId) {
      if (userSubscriptionId === id) {
        return price > 0 ? `Мой тариф` : 'Продолжить бесплатно';
      }
    }
    return price > 0 ? `${price}$ в месяц` : 'Бесплатно';
  };

  return (
    <div className={styles.infoCard}>
      <h5>
        <strong>{title}</strong>
      </h5>
      <Spacer height={20} width={100} />
      {description.map((desc) => (
        <>
          <p>{desc}</p>
          <Spacer height={10} width={100} />
        </>
      ))}
      <Spacer height={20} width={100} />
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          width: '87%',
        }}
      >
        <Button
          onClick={handleTariff}
          wide
          variant={userSubscriptionId === id ? 'cta' : 'primary'}
          style={{
            border: '1px solid #04b0be',
          }}
          size="l"
        >
          {getSubscription()}
        </Button>
        <Spacer height={20} width={100} />
      </div>
      <PayModal
        open={infoModal}
        onClose={handleCloseInfoModal}
        onOpen={handleOpenInfoModal}
        anchor="bottom"
        price={price * 100}
        bottom={10}
        id={id}
        extraId={extraId}
      />
    </div>
  );
};
