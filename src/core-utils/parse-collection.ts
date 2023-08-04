import { lsCollection } from "../App";

export const parseCollection = (collection: {
  [key: string]: string | number;
}) => {
  // TODO: transform into list
  const collectionList: lsCollection[] = [];
  const collectionKeys = Object.keys(collection);

  for (const key of collectionKeys)
    collectionList.push({ q: key, a: collection[key] });

  return collectionList;
};
