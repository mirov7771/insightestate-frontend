import { FC } from 'react';
import { Section } from '../Section';
import { localField } from '@/i18n/localField';
import { GMap } from '@/shared/ui';

const containerStyle = {
  width: '100%',
  height: '400px',
};

type MapProps = {
  url: string;
};

export const Map: FC<MapProps> = ({ url }) => {
  const renderMap = () => {
    return <GMap mapContainerStyle={containerStyle} url={url} />;
  };

  return renderMap() ? (
    <Section title={localField('map')}>
      <GMap mapContainerStyle={containerStyle} url={url} />
    </Section>
  ) : null;
};
