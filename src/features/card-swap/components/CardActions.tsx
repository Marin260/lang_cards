export const CardActions = ({
  setQuestionNumber,
  questionNumber,
  totalQuestions,
}: {
  setQuestionNumber: (value: React.SetStateAction<number>) => void;
  questionNumber: number;
  totalQuestions: number;
}): JSX.Element => {
  return (
    <div className="p-4">
      <button
        className="rounded-md font-helvetica-now"
        onClick={() => {
          if (questionNumber === 0) setQuestionNumber(totalQuestions - 1);
          else setQuestionNumber(questionNumber - 1);
        }}
      >
        Previous
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
