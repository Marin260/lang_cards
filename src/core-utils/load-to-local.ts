export const loadToLocalStorage = (
  collection: {
    [key: string]: string | number;
  },
  collectionName: string
) => {
  localStorage.setItem(collectionName, JSON.stringify(collection));
  console.log(Object.keys(localStorage));
};
