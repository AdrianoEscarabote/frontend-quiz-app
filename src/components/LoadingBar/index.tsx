import { LoadingBarProps } from "./LoadingBar";
import style from "./style.module.css";

const LoadingBar = ({ percentage }: LoadingBarProps) => {
  const validPercentage = Math.min(100, Math.max(0, percentage));
  const widthStyle = `${validPercentage * 9.7}%`;

  return (
    <div
      className={`${style.loading} rounded-full multiple-selection-color relative flex w-ful max-w-[465px] h-4 p-1 flex-col justify-center items-start`}
    >
      <div
        style={{ width: widthStyle }}
        className={`absolute h-2 bg-pink rounded-full`}
      ></div>
    </div>
  );
};

export default LoadingBar;
