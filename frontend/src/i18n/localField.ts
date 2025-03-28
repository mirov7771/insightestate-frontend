import { LOCALES } from '@/i18n/locales'
import { messages } from '@/i18n/messages'

type fields = 'city' |
    'airport_time' |
    'beach_time' |
    'region' |
    'type_of_place' |
    'completion_date' |
    'number_of_bedrooms' |
    'price' |
    'potential' |
    'uk' |
    'language'

export const localField = (field: fields) => {
    const locale = localStorage.getItem('language')
    let ln = LOCALES.ENGLISH
    if (locale) {
        ln = locale === 'en' ? LOCALES.ENGLISH : LOCALES.RUSSIAN
    }
    return messages[ln][field]
}

