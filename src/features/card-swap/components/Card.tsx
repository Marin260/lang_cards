import { useState } from "react";

const defaultCardVal = "card-question";
export const Card = (): JSX.Element => {
  const [cardValue, setCardValue] = useState(defaultCardVal);
  return (
    <div
      className="border-white border min-w-[20rem] min-h-[12rem] flex items-center justify-center"
      onClick={() => {
        if (cardValue === defaultCardVal) setCardValue("card-answer");
        else setCardValue(defaultCardVal);
      }}
    >
      <p className="text-gray-500">{cardValue}</p>
    </div>
  );
};
