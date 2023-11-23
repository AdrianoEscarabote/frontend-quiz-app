import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  QuizState,
  setOptionsChosenType,
  setQuizCategoryType,
} from "@/redux/quizData/quizDataTypes";
import { Quiz } from "@/redux/quizData/quizDataTypes";

const initialState: QuizState = {
  quizzes: [],
  title: "",
  optionsChosen: [],
  numberCorrectOptions: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizzes: (state, action: PayloadAction<Quiz[]>) => {
      state.quizzes = action.payload;
    },
    setCategory: (state, action: PayloadAction<setQuizCategoryType>) => {
      state.title = action.payload.title;
    },
    setOptionsChosen: (state, action: PayloadAction<setOptionsChosenType>) => {
      const { option } = action.payload;
      state.optionsChosen.push(option);
    },
    calculate: (state) => {
      let number = 0;
      state.quizzes[0].questions.map((quest) =>
        state.optionsChosen.includes(quest.answer) ? number++ : null
      ).length;
      state.numberCorrectOptions = number;
    },
    resetQuiz: (state) => {
      state.numberCorrectOptions = 0;
      state.optionsChosen = [];
      state.title = "";
      state.quizzes = [];
    },
  },
});

export const {
  setQuizzes,
  setCategory,
  setOptionsChosen,
  calculate,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
