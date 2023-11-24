import { render } from "@testing-library/react";
import LoadingBar from ".";

describe("LoadingBar", () => {
  it("should render correctly", () => {
    render(<LoadingBar percentage="60" />);
  });
});
