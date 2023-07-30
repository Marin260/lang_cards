export const loadFromLocalStorage = (
  collectionName: string
): { [key: string]: string } | undefined => {
  const collection = localStorage.getItem(collectionName);
  return collection ? JSON.parse(collection) : undefined;
};
