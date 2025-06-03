import { ChangeEvent, FC, useEffect, useState } from 'react';
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
import { InfoModal } from '@/shared/ui/modals';
import { isMobile } from 'react-device-detect';
import { useIntl } from 'react-intl';

export const UserCollectionModal: FC<TModalProps & { id: string; token: string }> = ({
  onClose,
  open,
  anchor,
  onOpen,
  id,
  token,
}) => {
  const { formatMessage } = useIntl();
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
    if (open) {
      estateCollectionApi
        .getEstateCollection(token!!)
        .then((r) => {
          setIsNew(r.data.items.length == 0);
          setCollections(r.data.items);
          console.log(r.data.items.length, isNew, collections);
        })
        .catch((e) => console.log(e));
    }
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
        setInfoTitle(formatMessage({ id: 'project_add' }));
        setInfoText(formatMessage({ id: 'project_add_info' }).replace('ss', name));
        handleOpenInfoModal();
      })
      .catch((e) => console.log(e));
  };

  const select = (values: EstateCollection[]) => {
    console.log(values);
    setCollectionId(values[0].id);
    setName(values[0].name);
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
              {formatMessage({ id: 'add_to_collection' })}
            </Text>
            <Spacer width="100%" height={8} />
            {isNew ? (
              <>
                <BaseField
                  onChange={onChangeName}
                  value={name}
                  name="name"
                  label={formatMessage({ id: 'collection_name' })}
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
        <StyledButton
          style={{
            backgroundColor: '#04b0be',
            borderRadius: '200px',
          }}
          variant="contained"
          size="medium"
          onClick={addToCollection}
        >
          {formatMessage({ id: 'add' })}
        </StyledButton>
        <Spacer width="100%" height={8} />
        {isNew ? (
          <></>
        ) : (
          <StyledButton
            style={{
              backgroundColor: '#04b0be',
              borderRadius: '200px',
            }}
            variant="contained"
            size="medium"
            onClick={handleIsNew}
          >
            {formatMessage({ id: 'create_new' })}
          </StyledButton>
        )}
      </StyledSwipeableDrawer>
      <InfoModal setOpen={setInfoModal} open={infoModal} title={infoTitle} text={infoText} />
    </>
  );
};

export const SelectProps = {
  width: '35vw',
  borderRadius: 5,
  height: '7vh',
};
