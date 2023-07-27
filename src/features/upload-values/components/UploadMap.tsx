import { useState } from "react";

const defaultText = `{"Insert_Json_Key": "Value Pairs"}`;

export const UploadMap = (): JSX.Element => {
  const [textAreaValue, setTextAreaValue] = useState(defaultText);

  return (
    <div>
      <textarea
        cols={30}
        rows={10}
        onChange={(e) => {
          setTextAreaValue(e.target.value);
          console.log(e.target.value);
        }}
        value={textAreaValue}
      ></textarea>

      <button
        onClick={() => {
          const cleaned = JSON.stringify(JSON.parse(textAreaValue));
          console.log(JSON.parse(textAreaValue));
          setTextAreaValue(cleaned);
        }}
      >
        format
      </button>
      <button>upload</button>
    </div>
  );
};
