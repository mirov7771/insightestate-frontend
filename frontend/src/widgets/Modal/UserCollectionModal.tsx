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
import { InfoModal } from '@/widgets/Modal/InfoModal';
import { isMobile } from 'react-device-detect';
import { localField } from '@/i18n/localField';

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
  const [infoModal, setInfoModal] = useState(false);
  const [infoTitle, setInfoTitle] = useState('');
  const [infoText, setInfoText] = useState('');
  const handleOpenInfoModal = () => {
    setInfoModal(true);
  };
  const handleCloseInfoModal = () => {
    setInfoModal(false);
  };

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
    setIsNew(false);
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
        setInfoTitle(localField('project_add'));
        setInfoText(localField('project_add_info'));
        handleOpenInfoModal();
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
        isMobile={isMobile}
      >
        <StyledUpperWrapperProgress>
          <StyledWrapperProgress>
            <Spacer width="100%" height={8} />
            <Spacer width="100%" height={8} />
            <Text size="xl" align="center" colorTheme={'black200'} isBold>
              {localField('add_to_collection')}
            </Text>
            <Spacer width="100%" height={8} />
            {isNew ? (
              <>
                <BaseField
                  onChange={onChangeName}
                  value={name}
                  name="name"
                  label={localField('collection_name')}
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
          {localField('add')}
        </StyledButton>
        <Spacer width="100%" height={8} />
        {isNew ? (
          <></>
        ) : (
          <StyledButton color="secondary" variant="contained" size="medium" onClick={handleIsNew}>
            {localField('create_new')}
          </StyledButton>
        )}
      </StyledSwipeableDrawer>
      <InfoModal
        open={infoModal}
        onClose={handleCloseInfoModal}
        onOpen={handleOpenInfoModal}
        anchor="bottom"
        title={infoTitle}
        text={infoText}
        bottom={30}
      />
    </>
  );
};

export const SelectProps = {
  width: '35vw',
  borderRadius: 5,
  height: '7vh',
};
