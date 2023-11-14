import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuizState, setQuizCategoryType } from "./quizDataTypes";
import { Quiz } from "./quizDataTypes";

const initialState: QuizState = {
  quizzes: [],
  title: "",
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
  },
});

export const { setQuizzes, setCategory } = quizSlice.actions;
export default quizSlice.reducer;
