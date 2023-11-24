import style from "./style.module.css";

const WelcomeSection = () => {
  return (
    <section className={`${style.container} flex flex-col gap-12`}>
      <h1 className={`${style.h1} flex flex-col items-start text-color`}>
        <span className="HeadingLRegular">Welcome to the</span>
        <span className={`${style.span_bold} HeadingLBold`}>
          Frontend Quiz!
        </span>
      </h1>
      <p className={`${style.p} BodyS text-color2`}>
        Pick a subject to get started.
      </p>
    </section>
  );
};

export default WelcomeSection;
