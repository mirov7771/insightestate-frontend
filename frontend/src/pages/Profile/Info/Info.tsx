import {
  Dispatch,
  FC,
  FormEventHandler,
  HTMLInputTypeAttribute,
  SetStateAction,
  useState,
} from 'react';
import { Button, Input, Text } from '@/shared/ui';
import styles from './Info.module.scss';
import { useIntl } from 'react-intl';

type TData = {
  email: string;
  location: string;
  password: string;
  phone: string;
  profileImage: string;
  tgName: string;
  username: string;
  whatsUp: string;
};

type InfoProps = {
  data: TData;
  dataKey: keyof TData;
  handleProfileUpdate: (data: TData) => Promise<void>;
  isLoading: boolean;
  name: string;
  setData: Dispatch<SetStateAction<TData>>;
  inputType?: HTMLInputTypeAttribute;
  value?: string;
};

export const Info: FC<InfoProps> = ({
  name,
  value,
  inputType = 'text',
  setData,
  dataKey,
  handleProfileUpdate,
  data,
  isLoading,
}) => {
  const { formatMessage } = useIntl();
  const [val, setVal] = useState(value || '');
  const [editMode, setEditMode] = useState(false);
  const handleToggleEditClick = () => {
    setEditMode(!editMode);
  };

  const onSubmit: FormEventHandler<HTMLButtonElement | HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      await handleProfileUpdate({ ...data, [dataKey]: val });
      setData((prev) => ({ ...prev, [dataKey]: val }));
      handleToggleEditClick();
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <div className={styles.layout}>
      {!editMode && (
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <Text variant="heading4">{name}</Text>
            <Text className={styles.content__value} variant="body1">
              {dataKey === 'password'
                ? '********'
                : val || formatMessage({ id: 'common.notAdded' })}
            </Text>
          </div>
          <Button variant="base" onClick={handleToggleEditClick} disabled={isLoading}>
            <Text variant="heading5">
              {val || dataKey === 'password'
                ? formatMessage({ id: 'common.edit' })
                : formatMessage({ id: 'common.add' })}
            </Text>
          </Button>
        </div>
      )}
      {editMode && (
        <form onSubmit={onSubmit} className={styles.form}>
          <Input
            type={inputType}
            label={name}
            onChange={(e) => setVal(e.target.value)}
            value={val}
          />
          <div className={styles.form__buttons}>
            <Button type="submit" onSubmit={onSubmit} size="s" loading={isLoading}>
              <Text variant="heading5">{formatMessage({ id: 'common.save' })}</Text>
            </Button>
            <Button onClick={handleToggleEditClick} size="s" variant="base" disabled={isLoading}>
              <Text variant="heading5">{formatMessage({ id: 'common.cancel' })}</Text>
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
