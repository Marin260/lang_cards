import { useState } from "react";
import "./App.css";
import { Card } from "./features/card-swap/components/Card";
import { UploadCollection } from "./features/collections/components/UploadCollection";
import { loadFromLocalStorage } from "./core-utils/load-from-local";
import { SideBar } from "./features/collections/components/SideBar";

const defaultCollection: { [key: string]: string | number } = {
  key1: "Value1",
  key2: 2,
};
function App() {
  const [loadedCollection, setLoadedCollection] = useState(defaultCollection);
  return (
    <div className="flex w-screen border">
      <SideBar setLoadedCollection={setLoadedCollection} />
      <div
        className="w-full border basis-10/12"
        onLoad={() => {
          const collection = loadFromLocalStorage("default-collection");
          if (collection) setLoadedCollection(collection);
          else setLoadedCollection(defaultCollection);
        }}
      >
        <UploadCollection />
        <Card loadedCollection={loadedCollection} />
      </div>
    </div>
  );
}

export default App;
