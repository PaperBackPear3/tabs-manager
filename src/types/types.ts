
export type AllFilterLocalStorage = { [key: string]: FilterStruct }

export type FilterStruct = {
  filterName: string;
  tabGroupName: string;
  filterValues: string[];
  filterType: FilterType;
}

export enum FilterType {
  URL = 'url',
  TITLE = 'title',
}