import { useSelector } from "react-redux";
import ToggleThemeButton from "../ToggleThemeButton";
import { RootState } from "@/redux/quizData/quizDataTypes";
import Image from "next/image";
import { HeaderProps } from "./Header";

const Header = ({ showCategory }: HeaderProps) => {
  const { title } = useSelector((state: RootState) => {
    console.log(state.quizSlice);
    return state.quizSlice;
  });

  return (
    <header className="w-full max-w-[1440px] flex justify-between items-center">
      {showCategory !== undefined && title === "Accessibility" ? (
        <>
          <div className={`text-color HeadingS flex items-center gap-6`}>
            <div className="w-14 h-14 bg-[#F6E7FF] rounded-lg flex items-center justify-center">
              <Image
                src={"/assets/icon-accessibility.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <p>Accessibility</p>
          </div>
        </>
      ) : null}

      {showCategory !== undefined && title === "Javascript" ? (
        <>
          <div className={`text-color HeadingS flex items-center gap-6`}>
            <div className="w-14 h-14 bg-[#EBF0FF] rounded-lg flex items-center justify-center">
              <Image
                src={"/assets/icon-js.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <p>Javascript</p>
          </div>
        </>
      ) : null}

      {showCategory !== undefined && title === "CSS" ? (
        <>
          <div className={`text-color HeadingS flex items-center gap-6`}>
            <div className="w-14 h-14 bg-[#E0FDEF] rounded-lg flex items-center justify-center">
              <Image
                src={"/assets/icon-css.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <p>CSS</p>
          </div>
        </>
      ) : null}

      {showCategory !== undefined && title === "HTML" ? (
        <>
          <div className={`text-color HeadingS flex items-center gap-6`}>
            <div className="w-14 h-14 bg-[#FFF1E9] rounded-lg flex items-center justify-center">
              <Image
                src={"/assets/icon-html.svg"}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <p>HTML</p>
          </div>
        </>
      ) : null}

      <div className="flex justify-end w-full">
        <ToggleThemeButton />
      </div>
    </header>
  );
};

export default Header;
