interface Option {
  value: string;
}

interface Question {
  question: string;
  options: Option[];
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
}

interface RootState {
  quizSlice: QuizState;
}

export { RootState };

export { Option, Question, Quiz, QuizState, setQuizCategoryType };
