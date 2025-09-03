import { FC, Fragment, ReactNode, useEffect, useState } from 'react';
import styles from './Tabs.module.scss';
import { Card } from '../Card/Card';
import {
  EstateCollection,
  estateCollectionApi,
} from '@/widgets/EstateCollection/api/estateCollectionApi';
import { useIntl } from 'react-intl';
import { TableComparison } from '@/pages/OfferCollectionV2/TableComparison/TableComparison';
import { CardLayout } from '@/pages/OfferCollectionV2/CardLayout/CardLayout';
import { useWindowResize } from '@/shared/utils/useWindowResize';
import { TabsElements } from '@/pages/OfferCollectionV2/Tabs/TabsElements';
import { Segment } from '@/shared/ui';
import { IconBuildingCommunity, IconLayout } from '@/shared/assets/icons';
import { TableComparisonV2 } from '@/pages/OfferCollectionV2/TableComparison/TableComparasionV2';
import { generateComparisonRows } from '@/pages/OfferCollectionV2/TableComparison/utils';

interface TabPanelProps {
  index: number;
  value: number;
  children?: ReactNode;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
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

export const Tabs: FC<{
    id: string;
    client?: string | null,
    visible: boolean,
    agentGroup: string
}> = ({ id, client, visible, agentGroup }) => {
  const { width } = useWindowResize();
  const { formatMessage } = useIntl();
  const [estateCollection, setEstateCollection] = useState<EstateCollection>();
  const [value, setValue] = useState(0);
  const [segmentValue, setSegmentValue] = useState(2);

  useEffect(() => {
    estateCollectionApi
      .getEstateCollectionById(id)
      .then((r) => setEstateCollection(r.data))
      .catch((e) => console.log(e));
  }, []);

  const hasUnits = !!estateCollection?.estates?.some((estate) => !!estate.units?.length);

  return (
    <>
      <div className={styles.tabsWrapper}>
        <TabsElements
          value={value}
          setValue={setValue}
          content={[formatMessage({ id: 'list' }), formatMessage({ id: 'comparison' })]}
        />
        {hasUnits && value === 1 && (
          <Segment
            onChange={setSegmentValue}
            options={[
              {
                icon: <IconBuildingCommunity />,
                value: 2,
                text: formatMessage({ id: 'units.objects' }),
              },
              { icon: <IconLayout />, value: 3, text: formatMessage({ id: 'units.units' }) },
            ]}
            value={segmentValue}
          />
        )}
        {/*Пока убираем лайки  */}
        {/*<IconButton size="small" classes={{ root: styles.iconButtonRoot }} disableRipple>*/}
        {/*  <div className={styles.iconHeart}>*/}
        {/*    <Heart />*/}
        {/*  </div>*/}
        {/*  1*/}
        {/*</IconButton>*/}
      </div>
      <CustomTabPanel value={value} index={0}>
        {estateCollection?.estates ? (
          <div className={styles.content}>
            {estateCollection?.estates.map((estate) => (
              <Fragment key={estate.id}>
                {width >= 1200 ? (
                  <CardLayout
                    estate={{
                      ...estate,
                      collectionId: id,
                      collection: estateCollection.name,
                      agentInfo: estateCollection.agentInfo,
                      visible: visible
                    }}
                  />
                ) : (
                  <Card
                    {...estate}
                    collectionId={id}
                    collection={estateCollection.name}
                    agentInfo={estateCollection.agentInfo}
                    visible={visible}
                  />
                )}
              </Fragment>
            ))}
          </div>
        ) : (
          <div className={styles.content} />
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {!!estateCollection?.estates?.length &&
          (segmentValue === 2 ? (
            <TableComparison estates={estateCollection.estates} />
          ) : (
            <TableComparisonV2
              estates={estateCollection.estates}
              rows={generateComparisonRows(estateCollection.estates, formatMessage)}
            />
          ))}
      </CustomTabPanel>
    </>
  );
};
