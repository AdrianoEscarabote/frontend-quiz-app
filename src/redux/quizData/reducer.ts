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
  },
});

export const { setQuizzes, setCategory, setOptionsChosen } = quizSlice.actions;

export default quizSlice.reducer;
