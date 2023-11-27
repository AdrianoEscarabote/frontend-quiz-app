interface MultipleSectionProps {
  letter: number;
  choiceText: string;
  markSelectOption: () => void;
  selected: boolean;
  correct: boolean;
  disabled: boolean;
  error: boolean;
  answer: string;
}

export { MultipleSectionProps };
