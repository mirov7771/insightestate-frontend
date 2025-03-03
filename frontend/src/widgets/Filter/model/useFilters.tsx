import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { filterApi, GetEstateParams } from '@/widgets/Filter/api/filterApi';

type FiltersContextValues = GetEstateParams & {
  setFilters: Dispatch<SetStateAction<GetEstateParams>>;
};

const FiltersContext = createContext<FiltersContextValues | undefined>(undefined);

export const FiltersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [filters, setFilters] = useState<GetEstateParams>({});

  useEffect(() => {
    filterApi.getEstate(filters).then((response) => {
      console.log(response);
    });
  }, [filters]);

  const contextValue = useMemo(() => ({ ...filters, setFilters }), [filters]);

  return <FiltersContext.Provider value={contextValue}>{children}</FiltersContext.Provider>;
};

export const useFilters = () => {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error('useFilters must be used within an useFiltersProvider');
  }
  return context;
};
