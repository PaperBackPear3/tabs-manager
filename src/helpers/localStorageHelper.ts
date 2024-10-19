import { AllFilterLocalStorage } from "../types/types";

export const setLocalStorage = (key: string, value: AllFilterLocalStorage) => {
  chrome.storage.local.set({ [key]: value });
}

export const getLocalStorage = async (key: string): Promise<AllFilterLocalStorage> => {
  const value = await chrome.storage.local.get(key);
  return value[key];
}

export const removeLocalStorage = (key: string) => {
  chrome.storage.local.remove(key);
}

export const clearLocalStorage = () => {
  chrome.storage.local.clear();
}

export const getLocalStorageKeys = () => {
  return Object.keys(chrome.storage.local);
}