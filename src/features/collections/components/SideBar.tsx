import { CollectionButton } from "./CollectionButton";

export const SideBar = ({
  setLoadedCollection,
  setQuestionNumber,
}: {
  setLoadedCollection: (
    value: React.SetStateAction<{ [key: string]: string | number }>
  ) => void;
  setQuestionNumber: (value: React.SetStateAction<number>) => void;
}): JSX.Element => {
  const collectionList = Object.keys(localStorage);
  collectionList.splice(collectionList.indexOf("debug"), 1);

  const buttons: JSX.Element[] = [];

  for (const collection of collectionList)
    buttons.push(
      <CollectionButton
        collectionName={collection}
        setLoadedCollection={setLoadedCollection}
        setQuestionNumber={setQuestionNumber}
      />
    );

  return (
    <div className="w-full border basis-2/12">
      <div className="flex flex-col p-2">{buttons}</div>
    </div>
  );
};
