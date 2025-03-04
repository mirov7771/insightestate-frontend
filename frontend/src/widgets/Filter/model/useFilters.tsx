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
import { Estate, filterApi, GetEstateParams } from '@/widgets/Filter/api/filterApi';

export const DEFAULT_FILTERS = {
  buildEndYears: [],
  types: [],
  rooms: [],
  grades: [],
  pageNumber: 1,
};

type FiltersContextValues = GetEstateParams & {
  estates: Estate[];
  setFilters: Dispatch<SetStateAction<GetEstateParams>>;
  totalPages: number;
};

const FiltersContext = createContext<FiltersContextValues | undefined>(undefined);

export const FiltersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [filters, setFilters] = useState<GetEstateParams>(DEFAULT_FILTERS);
  const [estates, setEstates] = useState<Estate[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    filterApi.getEstate({ pageNumber: 0 }).then((response) => {
      setEstates(response.data.items);
    });
  }, []);

  useEffect(() => {
    filterApi.getEstate(filters).then((response) => {
      setEstates(response.data.items);
      setTotalPages(response.data.totalPages)
    });
  }, [filters]);

  const contextValue = useMemo(() => ({ ...filters, setFilters, estates, totalPages }), [filters, estates, totalPages]);

  return <FiltersContext.Provider value={contextValue}>{children}</FiltersContext.Provider>;
};

export const useFilters = () => {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error('useFilters must be used within an useFiltersProvider');
  }
  return context;
};
