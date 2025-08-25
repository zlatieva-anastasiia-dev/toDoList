import { ItemsInTaskColumn } from "./types";

export const updateItemsToLocalStorage = (items: ItemsInTaskColumn) =>
  localStorage.setItem("items", JSON.stringify(items));
