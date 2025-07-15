import { ChangeEvent, FC, useEffect, useState } from 'react';
import styles from './Tariffs.module.scss';
import { estateCollectionApi, TariffRs } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { Switcher, Text, Button } from '@/shared/ui';
import { useNavigate, useSearchParams } from 'react-router';
import { TariffCard } from '@/pages/Tariffs/TariffCard/TariffCard';
import { FormattedMessage, useIntl } from 'react-intl';
import { Spacer } from '@/widgets/Spacer/Spacer';
import { isMobile } from 'react-device-detect';
import { Logo } from '@/shared/assets/icons';

const Tariffs: FC = () => {
  const { formatMessage } = useIntl();
  const [tariffs, setTariffs] = useState<TariffRs>();
  const [extra, setExtra] = useState(false);
  const [extraPrice, setExtraPrice] = useState(0);
  const [extraId, setExtraId] = useState<string>();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [mySubsId, seMySubsId] = useState(
    localStorage.getItem('subscriptionId') || 'f1628768-72c2-40e4-9e6d-7c4ab7b1909b'
  );

  const handleSubsId = (id: string) => {
    if (id === 'f1628768-72c2-40e4-9e6d-7c4ab7b1909b') {
      localStorage.setItem('isFree', 'true');
    }
    seMySubsId(id);
  };

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

    seMySubsId(localStorage.getItem('subscriptionId') || 'f1628768-72c2-40e4-9e6d-7c4ab7b1909b');
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

  const handleTariff = () => {
    estateCollectionApi
      .saveUserSubscription('f1628768-72c2-40e4-9e6d-7c4ab7b1909b')
      .then(async () => {
        localStorage.setItem('subscriptionId', 'f1628768-72c2-40e4-9e6d-7c4ab7b1909b');
        navigate('/listing');
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className={`${styles.grid} ${styles.grid_center}`}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <Text variant="heading2" as="h2" align="center">
          {formatMessage({ id: 'tariff_title' })}
        </Text>
        <Text variant="body1" as="h2" align="center" className={styles.description}>
          {formatMessage({ id: 'tariff_description' })}
        </Text>
        <Spacer height={35} width={100} />
        <Text variant="body1" className={styles.badge} align="center">
          <FormattedMessage
            id="tariff_free_description"
            values={{ br: () => <br />, b: (children) => <strong>{children}</strong> }}
          />
        </Text>
      </div>
      <div className={`${styles.grid} ${styles.cards}`}>
        {tariffs?.main.map((tariff) => (
          <div className={styles.card}>
            <TariffCard
              title={tariff.title}
              description={tariff.description}
              price={
                extra && tariff.price > 0 && tariff.title !== 'Pro'
                  ? tariff.price + extraPrice
                  : tariff.price
              }
              id={tariff.id}
              onClick={handleSubsId}
              selected={tariff.id === mySubsId}
              extraId={
                extra && tariff.price > 0 && tariff.title === 'Standart' ? extraId : undefined
              }
              userSubscriptionId={localStorage.getItem('subscriptionId')}
              switcher={
                tariff.title === 'Standart' ? (
                  <div className={styles.switcher}>
                    <div>
                      <Switcher checked={extra} onChange={handleChangeChecked} id="" value={''} />
                    </div>
                    <Text variant="body1" bold>
                      {formatMessage({ id: 'tariff_ai' })}
                    </Text>
                  </div>
                ) : (
                  <></>
                )
              }
            />
          </div>
        ))}
      </div>
      <Button className={styles.button} onClick={handleTariff} size="l">
        {mySubsId === 'f1628768-72c2-40e4-9e6d-7c4ab7b1909b' ? (
          <Text variant="body1" bold>
            {formatMessage({ id: 'tariff_free_continue' })}
          </Text>
        ) : (
          <Text variant="body1" bold>
            {formatMessage({ id: 'tariff_continue_button' })}{' '}
            {mySubsId == 'b749d197-846e-49d4-aedc-abf7b3784b11' ? 'Pro' : 'Standart'}
          </Text>
        )}
      </Button>
    </div>
  );

  return (
    <>
      <div className={styles.wrapper}>
        {tariffs?.main.map((tariff) => (
          <TariffCard
            title={tariff.title}
            description={tariff.description}
            price={
              extra && tariff.price > 0 && tariff.title !== 'Pro'
                ? tariff.price + extraPrice
                : tariff.price
            }
            id={tariff.id}
            onClick={handleSubsId}
            selected={tariff.id === mySubsId}
            extraId={extra && tariff.price > 0 && tariff.title === 'Standart' ? extraId : undefined}
            userSubscriptionId={localStorage.getItem('subscriptionId')}
            switcher={
              tariff.title === 'Standart' ? (
                <div className={styles.switcher}>
                  <div>
                    <Switcher checked={extra} onChange={handleChangeChecked} id="" value={''} />
                  </div>
                  <Text variant="heading4">{formatMessage({ id: 'tariff_ai' })}</Text>
                </div>
              ) : (
                <></>
              )
            }
          />
        ))}
      </div>
      <div
        style={{
          width: isMobile ? '70%' : '50%',
          margin: 'auto',
        }}
      >
        <Spacer height={35} width={100} />
        <Button onClick={handleTariff} wide size="l">
          {mySubsId === 'f1628768-72c2-40e4-9e6d-7c4ab7b1909b' ? (
            <Text variant="body1" bold>
              {formatMessage({ id: 'tariff_free_continue' })}
            </Text>
          ) : (
            <Text variant="body1" bold>
              {formatMessage({ id: 'tariff_continue_button' })}{' '}
              {mySubsId == 'b749d197-846e-49d4-aedc-abf7b3784b11' ? 'Pro' : 'Standart'}
            </Text>
          )}
        </Button>
        <Spacer height={35} width={100} />
      </div>
    </>
  );
};

export default Tariffs;
