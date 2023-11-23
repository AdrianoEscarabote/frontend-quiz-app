import { RootState } from "@/redux/quizData/quizDataTypes";
import { setQuizzes } from "@/redux/quizData/reducer";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const useQuizData = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { title } = useSelector(
    (rootReducer: RootState) => rootReducer.quizSlice
  );
  const [data, setData] = useState<any>();

  const getData = async () => {
    const responseData = await fetch("/data.json").then((data) => data.json());
    const data = responseData.quizzes.filter((quiz) => quiz.title === title);
    dispatch(setQuizzes(data));
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    loading,
  };
};

export default useQuizData;
