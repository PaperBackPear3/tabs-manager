
export type AllFilterLocalStorage = { [key: string]: filterStruct }

export type filterStruct = {
  filterName: string;
  tabGroupName: string;
  filterValue: string;
  filterType: FilterType;
}

export enum FilterType {
  URL = 'url',
  TITLE = 'title',
}