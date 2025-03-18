export const REDIRECT_URL = 'https://www.insightestate.com/listing';

const BASE_URL = 'http://77.238.232.18:8080/';

export const AUTH_URL = `${BASE_URL}auth/`;
export const PROFILE_URL = `${BASE_URL}users/`;

export const ROUTES = {};

export const InfoCards: InfoCardProps[] = [
  {
    id: 0,
    image: 'Dollar',
    title: 'Стабильная валюта',
    description:
      'За последние три года курс бата по отношению к доллару США менялся менее чем на 3%',
  },
  {
    id: 1,
    image: 'Dollar',
    title: 'Растущая экономика',
    description: 'Стабильный рост ВВП на 3% ежегодно и инфляция ~1-2% годовых',
  },
  {
    id: 2,
    image: 'Yes',
    title: 'Постоянный туристический поток',
    description: 'В 2024 году Таиланд посетят 36 млн туристов — больше, чем до пандемии',
  },
  {
    id: 3,
    image: 'Riskt',
    title: 'Простота покупки недвижимости',
    description:
      'Сделку можно оформить в том числе дистанционно и используя различные формы оплаты',
  },
  {
    id: 4,
    image: 'Man',
    title: 'Открытость для проживания иностранцев',
    description:
      'Наличие множества визовых программ с возможностью постоянного нахождения в королевстве',
  },
  {
    id: 5,
    image: 'Man',
    title: 'Развитая инфраструктура',
    description: '15 международных школ, 26 пляжей и 4 яхт-клуба, 16 гольф-полей',
  },
];

export type InfoCardProps = {
  description: string;
  id: number;
  image: string;
  title: string;
};

export const AnalyzeSteps: AnalyzeStepProps[] = [
  {
    id: '01',
    title: 'Cобираем данные',
    description:
      'Собираем 100+ параметров по каждому проекту, оцениваем по четырем направлениям: безопасность вложений, инвестиционный потенциал, комфорт жизни и расположение',
    style: 'infoCard1',
  },
  {
    id: '02',
    title: 'Проводим анализ',
    description: 'Сравниваем проекты между собой в рамках единой логики',
    style: 'infoCard2',
  },
  {
    id: '03',
    title: 'Просчитываем финансы',
    description:
      'Считаем бизнес-модель под конкретный запрос, бюджет и приоритеты. Видим реалистичный IRR* и ROI* на 5 и 10 лет',
    style: 'infoCard3',
  },
];

export type AnalyzeStepProps = {
  description: string;
  id: string;
  style: string;
  title: string;
};
