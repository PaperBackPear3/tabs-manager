import { AllFilterLocalStorage, filterStruct } from "../types/types";
import { getLocalStorage, setLocalStorage } from "./localStorageHelper";

export const getFilters = async (): Promise<AllFilterLocalStorage> => {
  return await getLocalStorage('filters');
}

export const setFilters = (filters: AllFilterLocalStorage) => {
  return setLocalStorage('filters', filters);
}

export const addFilter = async (filter: filterStruct) => {
  const filters = await getFilters();
  filters[filter.filterName] = filter;
  return setFilters(filters);
}

export const clearFilters = () => {
  return setFilters({});
}

export const getFilterKeys = async () => {
  return await getLocalStorage('filters') ? Object.keys(getLocalStorage('filters')) : [];
}