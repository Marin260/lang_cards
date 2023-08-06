import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./features/card-swap/components/Card";
import { UploadCollection } from "./features/collections/components/UploadCollection";
import { loadFromLocalStorage } from "./core-utils/load-from-local";
import { SideBar } from "./features/collections/components/SideBar";
import { parseCollection } from "./core-utils/parse-collection";
import { loadToLocalStorage } from "./core-utils/load-to-local";

const getDefultCollection = (): { [key: string]: string | number } => {
  const defaultValue: { [key: string]: string | number } = {
    key1: "Value1",
    key2: 2,
  };
  const defaultStore = loadFromLocalStorage("default-collection");
  if (defaultStore) return defaultStore;
  else {
    loadToLocalStorage(defaultValue, "default-collection");
    return defaultValue;
  }
};

const defaultCollection = getDefultCollection();

export type lsCollection = {
  q: string;
  a: string | number;
};

function App() {
  const [loadedCollection, setLoadedCollection] = useState(defaultCollection);
  const [collectionList, setCollectionList] = useState(
    Object.keys(localStorage)
  );
  const [activeCollection, setActiveCollection] =
    useState("default-collection");

  const questions = parseCollection(loadedCollection);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [cardValue, setCardValue] = useState<number | string>(
    questions[questionNumber].q
  );

  useEffect(() => {
    setCardValue(questions[questionNumber].q);
  }, [questionNumber, loadedCollection]);

  return (
    <div className="flex w-screen ">
      <SideBar
        collectionList={collectionList}
        activeCollection={activeCollection}
        setLoadedCollection={setLoadedCollection}
        setQuestionNumber={setQuestionNumber}
        setActiveCollection={setActiveCollection}
      />
      <div
        className="flex flex-col items-center w-full mt-4 basis-10/12"
        onLoad={() => {
          const collection = loadFromLocalStorage("default-collection");
          if (collection) setLoadedCollection(collection);
          else setLoadedCollection(defaultCollection);
        }}
      >
        <UploadCollection setCollectionList={setCollectionList} />
        <Card
          questions={questions}
          questionNumber={questionNumber}
          cardValue={cardValue}
          setCardValue={setCardValue}
          setQuestionNumber={setQuestionNumber}
        />
      </div>
    </div>
  );
}

export default App;
