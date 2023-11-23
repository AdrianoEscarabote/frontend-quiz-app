import { useSelector } from "react-redux";
import ToggleThemeButton from "../ToggleThemeButton";
import { RootState } from "@/redux/quizData/quizDataTypes";
import { HeaderProps } from "./Header";
import CategoryTag from "../CategoryTag";

const Header = ({ showCategory }: HeaderProps) => {
  const { title } = useSelector((state: RootState) => {
    return state.quizSlice;
  });

  return (
    <header className="w-full max-w-[1440px] flex justify-between items-center">
      <CategoryTag showCategory={showCategory} title={title as any} />

      <div className="flex justify-end w-full">
        <ToggleThemeButton />
      </div>
    </header>
  );
};

export default Header;
