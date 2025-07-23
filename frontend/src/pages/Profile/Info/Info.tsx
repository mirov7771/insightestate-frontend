import {
  Dispatch,
  FC,
  FormEventHandler,
  HTMLInputTypeAttribute,
  SetStateAction,
  useState,
} from 'react';
import { Button, Input, PhoneInput, SelectCountry, Text } from '@/shared/ui';
import styles from './Info.module.scss';
import { useIntl } from 'react-intl';
import { TData } from '../types';

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

  const renderInputField = () => {
    switch (dataKey) {
      case 'location': {
        return (
          <SelectCountry
            onChange={(_, val) => setVal(val as string)}
            value={val}
            aria-placeholder={name}
            label={name}
          />
        );
      }
      case 'phone':
      case 'whatsUp': {
        return <PhoneInput value={val} onChange={(e) => setVal(e)} label={name} />;
      }
      default: {
        return (
          <Input
            type={inputType}
            label={name}
            onChange={(e) => setVal(e.target.value)}
            value={val}
          />
        );
      }
    }
  };

  return (
    <div className={styles.layout}>
      {!editMode && (
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <Text variant="heading5">{name}</Text>
            <Text className={styles.content__value} variant="body1">
              {dataKey === 'password'
                ? '********'
                : val || formatMessage({ id: 'common.notAdded' })}
            </Text>
          </div>
          <Button variant="base" onClick={handleToggleEditClick} disabled={isLoading}>
            <Text variant="body1" bold>
              {val || dataKey === 'password'
                ? formatMessage({ id: 'common.edit' })
                : formatMessage({ id: 'common.add' })}
            </Text>
          </Button>
        </div>
      )}
      {editMode && (
        <form onSubmit={onSubmit} className={styles.form}>
          {renderInputField()}
          <div className={styles.form__buttons}>
            <Button type="submit" onSubmit={onSubmit} size="s" loading={isLoading}>
              <Text variant="body1" bold>
                {formatMessage({ id: 'common.save' })}
              </Text>
            </Button>
            <Button onClick={handleToggleEditClick} size="s" variant="base" disabled={isLoading}>
              <Text variant="body1" bold>
                {formatMessage({ id: 'common.cancel' })}
              </Text>
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
