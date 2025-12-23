import { FC, ReactNode, useEffect, useState } from 'react';
import {
  AgentInfo,
  EstateCollection,
  estateCollectionApi,
} from '@/widgets/EstateCollection/api/estateCollectionApi';
import styles from './UserCollection.module.scss';
import { Watch } from 'react-loader-spinner';
import { DEFAULT_IMG } from '@/entities/Card/Card';
import { useNavigate } from 'react-router';
import { useIntl } from 'react-intl';
import { CardView } from './CardView/CardView';
import { BlockView } from '@/pages/UserCollection/BlockView/BlockView';
import { Tabs } from '@/entities/Tabs/Tabs';
import { Button, Text, useNotifications } from '@/shared/ui';
import { FETCHING_STATUS } from '@/shared/constants/constants';
import { copyToClipboard } from '@/shared/utils';
import {Circles} from "@/shared/assets/icons";
import {Spacer} from "@/widgets/Spacer/Spacer";
import {ModalSettings} from "@/shared/ui/modals/ModalSettings";
import {isMobile} from "react-device-detect";

type TStatus = 'IDLE' | 'SUCCESS' | 'ERROR' | 'LOADING';

interface TabPanelProps {
  index: number;
  value: number;
  children?: ReactNode;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      className={styles.tabpanel}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

const ItemCollection: FC<EstateCollection & { token: string; value: number }> = ({
  name,
  estates,
  id,
  token,
  value,
  agentInfo,
  archive,
  showFinance,
  showPresentation
}) => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const { notify } = useNotifications();
  const collectionLink = `/cl/${id}`;
  const collectionLinkClientShow = `/cl/${id}`;
  const collectionLinkClient = `/cl/${id}?client=true`;
  const [status, setStatus] = useState<keyof typeof FETCHING_STATUS>('IDLE');
  const [copyLinkStatus, setCopyLinkStatus] = useState<keyof typeof FETCHING_STATUS>('IDLE');
  const allImages = estates!!
    .map(
      (estate) =>
        estate?.exteriorImages?.[0] || estate?.facilityImages?.[0] || estate?.interiorImages?.[0]
    )
    .filter(Boolean) as string[];
  const renderImages = !!allImages.length ? allImages : [DEFAULT_IMG];
  const deleteCollection = () => {
    setStatus('LOADING');
    estateCollectionApi
      .deleteCollection(token, id)
      .then((r) => {
        setStatus('SUCCESS');
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
        setStatus('ERROR');
      });
  };

  const archiveCollection = () => {
    setStatus('LOADING');
    estateCollectionApi
        .archiveCollection(token, id)
        .then((r) => {
          setStatus('SUCCESS');
          window.location.reload();
        })
        .catch((e) => {
          console.log(e);
          setStatus('ERROR');
        });
  }

  const goToCollection = () => {
    navigate(collectionLink);
  };

  const goToCollectionClient = () => {
    navigate(collectionLinkClient);
  };

  const url = () => {
    const group = agentInfo?.group || ''
    let urlPart = 'https://myselection.properties';
    switch (group) {
      case 'neginski':
        urlPart = 'https://neginski.myselection.properties';
        break
      case 'extra':
        urlPart = 'https://sunthai.myselection.properties';
        break
      case 'insightestate':
        urlPart = 'https://insightestate.myselection.properties';
        break
      case 'meg':
        urlPart = 'https://meg.myselection.properties';
        break
      case 'kalinka':
      case 'kalinka2':
        urlPart = 'https://kalinka.myselection.properties';
        break
      case 'edenvest':
        urlPart = 'https://edenvest.myselection.properties';
        break
    }
    return `${urlPart}${collectionLinkClientShow}`
  }

  const handleCopyLink = async () => {
    try {
      const group = agentInfo?.group || ''
      let urlPart = 'https://myselection.properties';
      switch (group) {
        case 'neginski':
          urlPart = 'https://neginski.myselection.properties';
          break
        case 'extra':
          urlPart = 'https://sunthai.myselection.properties';
          break
        case 'insightestate':
          urlPart = 'https://insightestate.myselection.properties';
          break
        case 'meg':
          urlPart = 'https://meg.myselection.properties';
          break
        case 'kalinka':
        case 'kalinka2':
          urlPart = 'https://kalinka.myselection.properties';
          break
        case 'edenvest':
          urlPart = 'https://edenvest.myselection.properties';
          break
      }
      setCopyLinkStatus('LOADING');
      const fullUrl = `${urlPart}${collectionLinkClientShow}`;
      const result = await copyToClipboard(fullUrl);

      if (result) {
        setCopyLinkStatus('SUCCESS');
        notify({ message: formatMessage({ id: 'userCollection.copiedLink' }), duration: 3000 });
      }
    } catch (e) {
      setCopyLinkStatus('ERROR');
      console.log({ e });
    }
  };

  return (
    <>
      <CustomTabPanel value={value} index={0}>
        <BlockView
          estates={estates!!}
          name={name}
          goToCollection={goToCollection}
          goToCollectionClient={goToCollectionClient}
          deleteCollection={deleteCollection}
          copyLink={handleCopyLink}
          id={id}
          copyLinkStatus={copyLinkStatus}
          url={url()}
          archiveCollection={archiveCollection}
          finance={showFinance}
          presentation={showPresentation || false}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CardView
          images={renderImages}
          estates={estates!!}
          name={name}
          goToCollection={goToCollection}
          deleteCollection={deleteCollection}
          copyLink={handleCopyLink}
          id={id}
          archiveCollection={archiveCollection}
          archive={archive || false}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <CardView
            images={renderImages}
            estates={estates!!}
            name={name}
            goToCollection={goToCollection}
            deleteCollection={deleteCollection}
            copyLink={handleCopyLink}
            id={id}
            archiveCollection={archiveCollection}
            archive={archive || false}
        />
      </CustomTabPanel>
    </>
  );
};

