import {
  OfferCollectionGraphMonitor,
  OfferCollectionHomeStar,
  OfferCollectionSpark,
} from '@/shared/assets/icons';
import { Text } from '@/shared/ui';

export const DESCRIPTIONS_RU = {
  Starter: [
    { icon: <OfferCollectionHomeStar />, text: <Text variant="body1">3 подборки</Text> },
    {
      icon: <OfferCollectionGraphMonitor />,
      text: <Text variant="body1">Ограниченная аналитика по объекту: только оценки</Text>,
    },
    {
      icon: <OfferCollectionSpark />,
      text: <Text variant="body1">3 запроса в AI-подборщике</Text>,
    },
  ],
  Pro: [
    {
      icon: <OfferCollectionHomeStar />,
      text: (
        <Text variant="body1">
          <b>Неограниченные подборки</b>
        </Text>
      ),
    },
    {
      icon: <OfferCollectionGraphMonitor />,
      text: <Text variant="body1">Вся аналитика по объекту: оценки, расчет экономики</Text>,
    },
    {
      icon: <OfferCollectionSpark />,
      text: (
        <Text variant="body1">
          <b>Неограниченные запросы</b> в AI-подборщике
        </Text>
      ),
    },
  ],
  Standart: [
    { icon: <OfferCollectionHomeStar />, text: <Text variant="body1">7 подборок</Text> },
    {
      icon: <OfferCollectionGraphMonitor />,
      text: <Text variant="body1">Вся аналитика по объекту: оценки, расчет экономики</Text>,
    },
    {
      icon: <OfferCollectionSpark />,
      text: <Text variant="body1">7 запросов в AI-подборщике</Text>,
    },
  ],
};

export const DESCRIPTIONS_ENG = {
  Starter: [
    { icon: <OfferCollectionHomeStar />, text: <Text variant="body1">3 selections</Text> },
    {
      icon: <OfferCollectionGraphMonitor />,
      text: <Text variant="body1">Limited analytics on the object: estimates only</Text>,
    },
    {
      icon: <OfferCollectionSpark />,
      text: <Text variant="body1">3 requests in the AI picker</Text>,
    },
  ],
  Pro: [
    {
      icon: <OfferCollectionHomeStar />,
      text: (
        <Text variant="body1">
          <b>Unlimited selections</b>
        </Text>
      ),
    },
    {
      icon: <OfferCollectionGraphMonitor />,
      text: (
        <Text variant="body1">
          All analytics on the object: estimates, calculation of the economy
        </Text>
      ),
    },
    {
      icon: <OfferCollectionSpark />,
      text: (
        <Text variant="body1">
          <b>Unlimited requests</b> in the AI picker
        </Text>
      ),
    },
  ],
  Standart: [
    { icon: <OfferCollectionHomeStar />, text: <Text variant="body1">7 collections</Text> },
    {
      icon: <OfferCollectionGraphMonitor />,
      text: (
        <Text variant="body1">
          All analytics on the object: estimates, calculation of the economy
        </Text>
      ),
    },
    {
      icon: <OfferCollectionSpark />,
      text: <Text variant="body1">7 queries in the AI picker</Text>,
    },
  ],
};
