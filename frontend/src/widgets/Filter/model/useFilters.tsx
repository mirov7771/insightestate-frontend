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
import { Estate, filterApi, GetEstateParams } from '@/widgets/Filter/api/filterApi';

export const DEFAULT_FILTERS = {
  buildEndYears: [],
  types: [],
  rooms: [],
  grades: [],
  airportTravelTimes: [],
  beachTravelTimes: [],
  pageNumber: 0,
  beachName: [],
  managementCompanyEnabled: undefined,
  city: [],
  minPrice: 0,
  maxPrice: undefined,
  developer: [],
  petFriendly: undefined,
  untis: [],
};

const activeFiltersCounter = (filters: GetEstateParams): number => {
  let count = 0;

  Object.entries(filters).forEach(([key, value]) => {
    // Пропускаем служебные поля, если они есть
    if (key === 'page' || key === 'pageSize' || key === 'pageNumber') return;

    // Для массивов: если не пустой массив
    if (Array.isArray(value) && value.length > 0) {
      count += 1;
      return;
    }

    // Для строк: если не пустая строка
    if (typeof value === 'string' && value.trim() !== '') {
      count += 1;
      return;
    }

    // Для чисел: если не null/undefined и не дефолтное значение (например, 0)
    if (typeof value === 'number' && value !== 0 && value !== 4000000 && !isNaN(value)) {
      count += 1;
      return;
    }

    // Для boolean: если true (например, "есть управляющая компания")
    if (typeof value === 'boolean' && value) {
      count += 1;
      return;
    }

    // Для других типов (например, объектов) — можно добавить обработку по необходимости
  });

  return count;
};

type FiltersContextValues = GetEstateParams & {
  countActiveFilters: number;
  estates: Estate[];
  hasMore: boolean;
  loading: boolean;
  setFilters: Dispatch<SetStateAction<GetEstateParams>>;
  totalCount: number;
  totalPages: number;
};

const FiltersContext = createContext<FiltersContextValues | undefined>(undefined);

export const FiltersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [filters, setFilters] = useState<GetEstateParams>(DEFAULT_FILTERS);
  const [estates, setEstates] = useState<Estate[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [countActiveFilters, setCountActiveFilters] = useState<number>(
    activeFiltersCounter(filters)
  );

  const getEstate = useCallback(async () => {
    setLoading(true);
    try {
      const {
        data: { items, totalCount, totalPages, hasMore },
      } = await filterApi.getEstate(filters);

      setEstates(items);
      setTotalPages(totalPages);
      setHasMore(hasMore);
      setTotalCount(totalCount);
    } catch (e) {
      console.error('Error fetching estates:', e);
    } finally {
      setLoading(false);
    }

    setCountActiveFilters(activeFiltersCounter(filters));
  }, [filters]);

  useEffect(() => {
    getEstate();
  }, [getEstate]);

  const contextValue = useMemo(
    () => ({
      ...filters,
      setFilters,
      estates,
      totalPages,
      hasMore,
      loading,
      totalCount,
      countActiveFilters,
    }),
    [filters, estates, totalPages, hasMore, loading, totalCount, countActiveFilters]
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
