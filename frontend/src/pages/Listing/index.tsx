import { FC, useEffect, useRef, useState } from 'react';
import styles from './Listing.module.scss';
import { Filter } from '@/widgets/Filter/Filter';
import { Button, Pagination, Text } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { InfoModal } from '@/shared/ui/modals';
import { CardSlide } from '@/entities/CardSlide/CardSlide';
import { IconAdjustmentsFilter, IconArrowLeft } from '@/shared/assets/icons';
import Divider from '@mui/material/Divider';
import { FastFilter } from '@/widgets/FastFilter/FastFilter';
import { City } from '@/widgets/Filter/City';
import { PropertyType } from '@/widgets/Filter/PropertyType';
import { CompletionDate } from '@/widgets/Filter/CompletionDate';
import { NumberOfBedrooms } from '@/widgets/Filter/NumberOfBedrooms';
import { Potential } from '@/widgets/Filter/Potential';
import { Beach } from '@/widgets/Filter/Beach';
import { useSearchParams } from 'react-router';
import { isMobile } from 'react-device-detect';
import { Region } from '@/widgets/Filter/Region';
import { Price } from '@/widgets/Filter/Price';
import {Developer} from "@/widgets/Filter/Developer";

const SCROLL_AMOUNT = 250;

const Listing: FC = () => {
  const { formatMessage } = useIntl();
  const {
    setFilters,
    pageNumber,
    estates,
    totalPages,
    totalCount,
    hasMore,
    loading,
    countActiveFilters,
  } = useFilters();
  const token = localStorage.getItem('basicToken');
  const [openFilters, setOpenFilters] = useState(false);

  const [infoModal, setInfoModal] = useState(false);
  const [infoTitle, setInfoTitle] = useState('');
  const infoText = formatMessage({ id: 'listing.info' });
  const [searchParams, setSearchParams] = useSearchParams();
  const filtersScrollRef = useRef<HTMLDivElement>(null);
  const scrollFiltersRight = () => {
    if (filtersScrollRef.current) {
      filtersScrollRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
    }
  };
  const scrollFiltersLeft = () => {
    if (filtersScrollRef.current) {
      filtersScrollRef.current.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
    }
  };

  const handleOpenInfoModal = () => {
    setInfoModal(true);
  };
  const handleCloseInfoModal = () => {
    setInfoModal(false);
  };

  useEffect(() => {
    const onboarding = localStorage.getItem('onboarding');

    if (!onboarding) {
      localStorage.setItem('onboarding', 'showed');
      handleOpenInfoModal();
    }

    setFilters((filtersState) => ({
      ...filtersState,
      pageNumber: parseInt(searchParams.get('page') || '0'),
    }));
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={isMobile ? styles.header_mobile : styles.header}>
        <div className={styles.filters__wrapper}>
          <Button
            className={styles.button}
            variant="base"
            size="s"
            onClick={() => setOpenFilters(true)}
          >
            <IconAdjustmentsFilter />
            {!!countActiveFilters && (
              <Text variant="caption1" className={styles.button__counter}>
                {countActiveFilters}
              </Text>
            )}
          </Button>
          <Divider orientation="vertical" flexItem />
          <div className={styles.filters}>
            <div className={styles.filters__scroll} ref={filtersScrollRef}>
              <FastFilter
                filter={<Price />}
                name={formatMessage({ id: 'price' })}
                filterName="price"
              />
              <FastFilter
                filter={<City />}
                name={formatMessage({ id: 'city' })}
                filterName="city"
              />
              <FastFilter
                filter={<Region />}
                name={formatMessage({ id: 'region' })}
                filterName="beachName"
              />
              <FastFilter
                filter={<PropertyType />}
                name={formatMessage({ id: 'type_of_place' })}
                filterName="types"
              />
              <FastFilter
                filter={<CompletionDate />}
                name={formatMessage({ id: 'completion_date' })}
                filterName="buildEndYears"
              />
              <FastFilter
                filter={<NumberOfBedrooms />}
                name={formatMessage({ id: 'number_of_bedrooms' })}
                filterName="rooms"
              />
              <FastFilter
                filter={<Potential />}
                name={formatMessage({ id: 'potential' })}
                filterName="grades"
              />
              <FastFilter
                filter={<Beach />}
                name={formatMessage({ id: 'beach_time' })}
                filterName="beachTravelTimes"
              />
              <FastFilter
                  filter={<Developer />}
                  name={formatMessage({ id: 'developer' })}
                  filterName="developer"
              />
              {/*<FastFilter*/}
              {/*  filter={<Airport />}*/}
              {/*  name={formatMessage({ id: 'airport_time' })}*/}
              {/*  filterName="airportTravelTimes"*/}
              {/*/>*/}
            </div>
            <div className={styles.filters__arrow} onClick={scrollFiltersRight}>
              <IconArrowLeft />
            </div>
          </div>
        </div>
      </div>
      <Filter open={openFilters} setOpen={setOpenFilters} />
      <div className={styles.layout}>
        <main className={isMobile ? styles.main_mobile : styles.main}>
          {!loading && !estates.length && (
            <Text variant="heading5">{formatMessage({ id: 'not_found' })}</Text>
          )}
          {!!estates.length &&
            estates.map((estate) => (
              <div>
                <CardSlide estate={estate} token={token} loading={loading} clickable />
              </div>
            ))}
        </main>
      </div>
      {!!totalCount && (
        <div className={styles.pagination}>
          <Pagination
            onChangePage={(_, page) => {
              setFilters((filtersState) => ({
                ...filtersState,
                pageNumber: page - 1,
              }));
              setSearchParams((params) => {
                params.set('page', page - 1 + '');
                return params;
              });
            }}
            totalPages={totalPages}
            pageNumber={(pageNumber as number) + 1}
          />
        </div>
      )}
      <InfoModal setOpen={setInfoModal} open={infoModal} title={infoTitle} text={infoText} />
    </div>
  );
};

export default Listing;
