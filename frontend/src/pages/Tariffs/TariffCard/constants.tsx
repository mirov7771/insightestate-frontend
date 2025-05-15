import {
  OfferCollectionGraphMonitor,
  OfferCollectionHomeStar,
  OfferCollectionSpark,
} from '@/shared/assets/icons';
import { Text } from '@/shared/ui';

export const DESCRIPTIONS = {
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
};
