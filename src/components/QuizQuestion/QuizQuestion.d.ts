interface QuizQuestionProps {
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (
    update: number | ((prevState: number) => number)
  ) => void;
}

export { QuizQuestionProps };
