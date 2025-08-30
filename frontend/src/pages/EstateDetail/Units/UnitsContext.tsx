import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Unit, unitsApi, UnitsFiltersParams } from '@/shared/api/units';
import { useStatus } from '@/shared/utils/useStatus';

export const UnitsContext = createContext<
  | {
      filtersParams: UnitsFiltersParams;
      getUnits: () => Promise<void>;
      setFiltersParams: Dispatch<SetStateAction<UnitsFiltersParams>>;
      status: 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';
      units: Unit[];
    }
  | undefined
>(undefined);

export const UnitsFilterProvider: FC<PropsWithChildren & { id: string | undefined }> = ({
  children,
  id,
}) => {
  const { status, setStatus } = useStatus();
  const [units, setUnits] = useState<Unit[]>([]);
  const [filtersParams, setFiltersParams] = useState<UnitsFiltersParams>({ orderBy: 'price' });

  const getUnits = useCallback(async () => {
    try {
      if (id) {
        setStatus('LOADING');
        const { data } = await unitsApi.getUnitsByEstateId({ id, ...filtersParams });

        setUnits(data.items);
        setStatus('SUCCESS');
      }
    } catch (e) {
      console.log({ e });
      setStatus('ERROR');
    }
  }, [filtersParams, id, setStatus]);

  useEffect(() => {
    getUnits();
  }, [getUnits]);

  const contextValue = useMemo(
    () => ({ status, units, filtersParams, setFiltersParams, getUnits }),
    [filtersParams, getUnits, status, units]
  );

  return <UnitsContext.Provider value={contextValue}>{children}</UnitsContext.Provider>;
};

export const useUnitsFilters = () => {
  const context = useContext(UnitsContext);

  if (!context) {
    throw new Error('useUnitsFilters must be used within an useFiltersProvider');
  }
  return context;
};
