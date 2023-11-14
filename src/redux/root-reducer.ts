import { combineReducers } from "@reduxjs/toolkit";
import quizSlice from "./quizData/reducer";

const rootReducer = combineReducers({
  quizSlice,
});
export default rootReducer;
