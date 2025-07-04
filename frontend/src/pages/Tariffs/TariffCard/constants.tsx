import { IconGraphMonitor, IconHomeStar, IconSpark } from '@/shared/assets/icons';
import { Text } from '@/shared/ui';

export const DESCRIPTIONS_RU = {
  Starter: [
    { icon: <IconHomeStar />, text: <Text variant="body1">3 подборки</Text> },
    {
      icon: <IconGraphMonitor />,
      text: <Text variant="body1">Ограниченная аналитика по объекту: только оценки</Text>,
    },
    {
      icon: <IconSpark />,
      text: <Text variant="body1">3 запроса в AI-подборщике</Text>,
    },
  ],
  Pro: [
    {
      icon: <IconHomeStar />,
      text: (
        <Text variant="body1">
          <b>Неограниченные подборки</b>
        </Text>
      ),
    },
    {
      icon: <IconGraphMonitor />,
      text: <Text variant="body1">Вся аналитика по объекту: оценки, расчет экономики</Text>,
    },
    {
      icon: <IconSpark />,
      text: (
        <Text variant="body1">
          <b>Неограниченные запросы</b> в AI-подборщике
        </Text>
      ),
    },
  ],
  Standart: [
    { icon: <IconHomeStar />, text: <Text variant="body1">7 подборок</Text> },
    {
      icon: <IconGraphMonitor />,
      text: <Text variant="body1">Вся аналитика по объекту: оценки, расчет экономики</Text>,
    },
    {
      icon: <IconSpark />,
      text: <Text variant="body1">7 запросов в AI-подборщике</Text>,
    },
  ],
};

export const DESCRIPTIONS_ENG = {
  Starter: [
    { icon: <IconHomeStar />, text: <Text variant="body1">3 selections</Text> },
    {
      icon: <IconGraphMonitor />,
      text: <Text variant="body1">Limited analytics on the object: estimates only</Text>,
    },
    {
      icon: <IconSpark />,
      text: <Text variant="body1">3 requests in the AI picker</Text>,
    },
  ],
  Pro: [
    {
      icon: <IconHomeStar />,
      text: (
        <Text variant="body1">
          <b>Unlimited selections</b>
        </Text>
      ),
    },
    {
      icon: <IconGraphMonitor />,
      text: (
        <Text variant="body1">
          All analytics on the object: estimates, calculation of the economy
        </Text>
      ),
    },
    {
      icon: <IconSpark />,
      text: (
        <Text variant="body1">
          <b>Unlimited requests</b> in the AI picker
        </Text>
      ),
    },
  ],
  Standart: [
    { icon: <IconHomeStar />, text: <Text variant="body1">7 collections</Text> },
    {
      icon: <IconGraphMonitor />,
      text: (
        <Text variant="body1">
          All analytics on the object: estimates, calculation of the economy
        </Text>
      ),
    },
    {
      icon: <IconSpark />,
      text: <Text variant="body1">7 queries in the AI picker</Text>,
    },
  ],
};
