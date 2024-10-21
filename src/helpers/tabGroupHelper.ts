/**
 * Adds the specified tabs to a given tab group.
 *
 * @param {number} groupId - The ID of the tab group to which the tabs should be added.
 * @param {number[]} tabId - An array of tab IDs to be added to the group. If a single tab ID is provided, it will be converted to an array.
 * @returns {Promise<void>} A promise that resolves when the tabs have been added to the group.
 */
export const addToTabsGroup = async (groupId: number | undefined, tabId: number | number[], tabGroupName: string): Promise<void> => {
  if (!Array.isArray(tabId)) {
    tabId = [tabId];
  }
  console.log(groupId, tabId, tabGroupName)
  const group = await chrome.tabs.group({ groupId: groupId, tabIds: tabId });
  await chrome.tabGroups.update(group, { title: tabGroupName });

}

/**
 * Retrieves the ID of a tab group by its name.
 *
 * @param {string} groupName - The name of the tab group to search for.
 * @returns {Promise<number | undefined>} A promise that resolves to the ID of the tab group if found, or undefined if not found.
 */
export const getTabGroup = async (groupName: string): Promise<number | undefined> => {
  return (await chrome.tabGroups.query({ title: groupName }))[0]?.id
};

export const collapseGroup = async (groupName: string): Promise<void> => {
  const tabId = await getTabGroup(groupName)

  if (!tabId) {
    return
  }
  await chrome.tabGroups.update(tabId, { collapsed: true });


}