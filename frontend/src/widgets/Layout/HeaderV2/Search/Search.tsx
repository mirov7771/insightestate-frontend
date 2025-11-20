import React, {
  ChangeEvent,
  FC,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './Search.module.scss';
import { IconPlus, IconSearch } from '@/shared/assets/icons';
import { Button, Input, Modal, ModalAddToCollection, Text } from '@/shared/ui';
import { Estate, filterApi } from '@/widgets/Filter/api/filterApi';
import { useStatus } from '@/shared/utils/useStatus';
import { debounce } from '@/shared/utils';
import { FormattedMessage, useIntl } from 'react-intl';
import CircularProgress from '@mui/material/CircularProgress';
import { DEFAULT_IMG } from '@/entities/Card/Card';
import { useWindowResize } from '@/shared/utils/useWindowResize';

export const Search: FC = () => {
  const { formatMessage } = useIntl();
  const { status, setStatus } = useStatus();
  const { width } = useWindowResize();
  const [userCollectionModal, setUserCollectionModal] = useState(false);
  const [estateId, setEstateId] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [estates, setEstates] = useState<Estate[]>([]);
  const [search, setSearch] = useState('');
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Функция поиска (заглушка – замени на реальный вызов)
  const searchEstatesByName = useCallback(async (name: string) => {
    return filterApi.getEstate({ name });
  }, []);

  // Дебаунсер обёрнут в useRef — живёт на протяжении жизни компонента, не пересоздаётся
  const debouncedSearchRef = useRef(
    debounce(async (query: string) => {
      if (query.length >= 3) {
        setStatus('LOADING');
        try {
          const { data } = await searchEstatesByName(query);

          setEstates(data.items.slice(0, 12));
          setStatus('SUCCESS');
        } catch {
          setStatus('ERROR');
        }
      } else {
        setEstates([]);
        setStatus('IDLE');
      }
    }, 500)
  );

  const navigateToEstate = (id: string) => {
    window.open(`/property/${id}`, '_blank', 'noopener,noreferrer');
  };

  const handleAdd =
    (id: string): MouseEventHandler<HTMLButtonElement> =>
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setUserCollectionModal(true);
      setEstateId(id);
    };

  useEffect(() => {
    debouncedSearchRef.current(search);
  }, [search]);

  const currency = localStorage.getItem('currency') || '฿'

  return (
    <>
      <Button
        className={styles.search}
        icon={<IconSearch />}
        variant="text"
        size="s"
        onClick={handleOpen}
      />
      <Modal
        dialogProps={{
          open,
          onClose: handleClose,
          classes: { paper: styles.container, container: styles.dialog_container },
          fullWidth: width <= 992,
        }}
        withCloseIcon={width <= 992}
      >
        <div className={styles.inner}>
          <Input
            className={styles.input}
            icon={<IconSearch />}
            placeholder={formatMessage({ id: 'search.objects' })}
            value={search}
            onChange={handleChange}
          />
          <div
            className={`${styles.content} ${!estates.length || status === 'IDLE' || status === 'LOADING' ? styles.content_center : ''}`}
          >
            {status === 'LOADING' && <CircularProgress size={32} className={styles.loader} />}
            {!!estates.length &&
              status === 'SUCCESS' &&
              estates.map((estate) => (
                <div
                  className={styles.estate}
                  onClick={() => navigateToEstate(estate.id)}
                  key={estate.id}
                >
                  <div className={styles.estate__wrapper}>
                    <div className={styles.estate__img}>
                      <img
                        src={
                          estate.exteriorImages?.[0] ||
                          estate.facilityImages?.[0] ||
                          estate.interiorImages?.[0] ||
                          DEFAULT_IMG
                        }
                        loading="lazy"
                        alt={estate.name}
                      />
                    </div>
                    <div className={styles.estate__content}>
                      <Text variant="body1" bold>
                        {estate.name}
                      </Text>
                        {estate.priceMin < 90 ?
                            <Text variant="body2" className={styles.description}>
                                {`${formatMessage({ id: 'sold_out' })} • ${estate.city}, ${estate.beach}`}
                            </Text>
                            :
                      <Text variant="body2" className={styles.description}>
                        {`${formatMessage({ id: 'from' })} ${Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: currency === '₽' ? 'RUB' : (currency === '฿' ? 'THB' : (currency === 'A$' ? 'AUD' :'USD')),
                          currencyDisplay: 'narrowSymbol',  
                          maximumFractionDigits: 0,
                        }).format(estate.priceMin)} • ${estate.city}, ${estate.beach}`}
                      </Text>
                        }
                    </div>
                  </div>
                  {estate.collectionCount === 0 ? (
                    <Button
                      icon={<IconPlus />}
                      className={`${styles.estate__button} ${styles.estate__button_primary}`}
                      onClick={handleAdd(estate.id)}
                    />
                  ) : (
                    <Button
                      variant="base"
                      className={`${styles.estate__button}`}
                      onClick={handleAdd(estate.id)}
                    >
                      {estate.collectionCount}
                    </Button>
                  )}
                </div>
              ))}
            {status === 'IDLE' && (
              <>
                <Text align="center" variant="heading4">
                  {formatMessage({ id: 'search.empty' })}
                </Text>
                <Text align="center" variant="body1" className={styles.description}>
                  {formatMessage({ id: 'search.emptyDescription' })}
                </Text>
              </>
            )}
            {status === 'SUCCESS' && estates.length === 0 && (
              <>
                <Text align="center" variant="heading4">
                  {formatMessage({ id: 'search.noObjects' })}
                </Text>
                <Text align="center" variant="body1" className={styles.description}>
                  <FormattedMessage
                    id="search.noObjectsDescription"
                    values={{ br: () => <br /> }}
                  />
                </Text>
              </>
            )}
          </div>
        </div>
        <ModalAddToCollection
          open={userCollectionModal}
          setOpen={setUserCollectionModal}
          estateId={estateId}
        />
      </Modal>
    </>
  );
};
