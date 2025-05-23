import { FC, ReactNode } from 'react';
import { EstateOptions } from '@/widgets/EstateCollection/api/estateCollectionApi';
import styles from './EstateOptionsInfo.module.scss';
import { Text } from '@/shared/ui';
import {
  OfferCollectionBarbell,
  OfferCollectionDeviceLaptop,
  OfferCollectionHorseToy,
} from '@/shared/assets/icons';
import { FormattedMessage } from 'react-intl';

type EstateOptionsInfoProps = EstateOptions;

const OPTIONS_MAPPER: Record<
  keyof Pick<EstateOptions, 'gym' | 'coworking' | 'childRoom'>,
  { icon: ReactNode; label: ReactNode }
> = {
  gym: { label: <FormattedMessage id="offerCollection.gym" />, icon: <OfferCollectionBarbell /> },
  coworking: {
    label: <FormattedMessage id="offerCollection.coworking" />,
    icon: <OfferCollectionDeviceLaptop />,
  },
  childRoom: {
    label: <FormattedMessage id="offerCollection.childRoom" />,
    icon: <OfferCollectionHorseToy />,
  },
};

const APPROVED_KEYS = ['childRoom', 'coworking', 'gym'];

export const EstateOptionsInfo: FC<EstateOptionsInfoProps> = (props) => {
  const isRender = props.gym || props.coworking || props.childRoom;

  return isRender ? (
    <div className={styles.options}>
      {Object.keys(props).map((key) => {
        const isRenderOption = props[key as keyof EstateOptions] && APPROVED_KEYS.includes(key);
        const option = OPTIONS_MAPPER[key as keyof typeof OPTIONS_MAPPER];

        return isRenderOption ? (
          <div className={styles.option}>
            <span className={styles.option__icon}>{option.icon}</span>
            <Text variant="body1" as="span">
              {option.label}
            </Text>
          </div>
        ) : null;
      })}
    </div>
  ) : null;
};
