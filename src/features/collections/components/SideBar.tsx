import { CollectionButton } from "./CollectionButton";

export const SideBar = ({
  collectionList,
  activeCollection,
  updateCollection,
}: {
  collectionList: string[];
  activeCollection: string;
  updateCollection: (
    collectionName: string,
    collectionData: {
      [key: string]: string | number;
    }
  ) => void;
}): JSX.Element => {
  const buttons: JSX.Element[] = [];

  for (const collection of collectionList)
    if (collection !== "debug")
      buttons.push(
        <CollectionButton
          collectionName={collection}
          activeCollection={activeCollection}
          updateCollection={updateCollection}
        />
      );

  return (
    <div className="w-full h-screen overflow-y-auto basis-3/12 bg-zinc-800">
      <div className="flex flex-col items-center p-2">{buttons}</div>
    </div>
  );
};
