import React, { FC, FormEventHandler, ReactNode } from 'react';
import styles from './LayoutForm.module.scss';
import { LogoIcon } from '@/shared/assets/icons';
import { Text } from '@/shared/ui';

type LayoutFormProps = {
  form: ReactNode;
  header: string;
  onSubmit: FormEventHandler<HTMLButtonElement | HTMLFormElement>;
  bottomText?: string | ReactNode;
  headerHint?: string | ReactNode;
};

export const LayoutForm: FC<LayoutFormProps> = ({
  header,
  headerHint,
  onSubmit,
  form,
  bottomText,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <LogoIcon />
      </div>
      <Text variant="heading2" align="center" className={styles.header}>
        {header}
      </Text>
      {headerHint && (
        <Text variant="body1" as="p" align="center" className={styles.description}>
          {headerHint}
        </Text>
      )}
      <form className={styles.form} onSubmit={onSubmit}>
        {form}
      </form>
      {bottomText}
    </div>
  );
};
