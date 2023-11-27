import { useEffect, useState } from "react";
import { MultipleSectionProps } from "./MultipleSelection";
import style from "./style.module.css";
import Image from "next/image";

const MultipleSelection = ({
  letter,
  choiceText,
  markSelectOption,
  selected,
  correct,
  error,
  disabled,
  answer,
}: MultipleSectionProps) => {
  const [questionLetter, setQuestionLetter] = useState<string>("");

  const handleLetter = () => {
    switch (letter) {
      case 1:
        setQuestionLetter("A");
        break;
      case 2:
        setQuestionLetter("B");
        break;
      case 3:
        setQuestionLetter("C");
        break;
      case 4:
        setQuestionLetter("D");
        break;
    }
  };

  useEffect(() => {
    handleLetter();
  }, [letter]);

  return (
    <button
      onClick={markSelectOption}
      className={`${style.shadow} ${
        selected && !correct ? style.selected : null
      } ${
        style.button
      } text-color relative multiple-selection-color rounded-3xl HeadingS py-[18x] px-[20px] flex items-center gap-8 w-full max-w-[564px] min-h-[92px] h-full border-3
        ${correct ? style.correct : null} 
        ${error && selected ? style.error : null} 
        ${disabled ? "pointer-events-none" : ""}
      `}
    >
      <div
        className={`${style.wrapper_letter} relative w-14 h-14 rounded-lg bg-[#F4F6FA] flex items-center justify-center`}
      >
        <span className="text-gray w-14 h-14 grid place-content-center">
          {questionLetter}
        </span>
      </div>
      <span className={`${style.span} text-start pr-9`}>{choiceText}</span>
      {correct ? (
        <Image
          src={"/assets/icon-correct.svg"}
          alt="icon correct"
          width={40}
          height={40}
          className={`${style.icon} absolute right-5`}
        />
      ) : null}
      {error && answer === choiceText ? (
        <Image
          src={"/assets/icon-correct.svg"}
          alt="icon correct"
          width={40}
          height={40}
          className={`${style.icon} absolute right-5`}
        />
      ) : null}
      {error && selected ? (
        <Image
          src={"/assets/icon-error.svg"}
          alt="icon error"
          width={40}
          height={40}
          className={`${style.icon} absolute right-5`}
        />
      ) : null}
    </button>
  );
};

export default MultipleSelection;
