import { ChangeEvent, FC, useState } from 'react';
import styles from './WideFilters.module.scss';
import { Input, Text } from '@/shared/ui';
import Slider from '@mui/material/Slider';

const MIN = 0;
const MAX = 100;

const setDefaultValue = (val: number | string, defaultVal: 'min' | 'max') => {
  if (typeof val === 'number') {
    if (val < MIN) {
      return MIN;
    }
    if (val > MAX) {
      return MAX;
    }
    return val;
  }

  return defaultVal === 'min' ? MIN : MAX;
};

type FilterSliderProps = {
  filterName: string;
  maxPlaceholder: string;
  maxValue: number;
  maxValueName: string;
  minPlaceholder: string;
  minValue: number;
  minValueName: string;
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
  const [value, setValue] = useState([minValue, maxValue]);
  const handleChange = (event: Event, newValue: number[] | number) => {
    setValue(typeof newValue === 'number' ? [newValue] : newValue);
  };
  const handleInputChange = (index: 0 | 1) => (event: ChangeEvent<HTMLInputElement>) => {
    if (index === 0) {
      setValue((prev) => [Number(event.target.value), prev[1]]);
    } else {
      setValue((prev) => [prev[0], Number(event.target.value)]);
    }
  };

  const handleReset = () => {
    setValue([minValue, maxValue]);
  };

  return (
    <div className={styles.rooms}>
      <div className={styles.rooms__header}>
        <Text variant="heading5">{filterName}</Text>
        <Text variant="body1" bold className={styles.reset} onClick={handleReset}>
          Сбросить
        </Text>
      </div>
      <div className={styles.rooms__container}>
        <div>
          <div className={styles.inputs}>
            <Input
              placeholder={minPlaceholder}
              onChange={handleInputChange(0)}
              name={minValueName}
              type="number"
              value={value[0] === minValue || ['', 0].includes(value[0]) ? '' : value[0]}
            />
            <Input
              placeholder={maxPlaceholder}
              onChange={handleInputChange(1)}
              name={maxValueName}
              type="number"
              value={value[1] === maxValue || ['', 0].includes(value[1]) ? '' : value[1]}
            />
          </div>
          <Slider
            className={styles.slider}
            classes={{ thumb: styles.thumb, track: styles.track, rail: styles.track }}
            onChange={handleChange}
            value={value}
            min={minValue}
            max={maxValue}
          />
        </div>
      </div>
    </div>
  );
};
