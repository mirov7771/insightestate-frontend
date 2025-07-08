import { ChangeEvent, FC, useEffect, useState } from 'react';
import styles from './Filter.module.scss';
import { Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { FilterLayout } from '@/widgets/Filter/FilterLayout';
import { useSearchParams } from 'react-router';

export const Region: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, beachName, city } = useFilters();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => ({
      ...filtersState,
      pageNumber: 0,
      beachName: filtersState.beachName?.includes(e.target.value)
        ? filtersState.beachName?.filter((val) => val !== e.target.value)
        : [...(filtersState.beachName || []), e.target.value],
    }));
    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
  };

  const handleReset = () => {
    setFilters((filtersState) => ({
      ...filtersState,
      pageNumber: 0,
      beachName: [],
    }));
    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
  };

  useEffect(() => {
    console.log('city', city);
  }, [city]);

  return (
    <FilterLayout
      name={formatMessage({ id: 'region' })}
      isActiveFilter={!!beachName?.length}
      onResetFilter={handleReset}
      filter={
        <div className={`${styles.content} ${styles.content__border}`}>
          {city?.includes('Phuket') || city?.length === 0 ? (
            <>
              <Checkbox
                  name="beachName"
                  value="Patong"
                  onChange={handleClick}
                  checked={beachName?.includes('Patong')}
                  label="Patong"
              />
              <Checkbox
                name="beachName"
                value="Kata"
                onChange={handleClick}
                checked={beachName?.includes('Kata')}
                label="Kata"
              />
              <Checkbox
                name="beachName"
                value="Mai Khao"
                onChange={handleClick}
                checked={beachName?.includes('Mai Khao')}
                label="Mai Khao"
              />
              <Checkbox
                name="beachName"
                value="Layan"
                onChange={handleClick}
                checked={beachName?.includes('Layan')}
                label="Layan"
              />
              <Checkbox
                name="beachName"
                value="Bang Tao"
                onChange={handleClick}
                checked={beachName?.includes('Bang Tao')}
                label="Bang Tao"
              />
              <Checkbox
                name="beachName"
                value="Rawai"
                onChange={handleClick}
                checked={beachName?.includes('Rawai')}
                label="Rawai"
              />
              <Checkbox
                name="beachName"
                value="Kamala"
                onChange={handleClick}
                checked={beachName?.includes('Kamala')}
                label="Kamala"
              />
              <Checkbox
                name="beachName"
                value="Naithon"
                onChange={handleClick}
                checked={beachName?.includes('Naithon')}
                label="Naithon"
              />
              <Checkbox
                name="beachName"
                value="Karon"
                onChange={handleClick}
                checked={beachName?.includes('Karon')}
                label="Karon"
              />
              <Checkbox
                name="beachName"
                value="Surin"
                onChange={handleClick}
                checked={beachName?.includes('Surin')}
                label="Surin"
              />
              <Checkbox
                name="beachName"
                value="Nai Yang"
                onChange={handleClick}
                checked={beachName?.includes('Nai Yang')}
                label="Nai Yang"
              />
              <Checkbox
                name="beachName"
                value="Nai Harn"
                onChange={handleClick}
                checked={beachName?.includes('Nai Harn')}
                label="Nai Harn"
              />
              <Checkbox
                name="beachName"
                value="Ao Yon"
                onChange={handleClick}
                checked={beachName?.includes('Ao Yon')}
                label="Ao Yon"
              />
            </>
          ) : (
            <></>
          )}
          {city?.includes('Bangkok') || city?.length === 0 ? (
            <>
              <Checkbox
                name="beachName"
                value="Thong Lo BTS"
                onChange={handleClick}
                checked={beachName?.includes('Thong Lo BTS')}
                label="Thong Lo BTS"
              />
              <Checkbox
                name="beachName"
                value="Chong Nonsi BTS"
                onChange={handleClick}
                checked={beachName?.includes('Chong Nonsi BTS')}
                label="Chong Nonsi BTS"
              />
              <Checkbox
                name="beachName"
                value="Chit Lom BTS"
                onChange={handleClick}
                checked={beachName?.includes('Chit Lom BTS')}
                label="Chit Lom BTS"
              />
              <Checkbox
                name="beachName"
                value="MRT Lumpini"
                onChange={handleClick}
                checked={beachName?.includes('MRT Lumpini')}
                label="MRT Lumpini"
              />
              <Checkbox
                name="beachName"
                value="Ratchathewi BTS"
                onChange={handleClick}
                checked={beachName?.includes('Ratchathewi BTS')}
                label="Ratchathewi BTS"
              />
              <Checkbox
                name="beachName"
                value="Phaya Thai BTS"
                onChange={handleClick}
                checked={beachName?.includes('Phaya Thai BTS')}
                label="Phaya Thai BTS"
              />
              <Checkbox
                name="beachName"
                value="Charoen Nakorn BTS"
                onChange={handleClick}
                checked={beachName?.includes('Charoen Nakorn BTS')}
                label="Charoen Nakorn BTS"
              />
              <Checkbox
                name="beachName"
                value="Ari BTS"
                onChange={handleClick}
                checked={beachName?.includes('Ari BTS')}
                label="Ari BTS"
              />
            </>
          ) : (
            <></>
          )}
          {city?.includes('Pattaya') || city?.length === 0 ? (
            <>
              <Checkbox
                name="beachName"
                value="Dong Tarn"
                onChange={handleClick}
                checked={beachName?.includes('Dong Tarn')}
                label="Dong Tarn"
              />
              <Checkbox
                name="beachName"
                value="Pratumnak"
                onChange={handleClick}
                checked={beachName?.includes('Pratumnak')}
                label="Pratumnak"
              />
              <Checkbox
                name="beachName"
                value="Jomtien"
                onChange={handleClick}
                checked={beachName?.includes('Jomtien')}
                label="Jomtien"
              />
              <Checkbox
                name="beachName"
                value="Pattaya"
                onChange={handleClick}
                checked={beachName?.includes('Pattaya')}
                label="Pattaya"
              />
              <Checkbox
                name="beachName"
                value="Wong Amat"
                onChange={handleClick}
                checked={beachName?.includes('Wong Amat')}
                label="Wong Amat"
              />
            </>
          ) : (
            <></>
          )}
        </div>
      }
    />
  );
};
