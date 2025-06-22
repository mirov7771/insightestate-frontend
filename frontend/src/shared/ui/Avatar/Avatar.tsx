import { FC, MouseEvent, ReactNode } from 'react';
import styles from './Avatar.module.scss';

type AvatarProps = {
  text: string;
  className?: string;
  form?: 'rectangle' | 'round';
  icon?: ReactNode;
  imgSrc?: string;
  isStroke?: boolean;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  variant?: 'text' | 'pictures' | 'icon';
};

export const Avatar: FC<AvatarProps> = ({
  text,
  imgSrc,
  form = 'round',
  variant = 'text',
  isStroke = false,
  icon = null,
  onClick,
  className = '',
}) => {
  const classNames = [
    styles.avatar,
    styles[`avatar__form_${form}`],
    styles[`avatar__variant_${variant}`],
    isStroke ? styles.avatar_stroke : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const renderContent = () => {
    switch (variant) {
      case 'text': {
        return text;
      }
      case 'pictures': {
        return <img className={styles.profile_icon} src={imgSrc} alt="avatar" />;
      }
      case 'icon': {
        return icon;
      }
      default: {
        return null;
      }
    }
  };

  return (
    <div onClick={onClick} className={classNames}>
      {renderContent()}
    </div>
  );
};
