export const CardActions = ({
  questionNumber,
  totalQuestions,
  setQuestionNumber,
}: {
  questionNumber: number;
  totalQuestions: number;
  setQuestionNumber: (value: React.SetStateAction<number>) => void;
}): JSX.Element => {
  return (
    <div className="p-4 mx-auto w-max">
      <button
        className="rounded-md font-helvetica-now"
        onClick={() => {
          if (questionNumber === 0) setQuestionNumber(totalQuestions - 1);
          else setQuestionNumber(questionNumber - 1);
        }}
      >
        Prev
      </button>
      <p className="inline p-2 font-light font-helvetica-now">
        {questionNumber + 1}/{totalQuestions}
      </p>
      <button
        className="rounded-md font-helvetica-now"
        onClick={() => {
          if (questionNumber === totalQuestions - 1) setQuestionNumber(0);
          else setQuestionNumber(questionNumber + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};
