import { ItemsInTaskColumn } from "./types";

export const updateItemsInLocalStorage = (items: ItemsInTaskColumn) =>
  localStorage.setItem("items", JSON.stringify(items));
