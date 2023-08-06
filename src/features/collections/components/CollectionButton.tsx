import { loadFromLocalStorage } from "../../../core-utils/load-from-local";

export const CollectionButton = ({
  collectionName,
  activeCollection,
  setLoadedCollection,
  setQuestionNumber,
  setActiveCollection,
}: {
  collectionName: string;
  activeCollection: string;
  setLoadedCollection: (
    value: React.SetStateAction<{ [key: string]: string | number }>
  ) => void;
  setQuestionNumber: (value: React.SetStateAction<number>) => void;
  setActiveCollection: (value: React.SetStateAction<string>) => void;
}): JSX.Element => {
  const collectionData = loadFromLocalStorage(collectionName);

  const buttonStyle =
    collectionName !== activeCollection
      ? "mx-2 my-1 max-w-[10rem] overflow-hidden"
      : "mx-2 my-1 max-w-[10rem] overflow-hidden bg-white text-black";

  if (collectionData) {
    return (
      <button
        className={buttonStyle}
        onClick={() => {
          setActiveCollection(collectionName);
          setQuestionNumber(0);
          setLoadedCollection(collectionData);
        }}
      >
        {collectionName}
      </button>
    );
  } else return <></>;
};
