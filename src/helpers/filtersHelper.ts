import { FilterStruct, FilterType } from "@/types/types";
import { addToTabsGroup, getTabGroup } from "@/helpers/tabGroupHelper";

const runFilter = async (filter: FilterStruct) => {
  const tabs = await chrome.tabs.query({});
  const tabIdsToAdd: number[] = [];
  tabs.forEach(async (tab) => {
    if (doesFilterApplies(tab, filter) && tab.id) {
      tabIdsToAdd.push(tab.id)
    }
  });
  const groupId = await getTabGroup(filter.tabGroupName)
  addToTabsGroup(groupId, tabIdsToAdd, filter.tabGroupName)
}

export default runFilter;

export const doesFilterApplies = (tab: chrome.tabs.Tab, filter: FilterStruct): boolean => {

  let tabValue = tab.url;

  if (filter.filterType === FilterType.TITLE) { tabValue = tab.title; }

  return filter.filterValues.some((value) => tabValue?.includes(value))
}
