import { render } from "@testing-library/react";
import QuestionDetails from ".";

describe("QuestionDetails", () => {
  it("should render correctly", () => {
    render(<QuestionDetails questionNumber="0" questionTitle="title" />);
  });
});
