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
  airportTravelTimes: [],
  beachTravelTimes: [],
  pageNumber: 0,
  beachName: undefined,
  managementCompanyEnabled: undefined,
  city: undefined,
  minPrice: 0,
  maxPrice: undefined,
};

type FiltersContextValues = GetEstateParams & {
  estates: Estate[];
  hasMore: boolean;
  loading: boolean;
  setFilters: Dispatch<SetStateAction<GetEstateParams>>;
  totalPages: number;
  totalCount: number;
};

const FiltersContext = createContext<FiltersContextValues | undefined>(undefined);

export const FiltersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [filters, setFilters] = useState<GetEstateParams>(DEFAULT_FILTERS);
  const [estates, setEstates] = useState<Estate[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    filterApi
      .getEstate(filters)
      .then((response) => {
        setEstates(response.data.items);
        setTotalPages(response.data.totalPages);
        setHasMore(response.data.hasMore);
        setTotalCount(response.data.totalCount)
      })
      .finally(() => setLoading(false));
  }, [filters]);

  const contextValue = useMemo(
    () => ({ ...filters, setFilters, estates, totalPages, hasMore, loading, totalCount }),
    [filters, estates, totalPages, hasMore, loading, totalCount]
  );

  return <FiltersContext.Provider value={contextValue}>{children}</FiltersContext.Provider>;
};

export const useFilters = () => {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error('useFilters must be used within an useFiltersProvider');
  }
  return context;
};
