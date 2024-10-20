import { AllFilterLocalStorage, FilterStruct } from "../types/types";
import { getLocalStorage, setLocalStorage } from "./localStorageHelper";

export const getFilters = async (): Promise<AllFilterLocalStorage> => {
  return await getLocalStorage('filters');
}

export const setFilters = (filters: AllFilterLocalStorage) => {
  return setLocalStorage('filters', filters);
}

export const upsertFilter = async (filter: FilterStruct) => {
  const filters = await getFilters();
  console.log('upsertFilter', filters);
  if (!filters) {
    return setFilters({ [filter.filterName]: filter });
  }
  filters[filter.filterName] = filter;
  return setFilters(filters);
}

export const clearFilters = () => {
  return setFilters({});
}

export const deleteFilter = async (filterName: string) => {
  const filters = await getFilters();
  delete filters[filterName];
  return setFilters(filters);
}

export const getFilterKeys = async () => {
  return await getLocalStorage('filters') ? Object.keys(getLocalStorage('filters')) : [];
}