import { LOCALES } from '@/i18n/locales';
import { messages } from '@/i18n/messages';

type fields =
  | 'city'
  | 'airport_time'
  | 'beach_time'
  | 'region'
  | 'type_of_place'
  | 'completion_date'
  | 'number_of_bedrooms'
  | 'price'
  | 'potential'
  | 'uk'
  | 'language'
  | 'properties'
  | 'selections'
  | 'profile'
  | 'about_us'
  | 'contacts'
  | 'subscribe'
  | 'ask_question'
  | 'juridical_info'
  | 'politics'
  | 'footer_info'
  | 'rights_reserved'
  | 'not_found'
  | 'projects'
  | 'filter_params'
  | 'filter_clear'
  | 'price_from'
  | 'min'
  | 'object_delete_title'
  | 'object_delete_message'
  | 'object_info_title'
  | 'object_info_message'
  | 'ok'
  | 'selection'
  | 'add_to_collection'
  | 'help_with_client'
  | 'ai_collection'
  | 'description'
  | 'more_photos'
  | 'yes'
  | 'no'
  | 'developer'
  | 'parking'
  | 'class'
  | 'to_airport'
  | 'to_beach'
  | 'total_aparts'
  | 'total_floors'
  | 'not_selected';

export const localField = (field: fields) => {
  const locale = localStorage.getItem('language');
  let ln = LOCALES.ENGLISH;

  if (locale) {
    ln = locale === 'en' ? LOCALES.ENGLISH : LOCALES.RUSSIAN;
  }
  return messages[ln][field];
};
