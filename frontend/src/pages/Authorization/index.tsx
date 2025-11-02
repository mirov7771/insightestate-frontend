import { FC, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useIntl } from 'react-intl';
import styles from '@/pages/Authorization/Authorization.module.scss';
import { Spacer } from '@/widgets/Spacer/Spacer';
import { StyledButton } from '@/widgets/Modal/styled';
import { useNavigate } from 'react-router';
import { estateCollectionApi } from '@/widgets/EstateCollection/api/estateCollectionApi';

export const getNavigate = async (route?: string) => {
  const res = await estateCollectionApi.getUserSubscription(
    localStorage.getItem('basicToken')!!
  );
  const payAmount = res?.subscription?.subscription?.main?.payAmount ?? 0;
  const subscriptionId = res?.subscription?.subscription?.main?.id;
  const collectionCount = res?.collectionCount

  if (subscriptionId) {
    localStorage.setItem('subscriptionId', subscriptionId);
  }

  const openAuth = parseInt(localStorage.getItem('openAuth') || '0');

  if (collectionCount < 1) {
    return '/create-collection';
  } else if (route) {
    return route
  } else if (openAuth < 4) {
    localStorage.setItem('openAuth', openAuth + 1 + '');
    return '/main_menu';
  } else {
    localStorage.setItem('openAuth', '0');
    return '/main_menu';
  }
};

const Authorization: FC = () => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const [session, setSession] = useState<string | undefined | null>(
    localStorage.getItem('basicToken')
  );

  useEffect(() => {
    if (session && session.length > 2) {
      getNavigate()
        .then((r) => navigate(r))
        .catch((e) => {
          console.log(e);
          navigate('/listing');
        });
    } else {
      navigate(`/${localStorage.getItem('language') || 'ru'}`);
    }
  }, [session]);

  return (
    <>
      <div className={styles.big}>
        {isMobile ? (
          <>
            <div className={styles.video}></div>
            <div className={styles.wrap_mobile}>
              <Spacer height={140} width={100} />
              <p className={styles.text_mobile}>{formatMessage({ id: 'main_title' })}</p>
              <Spacer height={20} width={100} />
              <p className={styles.text2_mobile}>{formatMessage({ id: 'main_text' })}</p>
              <Spacer height={40} width={100} />
              <div className={styles.button_mobile}>
                <StyledButton
                  fullWidth={false}
                  color="info"
                  variant="contained"
                  size="small"
                  onClick={() => navigate('/login')}
                  style={{
                    backgroundColor: '#04b0be',
                    borderRadius: '100vw',
                    fontFamily: 'Wix Madefor Display,Arial,sans-serif',
                  }}
                >
                  {formatMessage({ id: 'log_in' })}
                </StyledButton>
              </div>
              <Spacer height={20} width={100} />
              <div className={styles.button_mobile}>
                <StyledButton
                  fullWidth={false}
                  color="info"
                  variant="contained"
                  size="small"
                  onClick={() => navigate('/register')}
                  style={{
                    backgroundColor: 'transparent',
                    borderRadius: '100vw',
                    border: '1px solid #04b0be',
                    fontFamily: 'Wix Madefor Display,Arial,sans-serif',
                  }}
                >
                  {formatMessage({ id: 'registration' })}
                </StyledButton>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.video}></div>
            <div className={styles.wrap}>
              <Spacer height={140} width={100} />
              <p className={styles.text}>{formatMessage({ id: 'main_title' })}</p>
              <Spacer height={20} width={100} />
              <p className={styles.text2}>{formatMessage({ id: 'main_text' })}</p>
              <Spacer height={40} width={100} />
              <div className={styles.button}>
                <StyledButton
                  fullWidth={false}
                  color="info"
                  variant="contained"
                  size="small"
                  onClick={() => navigate('/login')}
                  style={{
                    backgroundColor: '#04b0be',
                    borderRadius: '100vw',
                    border: '1px solid #04b0be',
                    fontFamily: 'Wix Madefor Display,Arial,sans-serif',
                  }}
                >
                  {formatMessage({ id: 'log_in' })}
                </StyledButton>
              </div>
              <Spacer height={20} width={100} />
              <div className={styles.button}>
                <StyledButton
                  fullWidth={false}
                  color="info"
                  variant="contained"
                  size="small"
                  onClick={() => navigate('/register')}
                  style={{
                    backgroundColor: 'transparent',
                    borderRadius: '100vw',
                    border: '1px solid #04b0be',
                    fontFamily: 'Wix Madefor Display,Arial,sans-serif',
                  }}
                >
                  {formatMessage({ id: 'registration' })}
                </StyledButton>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Authorization;
