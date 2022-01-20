/**
 * Data Model Interfaces
 */

import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";

/**
 * In-Memory Store
 */

let items: Items = {
  1: {
    id: 1,
    name: "Black Tea",
    price: 599,
    description: "To produce black tea, tea leaves are harvested, wilted, and then lightly crushed.",
    image: "https://images.unsplash.com/photo-1627764611688-2d07255e995e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  },
  2: {
    id: 2,
    name: "Green Tea",
    price: 299,
    description: "Green tea is harvested and then immediately either steamed or pan-fired in order to halt the oxidation process.",
    image: "https://images.unsplash.com/photo-1566221280196-43e76121ff51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
  },
  3: {
    id: 3,
    name: "White Tea",
    price: 199,
    description: "White tea is primarily produced in China, particularly in the Fujian province, where it has a rich history.",
    image: "https://images.unsplash.com/photo-1563911892317-47551470aed8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<Item[]> => Object.values(items);

export const find = async (id: number): Promise<Item> => items[id];

export const create = async (newItem: BaseItem): Promise<Item> => {
  const id = new Date().valueOf();

  items[id] = {
    id,
    ...newItem,
  };

  return items[id];
};

export const update = async (
  id: number,
  itemUpdate: BaseItem
): Promise<Item | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  items[id] = { id, ...itemUpdate };

  return items[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete items[id];
};
