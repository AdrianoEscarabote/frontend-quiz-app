import LoadingBar from "../LoadingBar";
import { QuestionDetailsProps } from "./QuestionDetails";
import style from "./style.module.css";

const QuestionDetails = ({
  questionTitle,
  questionNumber,
}: QuestionDetailsProps) => {
  return (
    <div
      className={`${style.container} w-full max-w-[465px] flex flex-col justify-between h-full`}
    >
      <div>
        <p className={`${style.details} BodyS text-color2 mb-6`}>
          question {questionNumber} of 10
        </p>
        <h2 className={`${style.question} text-color HeadingM`}>
          {questionTitle}
        </h2>
      </div>
      <div className={`${style.wrapper_loadingBar} mb-28`}>
        <LoadingBar percentage={Number(questionNumber)} />
      </div>
    </div>
  );
};

export default QuestionDetails;
