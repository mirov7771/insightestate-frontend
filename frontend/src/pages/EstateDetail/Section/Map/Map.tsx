import { FC } from 'react';
import { Section } from '../Section';
import { useIntl } from 'react-intl';
import { GMap } from '@/shared/ui';

const containerStyle = {
  width: '100%',
  height: '400px',
};

type MapProps = {
  url: string;
};

export const Map: FC<MapProps> = ({ url }) => {
  const { formatMessage } = useIntl();
  const renderMap = () => {
    return <GMap mapContainerStyle={containerStyle} url={url} />;
  };

  return renderMap() ? (
    <Section title={formatMessage({ id: 'map' })}>
      <GMap mapContainerStyle={containerStyle} url={url} />
    </Section>
  ) : null;
};
