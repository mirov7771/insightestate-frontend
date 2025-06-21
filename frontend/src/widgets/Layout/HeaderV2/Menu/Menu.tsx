import { FC } from 'react';
import { Link, useLocation } from 'react-router';
import styles from './Menu.module.scss';
import { useIntl } from 'react-intl';
import { Text } from '@/shared/ui';

const MENU_ITEMS: { formatMessageId: string; isActive: string[]; to: string }[] = [
  { to: 'listing', formatMessageId: 'properties', isActive: ['/listing', '/property'] },
  { to: 'user-collection', formatMessageId: 'selections', isActive: ['/user-collection', '/cl/'] },
];

export const Menu: FC = () => {
  const { formatMessage } = useIntl();
  const location = useLocation();

  return (
    <ul className={styles.menu}>
      {MENU_ITEMS.map((menu) => (
        <li key={menu.to}>
          <Link
            to={menu.to}
            className={`${styles.menu__item} ${menu.isActive.some((link) => location.pathname.includes(link)) ? styles.menu__item_active : null}`}
          >
            <Text variant="body1" bold as="span">
              {formatMessage({ id: menu.formatMessageId })}
            </Text>
          </Link>
        </li>
      ))}
    </ul>
  );
};
