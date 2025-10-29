import {
  IconBP,
  IconBuildingCommunity,
  IconCalendarTime, IconChartArea, IconColorSwatch, IconFileTypePdf,
  IconGraphMonitor, IconHeadset,
  IconHomeStar, IconLayoutGrid, IconMessageCode,
  IconSpark, IconStar, IconWorldWWW
} from '@/shared/assets/icons';
import { Text } from '@/shared/ui';

export const DESCRIPTIONS_RU = {
  Start: [
    { icon: <IconHomeStar />, text: <Text variant="body1">Пробный период 14 дней</Text> },
    {
      icon: <IconBuildingCommunity />,
      text: <Text variant="body1">Доступ к базе объектов</Text>,
    },
    {
      icon: <IconLayoutGrid />,
      text: <Text variant="body1">Создание до 5 подборок</Text>,
    },
    {
      icon: <IconFileTypePdf />,
      text: <Text variant="body1">Выгрузка подборок в PDF</Text>,
    },
    {
      icon: <IconSpark />,
      text: <Text variant="body1">ИИ-подборщик</Text>,
    },
  ],
  Pro: [
    {
      icon: <IconCalendarTime />,
      text: (
        <Text variant="body1">
          Пробный период 14 дней
        </Text>
      ),
    },
    {
      icon: <IconBuildingCommunity />,
      text: <Text variant="body1">Доступ к базе объектов</Text>,
    },
    {
      icon: <IconLayoutGrid />,
      text: (
        <Text variant="body1">
          Безлимитное количество подборок
        </Text>
      ),
    },
    {
      icon: <IconFileTypePdf />,
      text: (
          <Text variant="body1">
            Выгрузка подборок в PDF
          </Text>
      ),
    },
    {
      icon: <IconSpark />,
      text: (
          <Text variant="body1">
            ИИ-подборщик
          </Text>
      ),
    },
    {
      icon: <IconColorSwatch />,
      text: (
          <Text variant="body1">
            Брендинг подборок
          </Text>
      ),
    },
    {
      icon: <IconHeadset />,
      text: (
          <Text variant="body1">
            Приоритетная техподдержка
          </Text>
      ),
    },
  ],
  Enterpise: [
    { icon: <IconCalendarTime />, text: <Text variant="body1">Без пробного периода</Text> },
    {
      icon: <IconBuildingCommunity />,
      text: <Text variant="body1">Доступ к базе объектов</Text>,
    },
    {
      icon: <IconLayoutGrid />,
      text: <Text variant="body1">Безлимитное количество подборок</Text>,
    },
    {
      icon: <IconFileTypePdf />,
      text: <Text variant="body1">Выгрузка подборок в PDF</Text>,
    },
    {
      icon: <IconSpark />,
      text: <Text variant="body1">ИИ-подборщик</Text>,
    },
    {
      icon: <IconColorSwatch />,
      text: <Text variant="body1">Брендинг подборок</Text>,
    },
    {
      icon: <IconHeadset />,
      text: <Text variant="body1">Приоритетная техподдержка</Text>,
    },
    {
      icon: <IconWorldWWW />,
      text: <Text variant="body1">Свой поддомен</Text>,
    },
    {
      icon: <IconBP />,
      text: <Text variant="body1">Аккаунт-менеджер</Text>,
    },
    {
      icon: <IconMessageCode />,
      text: <Text variant="body1">Прямой доступ к команде разработки</Text>,
    },
    {
      icon: <IconStar />,
      text: <Text variant="body1">Возможность индивидуальных доработок</Text>,
    },
    {
      icon: <IconChartArea />,
      text: <Text variant="body1">Мастер-аккаунт и статистика по брокерам</Text>,
    },
    {
      icon: <IconGraphMonitor />,
      text: <Text variant="body1">Скоринг-система</Text>,
    },
  ],
};

export const DESCRIPTIONS_ENG = {
  Start: [
    { icon: <IconCalendarTime />, text: <Text variant="body1">3 selections</Text> },
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
      icon: <IconCalendarTime />,
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
  Enterpise: [
    { icon: <IconCalendarTime />, text: <Text variant="body1">7 collections</Text> },
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
