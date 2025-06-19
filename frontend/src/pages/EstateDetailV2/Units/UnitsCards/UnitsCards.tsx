import React, { FC } from 'react';
import { Unit } from '@/shared/api/units';

export const UnitsCards: FC<{ items: Unit[] }> = ({ items }) => {
  return (
    <div>
      {items.map((unit) => {
        return unit.id;
      })}
    </div>
  );
};
