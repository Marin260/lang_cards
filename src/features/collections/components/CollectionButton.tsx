import { loadFromLocalStorage } from "../../../core-utils/load-from-local";

export const CollectionButton = ({
  collectionName,
  activeCollection,
  updateCollection,
}: {
  collectionName: string;
  activeCollection: string;
  updateCollection: (
    collectionName: string,
    collectionData: {
      [key: string]: string | number;
    }
  ) => void;
}): JSX.Element => {
  const collectionData = loadFromLocalStorage(collectionName);

  const buttonStyle =
    collectionName !== activeCollection
      ? "mx-2 my-1 w-[10rem] overflow-hidden"
      : "mx-2 my-1 w-[10rem] overflow-hidden bg-white text-black";

  if (collectionData) {
    return (
      <button
        className={buttonStyle}
        onClick={() => {
          updateCollection(collectionName, collectionData);
        }}
      >
        {collectionName}
      </button>
    );
  } else return <></>;
};
