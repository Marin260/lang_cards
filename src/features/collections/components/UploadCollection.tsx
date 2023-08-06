import { useState } from "react";
import { loadToLocalStorage } from "../../../core-utils/load-to-local";

const defaultText = `{"Insert_Json_Key": "Value Pairs"}`;
const defaulCollectionName = "default-collection";
export const UploadCollection = ({
  setCollectionList,
}: {
  setCollectionList: (value: React.SetStateAction<string[]>) => void;
}): JSX.Element => {
  const [collectionValue, setCollectionValue] = useState(defaultText);
  const [collectionName, setCollectionName] = useState(defaulCollectionName);

  return (
    <div>
      <input
        type="text"
        placeholder="Collection name"
        className="p-1 mb-1 rounded-md min-w-[20rem]"
        onChange={(e): void => {
          setCollectionName(e.target.value);
        }}
      />
      <br />
      <textarea
        className="p-4 min-w-[20rem] rounded-md"
        onChange={(e) => {
          setCollectionValue(e.target.value);
        }}
        defaultValue={collectionValue}
      ></textarea>
      <br />
      <div>
        <button
          onClick={(): void => {
            const cleaned = JSON.stringify(JSON.parse(collectionValue));
            setCollectionValue(cleaned);
          }}
        >
          Format
        </button>
        <button
          onClick={(): void => {
            loadToLocalStorage(JSON.parse(collectionValue), collectionName);
            setCollectionList(Object.keys(localStorage));
          }}
        >
          Upload
        </button>
      </div>
    </div>
  );
};
