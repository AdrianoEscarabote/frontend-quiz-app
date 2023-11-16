import Image from "next/image";
import { QuizCategoryProps } from "./QuizCategory";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { setCategory } from "@/redux/quizData/reducer";

const QuizCategory = ({ title, goToQuestion }: QuizCategoryProps) => {
  const dispatch = useDispatch();

  const handleClickButton = () => {
    goToQuestion();
    dispatch(
      setCategory({
        title: title,
      })
    );
  };

  return (
    <button
      className={`${style.shadow} text-color quiz-category-color HeadingS w-full max-w-[564px] h-24 rounded-3xl flex items-center gap-8 p-5`}
      onClick={handleClickButton}
    >
      {title === "Accessibility" ? (
        <>
          <div className="w-14 h-14 rounded-lg bg-[#F6E7FF] flex items-center justify-center">
            <Image
              src={"/assets/icon-accessibility.svg"}
              width={40}
              height={40}
              alt=""
            />
          </div>
          <p>Accessibility</p>
        </>
      ) : null}
      {title === "CSS" ? (
        <>
          <div className="w-14 h-14 rounded-lg bg-[#E0FDEF] flex items-center justify-center">
            <Image src={"/assets/icon-css.svg"} width={40} height={40} alt="" />
          </div>
          <p>CSS</p>
        </>
      ) : null}

      {title === "HTML" ? (
        <>
          <div className="w-14 h-14 rounded-lg bg-[#FFF1E9] flex items-center justify-center">
            <Image
              src={"/assets/icon-html.svg"}
              width={40}
              height={40}
              alt=""
            />
          </div>
          <p>HTML</p>
        </>
      ) : null}
      {title === "Javascript" ? (
        <>
          <div className="w-14 h-14 rounded-lg bg-[#EBF0FF] flex items-center justify-center">
            <Image src={"/assets/icon-js.svg"} width={40} height={40} alt="" />
          </div>
          <p>Javascript</p>
        </>
      ) : null}
    </button>
  );
};

export default QuizCategory;
