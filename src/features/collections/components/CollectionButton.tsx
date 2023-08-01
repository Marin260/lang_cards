import { loadFromLocalStorage } from "../../../core-utils/load-from-local";

export const CollectionButton = ({
  collectionName,
}: {
  collectionName: string;
}) => {
  const collectionData = loadFromLocalStorage(collectionName);
  console.log(collectionData);
  return <button>{collectionName}</button>;
};
