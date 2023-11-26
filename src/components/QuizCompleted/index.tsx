import { useDispatch } from "react-redux";
import Button from "../Button";
import { useEffect } from "react";
import { calculate } from "@/redux/quizData/reducer";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/quizData/quizDataTypes";
import { QuizCompletedProps } from "./QuizCompleted";
import CategoryTag from "../CategoryTag";
import style from "./style.module.css";

const QuizCompleted = ({ handleShowHomeComponent }: QuizCompletedProps) => {
  const dispatch = useDispatch();
  const { numberCorrectOptions, quizzes, title } = useSelector(
    (rootReducer: RootState) => rootReducer.quizSlice
  );

  useEffect(() => {
    console.log(quizzes);
    dispatch(calculate());
  }, []);

  return (
    <div className={`${style.container} grid grid-cols-2 w-full`}>
      <h1 className={`${style.h1} text-color flex flex-col`}>
        <span className="HeadingLRegular">Quiz completed</span>
        <span className={`${style.spanBold} HeadingLBold`}>You scored...</span>
      </h1>

      <div
        className={`${style.wrapperScore} w-full max-w-[564px] flex flex-col justify-self-end`}
      >
        <div className="mb-8 w-full multiple-selection-color rounded-3xl flex items-center flex-col gap-10 justify-center p-12">
          <CategoryTag title={title as any} showCategory={true} />
          <p className="flex flex-col">
            <span className={`${style.score} Display text-color`}>
              {numberCorrectOptions}
            </span>
            <span className="BodyM text-color2">out of 10</span>
          </p>
        </div>

        <Button
          disabled={false}
          onClick={handleShowHomeComponent}
          text="Play Again"
          className={`${style.button}`}
        />
      </div>
    </div>
  );
};

export default QuizCompleted;
