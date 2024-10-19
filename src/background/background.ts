async function addToTabGroup(tabId: number): Promise<void> {

  const tabsUrlCommonNames = [
    'monday',
    'jira',
    'github',
    'stackoverflow',
  ];

  console.log((await chrome.tabs.get(tabId)).title);
  console.log((await chrome.tabs.get(tabId)).url);


  const currentUrl = (await chrome.tabs.get(tabId)).url;
  if (!currentUrl)
    return;

  const websiteName = currentUrl.split('/')[2];
  console.log('websiteName', websiteName);
  const isUrlToGroup = tabsUrlCommonNames.find((name) => currentUrl.includes(name));

  if (isUrlToGroup) {
    const existingGroupId = (await chrome.tabGroups.query({ title: isUrlToGroup.toUpperCase() })).map(group => group.id)[0];
    const group = await chrome.tabs.group({ groupId: existingGroupId, tabIds: [tabId] });
    await chrome.tabGroups.update(group, { title: isUrlToGroup.toUpperCase() });
  }
}

chrome.tabs.onCreated.addListener(async function callback(tab) {
  await addToTabGroup(tab.id ?? -1).then(() => console.log('onCreated', 'added to group'));
})

chrome.tabs.onUpdated.addListener(async function callback(tabId, changeInfo) {
  if (changeInfo.url) {
    await addToTabGroup(tabId).then(() => console.log('onUpdated', 'added to group'));
  }
});

chrome.tabs.onAttached.addListener(async function callback(tabId) {
  await addToTabGroup(tabId);
});

// chrome.tabs.onActivated.addListener(async function callback(tabId, moveInfo) {
//   await addToTabGroup(tabId);
// });

