import { useState } from "react";
import { CardActions } from "./CardActions";

const defaultCardVal = "Card Question";
export const Card = ({
  loadedCollection,
}: {
  loadedCollection: {
    [key: string]: string | number;
  };
}) => {
  console.log(loadedCollection); // TODO: transform it into a list and pass it as cards value
  const [cardValue, setCardValue] = useState(defaultCardVal);
  return (
    <>
      <div
        className="rounded-md min-w-[20rem] min-h-[12rem] flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500"
        onClick={() => {
          if (cardValue === defaultCardVal) setCardValue("Card Answer");
          else setCardValue(defaultCardVal);
        }}
      >
        <p className="text-2xl text-gray-900 font-helvetica-now">{cardValue}</p>
      </div>
      <CardActions />
    </>
  );
};
