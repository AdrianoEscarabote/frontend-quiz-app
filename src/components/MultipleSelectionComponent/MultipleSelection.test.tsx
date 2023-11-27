import { render } from "@testing-library/react";
import MultipleSelection from ".";

describe("Multiple Selection Component", () => {
  it("should render correctly", () => {
    render(<MultipleSelection letter="A" choiceText="qualquer coisa" />);
  });
});
