// import { addToTabsGroup, getTabGroup } from "@/helpers/tabGroupHelper";

// async function addToTabGroup(tabId: number): Promise<void> {

//   const tab = await chrome.tabs.get(tabId);
//   if (!tab)
//     return;

//   if (tab.url === 'chrome://newtab/')
//     return;
//   console.log('tab', tab);
//   if (tab.groupId > -1)
//     return;
//   if (!tab.id)
//     return;

//   const currentUrl = tab.url;
//   if (!currentUrl)
//     return;

//   const websiteName = currentUrl.split('/')[2].split('.')[0];

//   const existingGroupId = await getTabGroup(websiteName)
//   await addToTabsGroup(existingGroupId, tab.id, websiteName.toUpperCase())
// }

// chrome.tabs.onCreated.addListener(async function callback(tab) {
//   await addToTabGroup(tab.id ?? -1).then(() => console.log('onCreated', 'added to group'));
// })

// chrome.tabs.onUpdated.addListener(async function callback(tabId, changeInfo) {
//   if (changeInfo.url) {
//     await addToTabGroup(tabId).then(() => console.log('onUpdated', 'added to group'));
//   }
// });

// chrome.tabs.onAttached.addListener(async function callback(tabId) {
//   await addToTabGroup(tabId);
// });

// // chrome.tabs.onActivated.addListener(async function callback(tabId, moveInfo) {
// //   await addToTabGroup(tabId);
// // });

