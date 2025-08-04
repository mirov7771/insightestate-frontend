import { FC } from 'react';
import { Section } from '../Section';
import styles from './Infrastructure.module.scss';
import beach from '@/shared/assets/icons/Beach.svg';
import shopping from '@/shared/assets/icons/ShoppingCart.svg';
import airport from '@/shared/assets/icons/Airport.svg';
import { useIntl } from 'react-intl';
import { IconBarbell, IconDeviceLaptop, IconHorseToy } from '@/shared/assets/icons';
import { Text } from '@/shared/ui';
import { AdvantagesBadges } from '@/entities/CardSlide/AdvantagesBadges';

export const Infrastructure: FC<{
  childRoom: boolean;
  coworking: boolean;
  gym: boolean;
  airportTime?: number;
  beachTime?: number;
  mallTime?: number;
  toolTip1?: 'true';
  toolTip2?: 'true';
  toolTip3?: 'true';
}> = ({
  beachTime,
  airportTime,
  mallTime,
  gym,
  childRoom,
  coworking,
  toolTip1,
  toolTip2,
  toolTip3,
}) => {
  const { formatMessage } = useIntl();

  return (
    <Section title={formatMessage({ id: 'infrastructure' })}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {childRoom && (
            <div className={styles.item}>
              <IconHorseToy />
              <Text variant="body1">{formatMessage({ id: 'kids' })}</Text>
            </div>
          )}
          {coworking && (
            <div className={styles.item}>
              <IconDeviceLaptop />
              <Text variant="body1">{formatMessage({ id: 'co_working' })}</Text>
            </div>
          )}
          {gym && (
            <div className={styles.item}>
              <IconBarbell />
              <Text variant="body1">{formatMessage({ id: 'gym' })}</Text>
            </div>
          )}
        </div>
        {/* ------ */}
        <div className={styles.advantages}>
          <AdvantagesBadges
            variant="text"
            toolTip1={toolTip1 === 'true' ? toolTip1 : undefined}
            toolTip2={toolTip2 === 'true' ? toolTip2 : undefined}
            toolTip3={toolTip3 === 'true' ? toolTip3 : undefined}
            size="s"
          />
        </div>
      </div>
      {(beachTime || mallTime || airportTime) && (
        <div className={styles.wrapper}>
          {beachTime && (
            <div className={styles.item}>
              <img src={beach} className={styles.item__icon} alt="icon" />
              <strong>{formatMessage({ id: 'beach' })}</strong>
              <span>
                {beachTime} {formatMessage({ id: 'min_on_car' })}
              </span>
            </div>
          )}
          {mallTime && (
            <div className={styles.item}>
              <img src={shopping} className={styles.item__icon} alt="icon" />
              <strong>{formatMessage({ id: 'mall' })}</strong>
              <span>
                {mallTime} {formatMessage({ id: 'min_on_car' })}
              </span>
            </div>
          )}
          {airportTime && (
            <div className={styles.item}>
              <img src={airport} className={styles.item__icon} alt="icon" />
              <strong>{formatMessage({ id: 'airport' })}</strong>
              <span>
                {airportTime} {formatMessage({ id: 'min_on_car' })}
              </span>
            </div>
          )}
        </div>
      )}
    </Section>
  );
};
