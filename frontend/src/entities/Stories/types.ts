import { MouseEventHandler } from 'react';

export type StoryProps = {
  backgroundColor: string;
  description: string;
  img: string | { en: string; ru: string };
  title: string;
  button?: {
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  };
  color?: string;
  variant?: 'default' | 'revert';
};
