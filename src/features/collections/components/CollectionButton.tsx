import { loadFromLocalStorage } from "../../../core-utils/load-from-local";

export const CollectionButton = ({
  collectionName,
  setLoadedCollection,
  setQuestionNumber,
}: {
  collectionName: string;
  setLoadedCollection: (
    value: React.SetStateAction<{ [key: string]: string | number }>
  ) => void;
  setQuestionNumber: (value: React.SetStateAction<number>) => void;
}): JSX.Element => {
  const collectionData = loadFromLocalStorage(collectionName);

  if (collectionData) {
    return (
      <button
        onClick={() => {
          setQuestionNumber(0);
          setLoadedCollection(collectionData);
        }}
      >
        {collectionName}
      </button>
    );
  } else return <></>;
};
