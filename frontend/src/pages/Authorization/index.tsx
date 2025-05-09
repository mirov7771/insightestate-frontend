import React, { FC, useEffect, useState } from 'react';
import styles from '@/pages/Authorization/Authorization.module.scss';
import { Spacer } from '@/widgets/Spacer/Spacer';
import { StyledButton } from '@/widgets/Modal/styled';
import { useNavigate } from 'react-router';
import { localField } from '@/i18n/localField';
import { isMobile } from 'react-device-detect';
import {estateCollectionApi} from "@/widgets/EstateCollection/api/estateCollectionApi";

export const Authorization: FC = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState<string | undefined | null>(
    localStorage.getItem('basicToken')
  );

  useEffect(() => {
    if (session && session.length > 2) {
      getNavigate().then((r) => navigate(r))
    }
  }, [session]);

  const getNavigate = async () => {
    const subscription = await estateCollectionApi.getUserSubscription(session!!)
    const payAmount = subscription?.data?.subscription?.main?.payAmount ?? 0
    const subscriptionId = subscription?.data?.subscription?.main?.id
    if (subscriptionId) {
      localStorage.setItem('subscriptionId', subscriptionId)
    }
    if (payAmount > 0) {
      return '/listing'
    }
    return '/tariffs'
  }

  return (
    <>
      <div className={styles.big}>
        {isMobile ? (
          <>
            <div className={styles.video}></div>
            <div className={styles.wrap_mobile}>
              <Spacer height={140} width={100} />
              <p className={styles.text_mobile}>{localField('main_title')}</p>
              <Spacer height={20} width={100} />
              <p className={styles.text2_mobile}>{localField('main_text')}</p>
              <Spacer height={40} width={100} />
              <div className={styles.button_mobile}>
                <StyledButton
                  fullWidth={false}
                  color="info"
                  variant="contained"
                  size="small"
                  href={'/login'}
                  style={{
                    backgroundColor: '#04b0be',
                    borderRadius: '100vw',
                    fontFamily: 'Wix Madefor Display,Arial,sans-serif',
                  }}
                >
                  {localField('log_in')}
                </StyledButton>
              </div>
              <Spacer height={20} width={100} />
              <div className={styles.button_mobile}>
                <StyledButton
                  fullWidth={false}
                  color="info"
                  variant="contained"
                  size="small"
                  href={'/sign-up'}
                  style={{
                    backgroundColor: 'transparent',
                    borderRadius: '100vw',
                    border: '1px solid #04b0be',
                    fontFamily: 'Wix Madefor Display,Arial,sans-serif',
                  }}
                >
                  {localField('registration')}
                </StyledButton>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.video}></div>
            <div className={styles.wrap}>
              <Spacer height={140} width={100} />
              <p className={styles.text}>{localField('main_title')}</p>
              <Spacer height={20} width={100} />
              <p className={styles.text2}>{localField('main_text')}</p>
              <Spacer height={40} width={100} />
              <div className={styles.button}>
                <StyledButton
                  fullWidth={false}
                  color="info"
                  variant="contained"
                  size="small"
                  href={'/login'}
                  style={{
                    backgroundColor: '#04b0be',
                    borderRadius: '100vw',
                    border: '1px solid #04b0be',
                    fontFamily: 'Wix Madefor Display,Arial,sans-serif',
                  }}
                >
                  {localField('log_in')}
                </StyledButton>
              </div>
              <Spacer height={20} width={100} />
              <div className={styles.button}>
                <StyledButton
                  fullWidth={false}
                  color="info"
                  variant="contained"
                  size="small"
                  href={'/sign-up'}
                  style={{
                    backgroundColor: 'transparent',
                    borderRadius: '100vw',
                    border: '1px solid #04b0be',
                    fontFamily: 'Wix Madefor Display,Arial,sans-serif',
                  }}
                >
                  {localField('registration')}
                </StyledButton>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
