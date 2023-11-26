import QuizCategory from "../QuizCategory";
import WelcomeSection from "../WelcomeSection";
import { MenuComponentProps } from "./MenuComponent";
import style from "./style.module.css";

const MenuComponent = ({ goToQuestion }: MenuComponentProps) => {
  return (
    <div className={`${style.container} grid grid-cols-2 gap-28 w-full`}>
      <WelcomeSection />
      <div
        className={`${style.wrapper_quiz} w-full flex flex-col gap-6 justify-self-end`}
      >
        <QuizCategory goToQuestion={goToQuestion} title="Accessibility" />
        <QuizCategory goToQuestion={goToQuestion} title="HTML" />
        <QuizCategory goToQuestion={goToQuestion} title="CSS" />
        <QuizCategory goToQuestion={goToQuestion} title="JavaScript" />
      </div>
    </div>
  );
};

export default MenuComponent;
