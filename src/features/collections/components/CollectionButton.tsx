import { loadFromLocalStorage } from "../../../core-utils/load-from-local";
//import { parseCollection } from "../../../core-utils/parse-collection";

export const CollectionButton = ({
  collectionName,
  setLoadedCollection,
}: {
  collectionName: string;
  setLoadedCollection: (
    value: React.SetStateAction<{ [key: string]: string | number }>
  ) => void;
}) => {
  const collectionData = loadFromLocalStorage(collectionName);
  if (collectionData) {
    return (
      <button
        onClick={() => {
          setLoadedCollection(collectionData);
        }}
      >
        {collectionName}
      </button>
    );
  }
};
