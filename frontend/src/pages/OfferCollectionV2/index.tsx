import { FC } from 'react';
import { Text } from '@/shared/ui';
import styles from './OfferCollectionV2.module.scss';
import { Tabs } from './Tabs/Tabs';
import { WhyThai } from './WhyThai/WhyThai';
import { ContactManager } from './ContactManager/ContactManager';
import {useParams} from "react-router";
import {Estate} from "@/widgets/EstateCollection/api/estateCollectionApi";
import {localField} from "@/i18n/localField";

const OfferCollectionV2: FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className={styles.wrap}>
      <Text variant="heading1" as="h1" align="center">
          {localField('projects_for_you')}
      </Text>
      <Tabs id={id!!}/>
      <WhyThai />
      <ContactManager />
    </div>
  );
};

export default OfferCollectionV2;
