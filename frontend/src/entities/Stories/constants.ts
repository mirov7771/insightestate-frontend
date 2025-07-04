import TelegramCloud from './assets/telegram-cloud.png';
import TelegramCloud2 from './assets/telegram-cloud-2.png';
import TelegramCloud3 from './assets/telegram-cloud-3.png';
import TelegramCloud4 from './assets/telegram-cloud-4.png';
import TelegramCloud5 from './assets/telegram-cloud-5.png';

import Pic1 from './assets/pic-1.png';
import Pic1En from './assets/pic-1-en.png';
import Pic2 from './assets/pic-2.png';
import Pic3 from './assets/pic-3.png';
import Pic3En from './assets/pic-3-en.png';
import Pic4 from './assets/pic-4.png';
import { StoryProps } from './types';

export const STORIES: StoryProps[] = [
  {
    img: TelegramCloud,
    title: 'stories.0.title',
    description: 'stories.0.description',
    backgroundColor: '#8DC3E6',
  },
  {
    img: TelegramCloud2,
    title: 'stories.1.title',
    description: 'stories.1.description',
    backgroundColor: '#C0B6AC',
  },
  {
    img: TelegramCloud3,
    title: 'stories.2.title',
    description: 'stories.2.description',
    backgroundColor: '#BBAEC2',
  },
  {
    img: TelegramCloud4,
    title: 'stories.3.title',
    description: 'stories.3.description',
    backgroundColor: '#C2BFB2',
  },
  {
    img: TelegramCloud5,
    title: 'stories.4.title',
    description: 'stories.4.description',
    backgroundColor: '#A3CAB6',
    button: { text: 'stories.4.button.text' },
  },
];

export const STORIES_V2: StoryProps[] = [
  {
    img: { ru: Pic1, en: Pic1En },
    title: 'storiesV2.0.title',
    description: 'storiesV2.0.description',
    backgroundColor: '#406149',
    variant: 'revert',
  },
  {
    img: Pic2,
    title: 'storiesV2.1.title',
    description: 'storiesV2.1.description',
    backgroundColor: '#9279B3',
    variant: 'revert',
  },
  {
    img: { ru: Pic3, en: Pic3En },
    title: 'storiesV2.2.title',
    description: 'storiesV2.2.description',
    backgroundColor: '#81AFBA',
    variant: 'revert',
  },
  {
    img: Pic4,
    title: 'storiesV2.3.title',
    description: 'storiesV2.3.description',
    backgroundColor: '#e9e8ea',
    variant: 'revert',
    color: '#202020',
    button: { text: 'storiesV2.3.button.text' },
  },
];
