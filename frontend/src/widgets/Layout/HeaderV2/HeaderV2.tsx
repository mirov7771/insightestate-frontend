import { FC, useEffect, useState } from 'react';
import { Logo } from '@/shared/assets/icons';
import styles from './HeaderV2.module.scss';
import { Menu } from './Menu';
import { Button, Text } from '@/shared/ui';
import { UserProfile } from '@/widgets/Layout/HeaderV2/UserProfile';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router';

type HeaderV2Props = {
  basicToken: string;
};

export const HeaderV2: FC<HeaderV2Props> = ({ basicToken }) => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const [isFree, setIsFree] = useState(
      localStorage.getItem('isFree')
  );

  useEffect(() => {
    setIsFree(localStorage.getItem('isFree'))
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <Logo />
          <div className={styles.bottom}>
            <Menu />
          </div>
        </div>
        <div className={styles.top_right}>
          {isFree ? <Button
              className={styles.change_tariff_button}
              variant="primary"
              size="s"
              onClick={() => navigate('/tariffs')}
          >
            <Text variant="body1" bold>
              {formatMessage({ id: 'change.tariff' })}
            </Text>
          </Button> : <></>}
          {/*<Button variant="base" size="s">*/}
          {/*  <Text variant="body1" bold>*/}
          {/*    {`${formatMessage({ id: 'userProfile.balance' })} 0$`}*/}
          {/*  </Text>*/}
          {/*</Button>*/}
          <UserProfile basicToken={basicToken} />
        </div>
      </div>
      <div className={styles.bottom}>
        <Menu />
      </div>
    </header>
  );
};
