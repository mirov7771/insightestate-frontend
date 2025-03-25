import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { TModalProps } from './types';
import {
  StyledSwipeableDrawer,
  StyledWrapperProgress,
  StyledUpperWrapperProgress,
  StyledButton,
} from './styled';
import { Spacer } from '../Spacer/Spacer';
import { Text } from '../Text/Text';
import { BaseField } from '@/widgets/BaseField/BaseField';
import {
  EstateCollection,
  estateCollectionApi,
} from '@/widgets/EstateCollection/api/estateCollectionApi';
import Select from 'react-dropdown-select';

export const UserCollectionModal: FC<TModalProps & { id: string; token: string }> = ({
  onClose,
  open,
  anchor,
  onOpen,
  id,
  token,
}) => {
  const [isNew, setIsNew] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [collectionId, setCollectionId] = useState<string>('');
  const [collections, setCollections] = useState<EstateCollection[]>();

  useEffect(() => {
    estateCollectionApi
      .getEstateCollection(token!!)
      .then((r) => {
        setIsNew(r.data.items.length === 0);
        setCollections(r.data.items);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    setIsNew(false)
  }, [open]);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleIsNew = () => {
    setIsNew(true);
  };

  const addToCollection = (e: ChangeEvent) => {
    if (isNew) {
      estateCollectionApi
        .createCollection(token!!, name)
        .then((r) => {
          setCollectionId(r.data.id);
          addItemToCollection(r.data.id, id!!);
        })
        .catch((e) => console.log(e))
        .finally(() => onClose(e));
    } else {
      addItemToCollection(collectionId, id!!);
      onClose(e);
    }
  };

  const addItemToCollection = (id: string, estateId: string) => {
    estateCollectionApi
      .addToCollection(token!!, id, estateId)
      .then((r) => {
        alert(
          'Объект добавлен.\n\nОбъект успешно добавлен в подборку, перейдите в раздел «Мои подборки» чтобы посмотреть все объекты и сформировать оффер.'
        );
        console.log(r);
      })
      .catch((e) => console.log(e));
  };

  const select = (values: EstateCollection[]) => {
    console.log(values);
    setCollectionId(values[0].id);
  };

  return (
    <>
      <StyledSwipeableDrawer
        onOpen={onOpen}
        open={open}
        onClose={onClose}
        anchor={anchor}
        disableSwipeToOpen
        bottom={40}
      >
        <StyledUpperWrapperProgress>
          <StyledWrapperProgress>
            <Spacer width="100%" height={8} />
            <Spacer width="100%" height={8} />
            <Text size="xl" align="center" colorTheme={'black200'} isBold>
              Добавить в подборку
            </Text>
            <Spacer width="100%" height={8} />
            {isNew ? (
              <>
                <BaseField
                  onChange={onChangeName}
                  value={name}
                  name="name"
                  label="Название подборки"
                />
              </>
            ) : (
              <>
                <Select
                  options={collections!!}
                  values={collections!!}
                  labelField="name"
                  valueField="id"
                  closeOnSelect={true}
                  onChange={select}
                  style={SelectProps}
                />
              </>
            )}
          </StyledWrapperProgress>
        </StyledUpperWrapperProgress>
        <Spacer width="100%" height={24} />
        <StyledButton color="secondary" variant="contained" size="medium" onClick={addToCollection}>
          Добавить
        </StyledButton>
        <Spacer width="100%" height={8} />
        {isNew ? (
          <></>
        ) : (
          <StyledButton color="secondary" variant="contained" size="medium" onClick={handleIsNew}>
            Создать новую
          </StyledButton>
        )}
      </StyledSwipeableDrawer>
    </>
  );
};

export const SelectProps = {
  width: '35vw',
  borderRadius: 5,
  height: '7vh',
};
