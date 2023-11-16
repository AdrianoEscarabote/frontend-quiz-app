import useQuizData from "@/hooks/useQuizData";
import QuestionDetails from "../QuestionDetails";
import { useSelector } from "react-redux";
import { Question, RootState } from "@/redux/quizData/quizDataTypes";
import { useEffect, useState } from "react";
import QuizQuestion from "../QuizQuestion";

const QuestionComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const { loading } = useQuizData();
  const { quizzes } = useSelector(
    (rootReducer: RootState) => rootReducer.quizSlice
  );

  useEffect(() => {
    if (!loading) {
      setQuestions(quizzes[0].questions);
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <div className="grid grid-cols-2 w-full">
          <div>
            {currentQuestionIndex < questions.length && (
              <QuestionDetails
                questionTitle={`${questions[currentQuestionIndex].question}`}
                questionNumber={`${currentQuestionIndex + 1}`}
              />
            )}
          </div>
          <div className="flex flex-col relative">
            <QuizQuestion
              currentQuestionIndex={currentQuestionIndex}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionComponent;
