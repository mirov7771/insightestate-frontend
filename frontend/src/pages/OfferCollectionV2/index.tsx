import React, {FC, useEffect, useState} from 'react';
import {useIntl} from 'react-intl';
import {useLocation, useParams, useSearchParams} from 'react-router';
import {Helmet} from 'react-helmet-async';
import {Button, Text} from '@/shared/ui';
import styles from './OfferCollectionV2.module.scss';
import {Tabs} from './Tabs/Tabs';
import {WhyThai} from './WhyThai/WhyThai';
import {ContactManager} from './ContactManager/ContactManager';
import generatePDF from 'react-to-pdf';
import {Spacer} from "@/widgets/Spacer/Spacer";
import {EstateCollection, estateCollectionApi} from "@/widgets/EstateCollection/api/estateCollectionApi";

const OfferCollectionV2: FC = () => {
  const { formatMessage } = useIntl();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const url = `${window.location.origin}${location.pathname}`;
  const getTargetElement = () => document.getElementById('content-id');
  const [visible, setVisible] = useState(true)
  const getPdf = () => {
    setVisible(false)
  }
  const [token, setToken] = useState<string | undefined | null>(localStorage.getItem('basicToken'));
  const [estateCollection, setEstateCollection] = useState<EstateCollection>();
  useEffect(() => {
    estateCollectionApi
        .getEstateCollectionById(id!!)
        .then((r) => setEstateCollection(r.data))
        .catch((e) => console.log(e));
  }, []);

  const callPdf = () => {
    generatePDF(getTargetElement, {
      method: 'open',
      page: {
        margin: 10,
        format: 'letter',
      },
      canvas: {
        mimeType: 'image/png'
      }
    }).then(() => setVisible(true))
        .catch(() => setVisible(true))
  }

  useEffect(() => {
    if (!visible) {
      setTimeout(callPdf, 100)
    }
  }, [visible]);

  const getGroupColor = () => {
    if (estateCollection?.agentInfo?.collectionColorValue) {
      return estateCollection?.agentInfo?.collectionColorValue;
    }
    switch (estateCollection?.agentInfo?.group) {
      case "extra":
        return "#FF8B57";
      default:
        return "";
    }
  }

  return (
    <div id="content-id">
      <Helmet>
        <title>{formatMessage({ id: 'meta.offerCollection.title' })}</title>
        <meta
          name="description"
          content={formatMessage({ id: 'meta.offerCollection.description' })}
        />
        <meta property="og:title" content={formatMessage({ id: 'meta.offerCollection.title' })} />
        <meta
          property="og:description"
          content={formatMessage({ id: 'meta.offerCollection.description' })}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
      </Helmet>
      <div className={styles.wrap}>
        <Spacer width={100} height={8}/>
        {estateCollection?.agentInfo?.group ?
            <div style={{
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex'
            }}>
              <img
                  width={estateCollection?.agentInfo?.group === 'SID' ? 210 : 400}
                  height={estateCollection?.agentInfo?.group === 'SID' ? 210 : 168}
                  src={`https://lotsof.properties/estate-images/${estateCollection?.agentInfo?.group}.png`}
                  alt=""
              />
            </div>
            : (estateCollection?.agentInfo?.collectionLogo ?
                    <div style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'flex'
                    }}>
                      <img
                          className={styles.img_loaded}
                          src={estateCollection?.agentInfo?.collectionLogo}
                          alt=""
                      />
                    </div> :
                <></>
            )
        }
        <Text variant="heading4_upper" as="h1" align="center">
          {formatMessage({ id: 'projects_for_you' })}
        </Text>
        <Spacer width={100} height={8}/>
        {id && <Tabs
            id={id}
            visible={visible}
            agentGroup={estateCollection?.agentInfo?.group || ''}
        />}
        {visible ?
            <>
        <WhyThai />
        {id && <ContactManager
            id={id}
            agentGroup={estateCollection?.agentInfo?.group || ''}
            client={searchParams.get('client')}
            color={estateCollection?.agentInfo?.collectionColorValue}
            pdf={
              <Button
                  onClick={getPdf}
                  size="l"
                  style={{
                    backgroundColor: getGroupColor()
                  }}
              >
                <Text variant="body1">PDF</Text>
              </Button>
            }/>}
            </> : <></>
        }
      </div>
    </div>
  );
};

export default OfferCollectionV2;
