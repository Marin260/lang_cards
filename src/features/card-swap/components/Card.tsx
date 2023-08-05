import { CardActions } from "./CardActions";
import { lsCollection } from "../../../App";

export const Card = ({
  questions,
  questionNumber,
  cardValue,
  setCardValue,
  setQuestionNumber,
}: {
  questions: lsCollection[];
  questionNumber: number;
  cardValue: number | string;
  setCardValue: (value: React.SetStateAction<number | string>) => void;
  setQuestionNumber: (value: React.SetStateAction<number>) => void;
}) => {
  return (
    <div className="min-w-[20rem]">
      <div
        className="rounded-md max-w-[20rem] min-h-[12rem] flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500"
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
    </div>
  );
};
