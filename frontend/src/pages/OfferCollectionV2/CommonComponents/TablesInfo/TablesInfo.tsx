import { FC } from 'react';
import styles from './TablesInfo.module.scss';
import { Text } from '@/shared/ui';

type TablesInfoProps = {
  tables: {
    items: { description: string; name: string }[];
  }[];
};

export const TablesInfo: FC<TablesInfoProps> = ({ tables }) => {
  return (
    <section className={styles.tables}>
      {tables.map((tabel, index) => (
        <>
          <section className={styles.table}>
            {tabel.items.map((item) => (
              <>
                <div className={styles.table__item} key={item.name}>
                  <Text variant="body1">{item.name}</Text>
                  <Text variant="body1" bold>
                    {item.description}
                  </Text>
                </div>
              </>
            ))}
          </section>
          {index + 1 !== tables.length && <hr className={styles.hr} />}
        </>
      ))}
    </section>
  );
};
