import { render } from "@testing-library/react";
import QuizCategory from ".";

describe("Quiz Category", () => {
  it("should render correctly", () => {
    render(<QuizCategory category="Javascript" />);
  });
});
