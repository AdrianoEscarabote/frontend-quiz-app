import Image from "next/image";
import style from "./style.module.css";
import { CategoryTagProps } from "./CategoryTag";

const CategoryTag = ({ showCategory, title }: CategoryTagProps) => {
  return (
    <>
      {showCategory !== undefined && title === "Accessibility" ? (
        <>
          <div
            className={`${style.container} text-color HeadingS flex items-center gap-6`}
          >
            <div
              className={`${style.wrapper_icon} w-14 h-14 bg-[#F6E7FF] rounded-lg flex items-center justify-center`}
            >
              <Image
                src={"/assets/icon-accessibility.svg"}
                width={40}
                height={40}
                alt="icon accessibility"
              />
            </div>
            <p className={`${style.p}`}>Accessibility</p>
          </div>
        </>
      ) : null}

      {showCategory !== undefined && title === "Javascript" ? (
        <>
          <div
            className={`${style.container} text-color HeadingS flex items-center gap-6`}
          >
            <div
              className={`${style.wrapper_icon} w-14 h-14 bg-[#EBF0FF] rounded-lg flex items-center justify-center`}
            >
              <Image
                src={"/assets/icon-js.svg"}
                width={40}
                height={40}
                alt="icon javascript"
              />
            </div>
            <p className={`${style.p}`}>Javascript</p>
          </div>
        </>
      ) : null}

      {showCategory !== undefined && title === "CSS" ? (
        <>
          <div
            className={`${style.container} text-color HeadingS flex items-center gap-6`}
          >
            <div
              className={`${style.wrapper_icon} w-14 h-14 bg-[#E0FDEF] rounded-lg flex items-center justify-center`}
            >
              <Image
                src={"/assets/icon-css.svg"}
                width={40}
                height={40}
                alt="icon css"
              />
            </div>
            <p className={`${style.p}`}>CSS</p>
          </div>
        </>
      ) : null}

      {showCategory !== undefined && title === "HTML" ? (
        <>
          <div
            className={`${style.container} text-color HeadingS flex items-center gap-6`}
          >
            <div
              className={`${style.wrapper_icon} w-14 h-14 bg-[#FFF1E9] rounded-lg flex items-center justify-center`}
            >
              <Image
                src={"/assets/icon-html.svg"}
                width={40}
                height={40}
                alt="icon html"
              />
            </div>
            <p className={`${style.p}`}>HTML</p>
          </div>
        </>
      ) : null}
    </>
  );
};

export default CategoryTag;
