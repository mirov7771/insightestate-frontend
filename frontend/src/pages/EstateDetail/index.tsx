import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useIntl } from 'react-intl';
import { useStatus } from '@/shared/utils/useStatus';
import { BadgeRating, Button, Text } from '@/shared/ui';
import styles from './EstateDetail.module.scss';
import { PaymentStepper } from '@/entities/PaymentStepper/PaymentStepper';
import { OfferCollectionBrandSpark, OfferCollectionMapPinFilled } from '@/shared/assets/icons';
import { AdvantagesBadges } from '@/entities/CardSlide/AdvantagesBadges';

import { detailApi, EstateDetail as TEstateDetail } from '@/widgets/Detail/api/detailApi';
import { UserCollectionModal } from '@/widgets/Modal/UserCollectionModal';
import { AiModal } from '@/widgets/Modal/AiModal';

import { FAQ } from './FAQ/FAQ';
import { Info } from './Info/Info';
import { Section } from './Section/Section';
import { Infrastructure } from './Section/Infrastructure/Infrastructure';
import { AverageYield } from './Section/AverageYield/AverageYield';
import { Map } from './Section/Map/Map';
import { Rating } from './Rating/Rating';
import { Units } from './Units';
import { EstateSlider } from './EstateSlider';
import { BaseUserModal } from '@/widgets/Modal/BaseUserModal';

const EstateDetail: FC = () => {
  const { formatMessage } = useIntl();
  const { id } = useParams<{ id: string }>();
  const { status, setStatus } = useStatus();
  const [estateDetailData, setEstateDetailData] = useState<TEstateDetail>();
  const token = localStorage.getItem('basicToken');
  const [userCollectionModal, setUserCollectionModal] = useState(false);
  const [aiModal, setAiModal] = useState(false);
  const [helpModal, setHelpModal] = useState(false);

  const handleOpenUserCollectionModal = () => {
    setUserCollectionModal(true);
  };
  const handleCloseUserCollectionModal = () => {
    setUserCollectionModal(false);
  };

  const handleOpenAiModal = () => {
    setAiModal(true);
  };
  const handleCloseAiModal = () => {
    setAiModal(false);
  };

  const handleOpenHelpModal = () => {
    setHelpModal(true);
  };
  const handleCloseHelpModal = () => {
    setHelpModal(false);
  };

  useEffect(() => {
    setStatus('LOADING');
    detailApi
      .getDetail(id)
      .then(({ data }) => {
        setEstateDetailData(data);
        setStatus('SUCCESS');
      })
      .catch(() => {
        setStatus('ERROR');
      });
  }, []);

  const renderSideSection = () => {
    return estateDetailData ? (
      <>
        <div className={styles.badges}>
          <BadgeRating
            icon={<OfferCollectionBrandSpark />}
            text={String(estateDetailData.grade?.main?.toFixed(1) || '')}
            background="white"
            className={styles.rating}
            size="md"
          />
          {estateDetailData.location?.name && (
            <BadgeRating
              icon={<OfferCollectionMapPinFilled />}
              text={estateDetailData.location.name}
              background="white"
              className={styles.rating}
            />
          )}
          <AdvantagesBadges
            toolTip1={estateDetailData.toolTip1}
            toolTip2={estateDetailData.toolTip2}
            toolTip3={estateDetailData.toolTip3}
          />
        </div>
        <Text variant="heading3" className={styles.name}>
          {estateDetailData.name}
        </Text>
        <Info
          floors={estateDetailData.floors}
          project={estateDetailData.unitCount}
          buildEndDate={estateDetailData.buildEndDate}
          level={estateDetailData.level || 'UNKNOWN'}
          type={estateDetailData.type || 'VILLA'}
          developer={estateDetailData.developer?.name}
          parkingSize={estateDetailData.options?.parkingSize}
          companyEnabled={estateDetailData.managementCompany?.enabled || false}
          price={estateDetailData.price}
        />
        <div className={styles.buttons}>
          <Button disabled={!token} onClick={handleOpenUserCollectionModal} wide>
            <Text variant="body1" bold>
              {formatMessage({ id: 'add_to_collection' })}
            </Text>
          </Button>
          <Button disabled={!token} onClick={handleOpenAiModal} variant="ai" wide>
            <Text variant="body1" bold>
              {formatMessage({ id: 'ai_collection' })}
            </Text>
          </Button>
          <Button disabled={!token} onClick={handleOpenHelpModal} variant="base" wide>
            <Text variant="body1" bold>
              {formatMessage({ id: 'help_with_client' })}
            </Text>
          </Button>
        </div>
      </>
    ) : null;
  };

  if (status === 'LOADING') {
    return (
      <Text variant="heading2" as="span" align="center">
        LOADING...
      </Text>
    );
  }

  if (status === 'SUCCESS' && estateDetailData) {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <EstateSlider
            images={[
              ...(estateDetailData.exteriorImages || []),
              ...(estateDetailData.interiorImages || []),
              ...(estateDetailData.facilityImages || []),
            ]}
          />
          <aside className={`${styles.side} ${styles.side_hidden_desktop}`}>
            <div className={styles.sticky}>{renderSideSection()}</div>
          </aside>
          <div>
            <Rating {...estateDetailData.grade} />
          </div>
          <div>
            <Units />
          </div>
          <div>
              {!estateDetailData.options?.gym && !estateDetailData.options?.childRoom && !estateDetailData.options?.coworking ? <></> :
                <Infrastructure
                  gym={estateDetailData.options?.gym || false}
                  childRoom={estateDetailData.options?.childRoom || false}
                  coworking={estateDetailData.options?.coworking || false}
                  toolTip1={estateDetailData.toolTip1}
                  toolTip2={estateDetailData.toolTip2}
                  toolTip3={estateDetailData.toolTip3}
                />
              }
          </div>
          <div>
            <AverageYield
              roi={estateDetailData.profitability?.roi}
              roiSummary={estateDetailData.profitability?.roiSummary}
              irr={estateDetailData.profitability?.irr}
              capRateFirstYear={estateDetailData.profitability?.capRateFirstYear}
            />
          </div>
          {estateDetailData.paymentPlanList && (
            <div>
              <Section title={formatMessage({ id: 'offerCollection.paymentSchedule' })}>
                <PaymentStepper variant="estate-detail" steps={estateDetailData.paymentPlanList} />
              </Section>
            </div>
          )}
          {estateDetailData.location.mapUrl && (
            <div>
              <Map
                url={estateDetailData.location.mapUrl}
                infrastructure={estateDetailData.infrastructure}
                location={estateDetailData.location.name}
                city={estateDetailData.city}
              />
            </div>
          )}
          <div>
            <FAQ />
          </div>
        </main>
        <aside className={`${styles.side} ${styles.side_hidden_mobile}`}>
          <div className={styles.sticky}>{renderSideSection()}</div>
        </aside>
        <UserCollectionModal
          open={userCollectionModal}
          onClose={handleCloseUserCollectionModal}
          onOpen={handleOpenUserCollectionModal}
          anchor="bottom"
          id={id!!}
          token={token!!}
        />
        <AiModal
          open={aiModal}
          onClose={handleCloseAiModal}
          onOpen={handleOpenAiModal}
          anchor="bottom"
        />
        <BaseUserModal
          open={helpModal}
          onClose={handleCloseHelpModal}
          onOpen={handleOpenHelpModal}
          anchor="bottom"
          id={id!!}
          object={estateDetailData.name}
          token={token!!}
        />
      </div>
    );
  }

  return null;
};

export default EstateDetail;
