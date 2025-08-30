import { ChangeEvent, FC, ReactElement, useMemo, useState } from 'react';
import styles from './WideFilters.module.scss';
import { Input, Text } from '@/shared/ui';
import Slider from '@mui/material/Slider';
import { FormattedMessage } from 'react-intl';
import { useUnitsFilters } from '@/pages/EstateDetail/Units/UnitsContext';
import { UnitsFiltersParams } from '@/shared/api/units';
import { debounce } from '@/shared/utils';

type FilterSliderProps = {
  filterName: string | ReactElement;
  maxPlaceholder: string;
  maxValue: number;
  maxValueName: Exclude<keyof UnitsFiltersParams, 'orderBy' | 'rooms'>;
  minPlaceholder: string;
  minValue: number;
  minValueName: Exclude<keyof UnitsFiltersParams, 'orderBy' | 'rooms'>;
};

export const FilterSlider: FC<FilterSliderProps> = ({
  filterName,
  minPlaceholder,
  maxPlaceholder,
  minValue,
  minValueName,
  maxValueName,
  maxValue,
}) => {
  const { filtersParams, setFiltersParams } = useUnitsFilters();
  const [value, setValue] = useState([
    filtersParams[minValueName] || '',
    filtersParams[maxValueName] || '',
  ]);
  const handleDebounceSetFiltersParams = useMemo(
    () =>
      debounce(
        (val: number | undefined, param: typeof maxValueName | typeof maxValueName) =>
          setFiltersParams((prev) => ({ ...prev, [param]: val })),
        500
      ),
    [setFiltersParams]
  );

  const handleChange = (event: Event, newValue: number[] | number, activeThumb: number) => {
    if (Array.isArray(newValue)) {
      const changedValue = newValue[activeThumb];

      setValue((prevState) =>
        activeThumb === 0 ? [changedValue, prevState[1]] : [prevState[0], changedValue]
      );
      handleDebounceSetFiltersParams(changedValue, activeThumb === 0 ? minValueName : maxValueName);
    }
  };

  const handleInputChange = (index: 0 | 1) => (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value === '' ? '' : Number(event.target.value);
    const filterVal = val === '' ? undefined : val;

    if (index === 0) {
      setValue((prev) => [val, prev[1]]);
      handleDebounceSetFiltersParams(filterVal, minValueName);
    } else {
      setValue((prev) => [prev[0], val]);
      handleDebounceSetFiltersParams(filterVal, maxValueName);
    }
  };

  const handleReset = () => {
    setValue(['', '']);
  };

  return (
    <div className={styles.rooms}>
      <div className={styles.rooms__header}>
        <Text variant="heading5">{filterName}</Text>
        {!!(value[0] || value[1]) && (
          <Text variant="body1" bold className={styles.reset} onClick={handleReset}>
            <FormattedMessage id="units.filter.wide.reset" />
          </Text>
        )}
      </div>
      <div className={styles.rooms__container}>
        <div>
          <div className={styles.inputs}>
            <Input
              placeholder={minPlaceholder}
              onChange={handleInputChange(0)}
              name={minValueName}
              type="number"
              value={value[0]}
            />
            <Input
              placeholder={maxPlaceholder}
              onChange={handleInputChange(1)}
              name={maxValueName}
              type="number"
              value={value[1]}
            />
          </div>
          <Slider
            className={styles.slider}
            classes={{ thumb: styles.thumb, track: styles.track, rail: styles.track }}
            onChange={handleChange}
            value={[
              typeof value[0] === 'string' ? minValue : value[0],
              typeof value[1] === 'string' ? maxValue : value[1],
            ]}
            min={minValue}
            max={maxValue}
          />
        </div>
      </div>
    </div>
  );
};
