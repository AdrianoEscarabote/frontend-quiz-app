interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface Quiz {
  title: string;
  icon: string;
  questions: Question[];
}
interface setQuizCategoryType {
  title: string;
}

interface QuizState {
  quizzes: Quiz[];
  title: string;
  optionsChosen: string[];
  numberCorrectOptions: number;
}

interface setOptionsChosenType {
  option: string;
}

interface RootState {
  quizSlice: QuizState;
}

export { RootState };

export { Question, Quiz, QuizState, setQuizCategoryType, setOptionsChosenType };
