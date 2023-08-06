import { CollectionButton } from "./CollectionButton";

export const SideBar = ({
  setLoadedCollection,
  activeCollection,
  setQuestionNumber,
  collectionList,
  setActiveCollection,
}: {
  collectionList: string[];
  activeCollection: string;
  setLoadedCollection: (
    value: React.SetStateAction<{ [key: string]: string | number }>
  ) => void;
  setQuestionNumber: (value: React.SetStateAction<number>) => void;
  setActiveCollection: (value: React.SetStateAction<string>) => void;
}): JSX.Element => {
  const buttons: JSX.Element[] = [];

  for (const collection of collectionList)
    if (collection !== "debug")
      buttons.push(
        <CollectionButton
          collectionName={collection}
          activeCollection={activeCollection}
          setLoadedCollection={setLoadedCollection}
          setQuestionNumber={setQuestionNumber}
          setActiveCollection={setActiveCollection}
        />
      );

  return (
    <div className="w-full h-screen overflow-y-auto basis-2/12 bg-zinc-800">
      <div className="flex flex-col p-2">{buttons}</div>
    </div>
  );
};
