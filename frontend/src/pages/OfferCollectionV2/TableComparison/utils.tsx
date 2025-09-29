import { ReactNode } from 'react';
import { IntlShape } from 'react-intl';
import { Unit } from '@/shared/api/units';
import { Estate } from '@/widgets/EstateCollection/api/estateCollectionApi';

export function generateComparisonRows(
  estates: Estate[],
  formatMessage: IntlShape['formatMessage']
): { name: string; values: Array<ReactNode | string> }[] {
  // Собираем все units в один массив (сохраняя порядок)
  const allUnits: Unit[] = estates.flatMap((estate) => estate.units ?? []);
  const currency = localStorage.getItem('currency') || '$'
  return [
    {
      name: formatMessage({ id: 'number_of_bedrooms' }),
      values: allUnits.map((unit) => formatMessage({ id: `units.bedroom.${unit.rooms}` })),
    },
    {
      name: formatMessage({ id: 'units.square' }),
      values: allUnits.map((unit) => (
        <span>
          {unit.square}м <sup>2</sup>
        </span>
      )),
    },
    /*{
      name: formatMessage({ id: 'units.floor' }),
      values: allUnits.map((unit) => unit.floor || '—'),
    },*/
    {
      name: formatMessage({ id: 'units.number' }),
      values: allUnits.map((unit) => unit.number || '—'),
    },
    {
      name: formatMessage({ id: 'units.price' }),
      values: allUnits.map((unit) => (unit.price ? `${unit.price} ${currency}` : '—')),
    },
    {
      name: formatMessage({ id: 'units.pricePerMeter' }),
      values: allUnits.map((unit) => (unit.priceSq ? `${unit.priceSq} ${currency}` : '—')),
    },
  ];
}
