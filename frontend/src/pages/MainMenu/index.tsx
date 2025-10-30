import { FC, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import styles from './MainMenu.module.scss';
import { Text } from '@/shared/ui';
import { Stories } from '@/entities/Stories/Stories';
import {STORIES, STORIES_V2, STORIES_V3, STORIES_V4, STORIES_V5} from '@/entities/Stories/constants';
import ObjectsImg from './assets/Objects.png';
import PodborkyImg from './assets/Podborky.png';
import UnitsImg from './assets/Units.png';
import Bt from '@/entities/Stories/assets/ClocksPic.png';
import Pp from '@/entities/Stories/assets/RocketPic.png';
import { detailApi } from '@/widgets/Detail/api/detailApi';
import { useStatus } from '@/shared/utils/useStatus';
import { Skeleton } from '@mui/material';

const MainMenu: FC = () => {
  const { formatMessage } = useIntl();
  const [storiesModal, setStoriesModal] = useState(false);
  const [heartModal, setHeartModal] = useState(false);
  const [tgModal, setTgModal] = useState(false);
  const [btModal, setBtModal] = useState(false);
  const [ppModal, setPpModal] = useState(false);
  const [readStories, setIsReadStories] = useState({ storiesModal: false, heartModal: false, tgModal: false, btModal: false, ppModal: false });
  const [collections, setCollections] = useState(0);
  const [units, setUnits] = useState(0);
  const [objects, setObjects] = useState(0);
  const [bestObjects, setBestObjects] = useState(0);
  const { status, setStatus } = useStatus();

  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const day = new Date().getDate()
  const isBeta = year === 2025 && month < 11
  const isPP = year === 2025 && month === 11 && day < 15

  useEffect(() => {
    setStatus('LOADING');
    detailApi
      .mainInfo(localStorage.getItem('userId')!!)
      .then((r) => {
        setBestObjects(r.data.bestObjects);
        setUnits(r.data.units);
        setCollections(r.data.collections);
        setObjects(r.data.objects);
        setStatus('SUCCESS');
      })
      .catch(() => {
        setStatus('ERROR');
      });
  }, []);

  const handleOpenModal = () => {
    setStoriesModal(true);
    setIsReadStories((prev) => ({ ...prev, storiesModal: true }));
  };

  const handleOpenHeartModal = () => {
    setHeartModal(true);
    setIsReadStories((prev) => ({ ...prev, heartModal: true }));
  };

  const handleOpenTgModal = () => {
    setTgModal(true);
    setIsReadStories((prev) => ({ ...prev, tgModal: true }));
  };

  const handleOpenBtModal = () => {
    setBtModal(true);
    setIsReadStories((prev) => ({ ...prev, btModal: true }));
  };

  const handleOpenPpModal = () => {
    setPpModal(true);
    setIsReadStories((prev) => ({ ...prev, ppModal: true }));
  };

  return (
    <main className={styles.grid}>
      <section className={styles.stories}>
        <div className={styles.story__wrapper}>
          <div
            className={`${styles.story} ${readStories.storiesModal ? styles.story_read : ''}`}
            onClick={handleOpenModal}
          >
            <div className={styles.story__content}>
              <img src="https://lotsof.properties/estate-images/InfoButton.png" alt="" />
            </div>
          </div>
          <Text variant="caption1" align="center">
            {formatMessage({ id: 'main_button_1' })}
          </Text>
        </div>
        <div className={styles.story__wrapper}>
          <div
            className={`${styles.story} ${readStories.heartModal ? styles.story_read : ''}`}
            onClick={handleOpenHeartModal}
          >
            <div className={styles.story__content}>
              <img src="https://lotsof.properties/estate-images/HeartButton.png" alt="" />
            </div>
          </div>
          <Text variant="caption1" align="center">
            {formatMessage({ id: 'main_button_2' })}
          </Text>
        </div>
        <div className={styles.story__wrapper}>
          <div
              className={`${styles.story} ${readStories.tgModal ? styles.story_read : ''}`}
              onClick={handleOpenTgModal}
          >
            <div className={styles.story__content}>
              <img src="https://lotsof.properties/estate-images/MessageButton.png" alt="" />
            </div>
          </div>
          <Text variant="caption1" align="center">
            {formatMessage({ id: 'main_button_3' })}
          </Text>
        </div>
        {isBeta ?
        <div className={styles.story__wrapper}>
          <div
              className={`${styles.story} ${readStories.btModal ? styles.story_read : ''}`}
              onClick={handleOpenBtModal}
          >
            <div className={styles.story__content}>
              <img src="https://lotsof.properties/estate-images/imageclocks.png" alt="" />
            </div>
          </div>
          <Text variant="caption1" align="center">
            {formatMessage({ id: 'main_button_4' })}
          </Text>
        </div> : <></>
        }
        {isPP ?
        <div className={styles.story__wrapper}>
          <div
              className={`${styles.story} ${readStories.ppModal ? styles.story_read : ''}`}
              onClick={handleOpenPpModal}
          >
            <div className={styles.story__content}>
              <img src="https://lotsof.properties/estate-images/rocket.png" alt="" />
            </div>
          </div>
          <Text variant="caption1" align="center">
            {formatMessage({ id: 'main_button_5' })}
          </Text>
        </div> : <></>
        }
      </section>
      <section className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.card__content}>
            <Text variant="body1">{formatMessage({ id: 'main_card_1' })}</Text>
            {status === 'LOADING' ? (
              <Skeleton variant="text" height={32} width={32} />
            ) : (
              <Text variant="heading4">{collections}</Text>
            )}
          </div>
          <div className={styles.card__img}>
            <img src={PodborkyImg} alt="" />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__content}>
            <Text variant="body1">{formatMessage({ id: 'main_card_2' })}</Text>
            {status === 'LOADING' ? (
              <Skeleton variant="text" height={32} width={32} />
            ) : (
              <Text variant="heading4">{units}</Text>
            )}
          </div>
          <div className={styles.card__img}>
            <img src={UnitsImg} alt="" />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__content}>
            <Text variant="body1">{formatMessage({ id: 'main_card_3' })}</Text>
            {status === 'LOADING' ? (
              <Skeleton variant="text" height={32} width={32} />
            ) : (
              <Text variant="heading4">{objects}</Text>
            )}
          </div>
          <div className={styles.card__img}>
            <img src={ObjectsImg} alt="" />
          </div>
        </div>
        {/*<div className={styles.card}>*/}
        {/*  <div className={styles.card__content}>*/}
        {/*    <Text variant="body1">{formatMessage({ id: 'main_card_4' })}</Text>*/}
        {/*    {status === 'LOADING' ? (*/}
        {/*      <Skeleton variant="text" height={32} width={32} />*/}
        {/*    ) : (*/}
        {/*      <Text variant="heading4">{bestObjects}</Text>*/}
        {/*    )}*/}
        {/*  </div>*/}
        {/*  <div className={styles.card__img}>*/}
        {/*    <img src={StarsImg} alt="" />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </section>
      <section className={styles.offer} style={{
        backgroundColor: isBeta ? '#FEE689' : '#E1CBF6'
      }}>
        <div className={styles.offer__content}>
          <Text className={styles.offer__text} variant="heading5">
            {formatMessage({ id: isBeta ? 'storiesV4.0.title' : 'storiesV5.0.title' })}
          </Text>
          <Text className={`${styles.offer__text} ${styles.offer__text_grey}`} variant="body2">
            {formatMessage({ id: isBeta ? 'storiesV4.0.description' : 'storiesV5.0.description' })}
          </Text>
        </div>
        <div className={styles.offer__img}>
          <img src={isBeta ? Bt : Pp} alt="" />
        </div>
      </section>
      <Stories items={STORIES} open={storiesModal} setOpen={setStoriesModal} />
      <Stories items={STORIES_V2} open={heartModal} setOpen={setHeartModal} />
      <Stories items={STORIES_V3} open={tgModal} setOpen={setTgModal} />
      <Stories items={STORIES_V4} open={btModal} setOpen={setBtModal} />
      <Stories items={STORIES_V5} open={ppModal} setOpen={setPpModal} />
    </main>
  );
};

export default MainMenu;
