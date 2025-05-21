import { FC, useEffect, useState } from 'react';
import { Beach as BeachIcon } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { CustomSlider } from '@/widgets/Filter/CustomSlider';

export const Beach: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, beachTravelTimes } = useFilters();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [selectedValuesWalk, setSelectedValuesWalk] = useState<string[]>([]);
  const [selectedValuesCar, setSelectedValuesCar] = useState<string[]>([]);

  const marks = [
    {
      value: 30,
      label: `30 ${formatMessage({ id: 'min' })}`,
    },
  ];

  const handleClick = (value: string[]) => {
    setFilters((filtersState) => {
      return {
        ...filtersState,
        beachTravelTimes: value,
      };
    });
  };

  const handleSliderWalk = (event: Event, value: number | number[], activeThumb: number) => {
    const selectedValue = value as number;

    switch (selectedValue) {
      case 0:
      case 5:
        setSelectedValuesWalk(['1']);
        break;
      case 10:
        setSelectedValuesWalk(['1', '2']);
        break;
      case 15:
      case 20:
      case 25:
      case 30:
        setSelectedValuesWalk(['1', '2', '3']);
        break;
    }
  };

  const handleSliderCar = (event: Event, value: number | number[], activeThumb: number) => {
    const selectedValue = value as number;

    switch (selectedValue) {
      case 0:
      case 5:
        setSelectedValuesCar(['11']);
        break;
      case 10:
        setSelectedValuesCar(['11', '12']);
        break;
      case 15:
      case 20:
      case 25:
      case 30:
        setSelectedValuesCar(['11', '12', '13']);
        break;
    }
  };

  useEffect(() => {
    let value = selectedValuesCar;

    if (selectedValuesWalk.length > 0) {
      value = value.concat(selectedValuesWalk);
    }
    setSelectedValues(value);
  }, [selectedValuesCar]);

  useEffect(() => {
    let value = selectedValuesWalk;

    if (selectedValuesCar.length > 0) {
      value = value.concat(selectedValuesCar);
    }
    setSelectedValues(value);
  }, [selectedValuesWalk]);

  useEffect(() => {
    handleClick(selectedValues);
  }, [selectedValues]);

  return (
    <Accordion icon={<BeachIcon />} title={formatMessage({ id: 'beach_time' })}>
      <div className={styles.content}>
        <p
          style={{
            fontSize: '12px',
            padding: '12px',
          }}
        >
          {formatMessage({ id: 'beach.walk' })}
        </p>
        <CustomSlider
          min={0}
          max={30}
          step={5}
          style={{
            width: '95%',
            marginTop: '15px',
          }}
          valueLabelDisplay={'on'}
          marks={marks}
          onChange={handleSliderWalk}
        />
        <p
          style={{
            fontSize: '12px',
            padding: '12px',
          }}
        >
          {formatMessage({ id: 'beach.car' })}
        </p>
        <CustomSlider
          min={0}
          max={30}
          step={5}
          style={{
            width: '95%',
            marginTop: '15px',
          }}
          valueLabelDisplay={'on'}
          marks={marks}
          onChange={handleSliderCar}
        />
      </div>
    </Accordion>
  );
};