const UserCollection: FC = () => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate()
  const [value, setValue] = useState(0);
  const [collection, setCollection] = useState<EstateCollection[]>([]);
  const [archive, setArchive] = useState<EstateCollection[]>([]);
  const [status, setStatus] = useState<TStatus>('IDLE');
  const token = localStorage.getItem('basicToken');
  const [agentInfo, setAgentInfo] = useState<AgentInfo>()
  const [openSettings, setOpenSettings] = useState(false);
  const [group, setGroup] = useState<string>('')
  const classesCollection = {
    0: styles.collection__block,
    1: styles.collection__card,
    2: styles.collection__card,
  };

  const handleRedirect = () => {
    navigate("/create-collection")
  }

  const subscriptionId = localStorage.getItem('subscriptionId') || 'f1628768-72c2-40e4-9e6d-7c4ab7b1909b'

  useEffect(() => {
    setStatus('LOADING');
    estateCollectionApi
      .getEstateCollection(token!!)
      .then((r) => {
        setCollection(r.data.items);
        setStatus('SUCCESS');
      })
      .catch((e) => {
        setStatus('ERROR');
        console.log(e);
      });

    estateCollectionApi
        .getEstateCollection(token!!, true)
        .then((r) => {
          setArchive(r.data.items);
          setStatus('SUCCESS');
        })
        .catch((e) => {
          setStatus('ERROR');
          console.log(e);
        });

    estateCollectionApi.getAgentInfo(token!!)
        .then((r) => {
          setGroup(r.data.group || '')
          setAgentInfo(r.data)
        }).catch((e) => {console.log(e);});
  }, []);

  return (
    <div className={styles.wrap}>
      {status === 'LOADING' && (
        <Watch
          height="180"
          width="180"
          color="gray"
          ariaLabel="watch-loading"
          wrapperClass={styles.loader}
        />
      )}
      {status === 'SUCCESS' && (!!collection.length || !!archive.length) && (
        <>
          <div className={styles.tabs_header}>
            <div className={styles.tabs}>
              <Tabs
                content={[
                    formatMessage({ id: 'userCollection.blocks' }),
                    formatMessage({ id: 'userCollection.cards' }),
                    formatMessage({ id: 'userCollection.archive' })
                ]}
                setValue={setValue}
                value={value}
              />
            </div>
            {group === 'extra' ? <></> :
                isMobile ? <></> :
              <div style={{
              display: 'inline-flex',
              gap: '5px'
            }}>
            <Button
                size="s"
                className={styles.settings_button}
                variant="base"
                wide
                onClick={handleRedirect}
            >
              <Text align="center" variant="body1" bold>
                {formatMessage({id: 'templates_settings'})}
              </Text>
            </Button>
            {subscriptionId !== 'f1628768-72c2-40e4-9e6d-7c4ab7b1909b' ?
            <Button
                size="s"
                className={styles.settings_button}
                variant="base"
                wide
                onClick={() => setOpenSettings(true)}
            >
              <Circles/>
              <Text align="center" variant="body1" bold>
                {formatMessage({id: 'theme_settings'})}
              </Text>
            </Button> : <></>}
          </div>
            }
          </div>

          {group === 'extra' ? <></> :
              isMobile ?
                  <div style={{
                    display: 'block'
                  }}>
                    <Spacer height={5} width={100}/>
                    <Button
                        size="s"
                        className={styles.settings_button}
                        variant="base"
                        wide
                        onClick={handleRedirect}
                    >
                      <Text align="center" variant="body1" bold>
                        {formatMessage({id: 'templates_settings'})}
                      </Text>
                    </Button>
                    <Spacer height={5} width={100}/>
                    <Button
                        size="s"
                        className={styles.settings_button}
                        variant="base"
                        wide
                        onClick={() => setOpenSettings(true)}
                    >
                      <Circles/>
                      <Text align="center" variant="body1" bold>
                        {formatMessage({id: 'theme_settings'})}
                      </Text>
                    </Button>
                  </div> : <></>
          }

          <div className={`${styles.collection} ${classesCollection[value as 2 | 1 | 0]}`}>
            {value === 2 ?
                archive.map((item) => (
                      <ItemCollection
                          {...item}
                          estates={item.estates || []}
                          value={value}
                          token={token!!}
                          agentInfo={agentInfo}
                      />
                  )) :
                collection.map((item) => (
                      <ItemCollection
                          {...item}
                          estates={item.estates || []}
                          value={value}
                          token={token!!}
                          agentInfo={agentInfo}
                      />
                  ))
            }
          </div>
        </>
      )}
      {status === 'SUCCESS' && !collection.length && (
        <Text variant="heading3" className={styles.empty}>
          {formatMessage({ id: 'userCollection.empty' })}
        </Text>
      )}
      <ModalSettings
        open={openSettings}
        setOpen={setOpenSettings}
      />
    </div>
  );
};

export default UserCollection;
