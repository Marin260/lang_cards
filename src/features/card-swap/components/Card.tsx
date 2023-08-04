import { useEffect, useState } from "react";
import { CardActions } from "./CardActions";
import { parseCollection } from "../../../core-utils/parse-collection";

export const Card = ({
  loadedCollection,
}: {
  loadedCollection: {
    [key: string]: string | number;
  };
}) => {
  const questions = parseCollection(loadedCollection);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [cardValue, setCardValue] = useState<number | string>(
    questions[questionNumber].q
  );
  console.log(questions);

  useEffect(() => {
    setCardValue(questions[questionNumber].q);
  }, [questionNumber]);

  return (
    <>
      <div
        className="rounded-md min-w-[20rem] min-h-[12rem] flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500"
        onClick={() => {
          if (cardValue === questions[questionNumber].q)
            setCardValue(questions[questionNumber].a);
          else setCardValue(questions[questionNumber].q);
        }}
      >
        <p className="text-4xl text-gray-900 font-helvetica-now">{cardValue}</p>
      </div>
      <CardActions
        setQuestionNumber={setQuestionNumber}
        questionNumber={questionNumber}
        totalQuestions={questions.length}
      />
    </>
  );
};
