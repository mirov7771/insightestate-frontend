export const REDIRECT_URL = 'https://www.insightestate.com/listing';

const BASE_URL = 'http://77.238.232.18:8080/';

export const AUTH_URL = `${BASE_URL}auth/`;
export const PROFILE_URL = `${BASE_URL}users/`;

export const ROUTES = {};

export const InfoCards: InfoCardProps[] = [
    {
        id: 0,
        title: 'Стабильная валюта',
        description: 'За последние три года курс бата по отношению к доллару США менялся менее чем на 3%'
    },
    {
        id: 1,
        title: 'Растущая экономика',
        description: 'Стабильный рост ВВП на 3% ежегодно и инфляция ~1-2% годовых'
    },
    {
        id: 2,
        title: 'Постоянный туристический поток',
        description: 'В 2024 году Таиланд посетят 36 млн туристов — больше, чем до пандемии'
    },
    {
        id: 3,
        title: 'Простота покупки недвижимости',
        description: 'Сделку можно оформить в том числе дистанционно и используя различные формы оплаты'
    },
    {
        id: 4,
        title: 'Открытость для проживания иностранцев',
        description: 'Наличие множества визовых программ с возможностью постоянного нахождения в королевстве'
    },
    {
        id: 5,
        title: 'Развитая инфраструктура',
        description: '15 международных школ, 26 пляжей и 4 яхт-клуба, 16 гольф-полей'
    }
]

export type InfoCardProps = {
    id: number,
    title: string,
    description: string
}
