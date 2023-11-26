"use client";

import Header from "@/components/Header";
import QuestionComponent from "@/components/QuestionComponent";
import QuizCompleted from "@/components/QuizCompleted";
import { RootState } from "@/redux/quizData/quizDataTypes";
import { resetQuiz } from "@/redux/quizData/reducer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MenuComponent from "../MenuComponent";
import style from "./style.module.css";

const HomeComponent = () => {
  const dispatch = useDispatch();
  const { optionsChosen } = useSelector(
    (rootReducer: RootState) => rootReducer.quizSlice
  );

  const [showQuestionComponent, setShowQuestionComponent] =
    useState<boolean>(false);

  const [showMenuComponent, setShowMenuComponent] = useState<boolean>(true);

  const [showQuizComponent, setShowQuizComponent] = useState<boolean>(false);

  const handleChangeShowQuestion = () => {
    setShowQuestionComponent(true);
    setShowMenuComponent(false);
  };

  const handleShowHomeComponent = () => {
    dispatch(resetQuiz());
    setShowMenuComponent(true);
    setShowQuizComponent(false);
  };

  useEffect(() => {
    if (optionsChosen.length === 10) {
      setShowQuestionComponent(false);
      setShowQuizComponent(true);
    }
  }, [optionsChosen]);

  return (
    <main
      className={`${style.main} flex min-h-screen flex-col items-center justify-start p-24 w-full max-w-[1440px] gap-[85px]`}
    >
      <Header showCategory={!showQuestionComponent} />

      {showMenuComponent ? (
        <MenuComponent goToQuestion={handleChangeShowQuestion} />
      ) : null}

      {showQuestionComponent ? <QuestionComponent /> : null}

      {showQuizComponent ? (
        <QuizCompleted handleShowHomeComponent={handleShowHomeComponent} />
      ) : null}
    </main>
  );
};

export default HomeComponent;
