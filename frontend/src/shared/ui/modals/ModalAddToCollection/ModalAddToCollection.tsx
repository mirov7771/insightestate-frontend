import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import styles from './ModalAddToCollection.module.scss';
import { Button, Modal, Text, Select, Input } from '@/shared/ui';
import { useIntl } from 'react-intl';
import {
  EstateCollection,
  estateCollectionApi,
} from '@/widgets/EstateCollection/api/estateCollectionApi';
import { useStatus } from '@/shared/utils/useStatus';
import { InfoModal } from '@/shared/ui/modals';

type ModalAddToCollectionProps = {
  estateId: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  unitId?: string;
};

export const ModalAddToCollection: FC<ModalAddToCollectionProps> = ({
  open,
  setOpen,
  estateId,
  unitId,
}) => {
  const { formatMessage } = useIntl();
  const [name, setName] = useState('');
  const { status, setStatus } = useStatus();
  const handleCloseModal = () => {
    setOpen(false);
  };
  const [selectValue, setSelectValue] = useState('');
  const [isAddNewCollection, setIsAddNewColeection] = useState(false);
  const [collectionId, setCollectionId] = useState<string>('');
  const [collections, setCollections] = useState<EstateCollection[]>();
  const [infoModal, setInfoModal] = useState(false);
  const [infoTitle, setInfoTitle] = useState('');
  const [infoText, setInfoText] = useState('');
  const token = localStorage.getItem('basicToken') || '';
  const handleOpenInfoModal = () => {
    setInfoModal(true);
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleToggleAddNewCollection = () => {
    setIsAddNewColeection((prev) => !prev);
  };

  const addItemToCollection = (collectionId: string, estateId: string, unitId?: string) => {
    setStatus('LOADING');
    estateCollectionApi
      .addToCollection(token!!, collectionId, estateId, unitId)
      .then(() => {
        setInfoTitle(formatMessage({ id: 'project_add' }));
        setInfoText(formatMessage({ id: 'project_add_info' }).replace('ss', name));
        setOpen(false);
        handleOpenInfoModal();
        setStatus('SUCCESS');
      })
      .catch((e) => {
        setStatus('ERROR');
        console.log(e);
      });
  };

  const addToCollection = () => {
    if (isAddNewCollection) {
      setStatus('LOADING');
      estateCollectionApi
        .createCollection(token!!, name)
        .then((r) => {
          addItemToCollection(r.data.id, estateId, unitId);
        })
        .catch((e) => {
          setStatus('ERROR');
          console.log(e);
        });
    } else {
      addItemToCollection(collectionId, estateId, unitId);
    }
  };

  useEffect(() => {
    if (open) {
      setStatus('LOADING');
      estateCollectionApi
        .getEstateCollection(token)
        .then(({ data }) => {
          if (!!data.items.length) {
            setCollections(data.items);
            setCollectionId(data.items[0].id);
          } else {
            setIsAddNewColeection(true);
          }
          setStatus('SUCCESS');
        })
        .catch((e) => {
          console.log(e);
          setStatus('ERROR');
        });
    }
  }, [open, token]);

  return (
    <>
      <Modal
        dialogProps={{
          open,
          maxWidth: 'md',
          fullWidth: true,
          onClose: () => handleCloseModal(),
        }}
      >
        <div className={styles.container}>
          <Text variant="heading4">Add to selection</Text>
          {isAddNewCollection ? (
            <>
              <Input placeholder="Insert collection name" value={name} onChange={onChangeName} />
              <div className={styles.buttons}>
                <Button variant="base" disabled={status === 'LOADING'}>
                  <Text variant="body1" onClick={handleToggleAddNewCollection} bold>
                    {formatMessage({ id: 'common.back' })}
                  </Text>
                </Button>
                <Button onClick={addToCollection} loading={status === 'LOADING'}>
                  <Text variant="body1" bold>
                    {formatMessage({ id: 'common.add' })}
                  </Text>
                </Button>
              </div>
            </>
          ) : (
            <>
              <Select
                options={collections?.map(({ id, name }) => ({ id, name })) || []}
                onChange={(e) => setSelectValue(e.target.value)}
                value={selectValue}
                disabled={status === 'LOADING'}
              />
              <div className={styles.buttons}>
                <Button variant="base" disabled={status === 'LOADING'}>
                  <Text variant="body1" onClick={handleToggleAddNewCollection} bold>
                    {formatMessage({ id: 'create_new' })}
                  </Text>
                </Button>
                <Button onClick={addToCollection} loading={status === 'LOADING'}>
                  <Text variant="body1" bold>
                    {formatMessage({ id: 'add' })}
                  </Text>
                </Button>
              </div>
            </>
          )}
        </div>
      </Modal>
      <InfoModal setOpen={setInfoModal} open={infoModal} title={infoTitle} text={infoText} />
    </>
  );
};
