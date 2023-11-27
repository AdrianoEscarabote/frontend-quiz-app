import { useDispatch } from "react-redux";
import Button from "../Button";
import MultipleSelection from "../MultipleSelectionComponent";
import { useState, useEffect } from "react";
import { QuizQuestionProps } from "./QuizQuestion";
import { Question, RootState } from "@/redux/quizData/quizDataTypes";
import useQuizData from "@/hooks/useQuizData";
import { useSelector } from "react-redux";
import { setOptionsChosen } from "@/redux/quizData/reducer";
import style from "./style.module.css";

const QuizQuestion = ({
  currentQuestionIndex,
  setCurrentQuestionIndex,
}: QuizQuestionProps) => {
  const dispatch = useDispatch();
  const { loading } = useQuizData();
  const { quizzes } = useSelector(
    (rootReducer: RootState) => rootReducer.quizSlice
  );

  const [answer, setAnswer] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [correct, setCorret] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("Submit Answer");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (!loading) {
      setQuestions(quizzes[0].questions);
    }
  }, [loading]);

  const handleNextQuestion = () => {
    dispatch(setOptionsChosen({ option: selectedOption }));
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleMarkSelectedOption = (option: string) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    if (!loading && currentQuestionIndex !== 10) {
      setAnswer(questions[currentQuestionIndex]?.answer || "");
    }
    setSelectedOption("");
    setButtonText("Submit Answer");
    setCorret(false);
    setError(false);
    setButtonDisabled(false);
  }, [currentQuestionIndex, questions]);

  const submitAnswer = () => {
    if (answer === selectedOption) {
      setCorret(true);
      setError(false);
    } else {
      setCorret(false);
      setError(true);
    }
    setButtonText("Next Question");
    setButtonDisabled(true);
  };

  return (
    <>
      <div
        className={`${style.container} flex flex-col gap-6 mb-8 w-full items-end`}
      >
        {currentQuestionIndex < questions.length &&
          questions[currentQuestionIndex].options.map((option, index) => (
            <MultipleSelection
              answer={questions[currentQuestionIndex].answer}
              error={error}
              disabled={buttonDisabled}
              correct={selectedOption === option && correct}
              selected={selectedOption === option}
              markSelectOption={() => handleMarkSelectedOption(`${option}`)}
              key={index}
              choiceText={`${option}`}
              letter={index + 1}
            />
          ))}
      </div>
      <Button
        disabled={selectedOption === ""}
        onClick={() => {
          if (buttonText === "Submit Answer") {
            submitAnswer();
          } else {
            handleNextQuestion();
          }
        }}
        text={buttonText}
        className={`${style.button}`}
      />
    </>
  );
};

export default QuizQuestion;
