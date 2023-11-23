import { render, screen } from "@testing-library/react";
import CategoryTag from ".";

describe("Category Tag", () => {
  it("should render correctly", () => {
    render(<CategoryTag title="HTML" showCategory={true} />);
  });

  it("should render with the correct category", () => {
    render(<CategoryTag title="Accessibility" showCategory={true} />);

    const iconElement = screen.getByAltText("icon accessibility");
    expect(iconElement).toBeInTheDocument();
  });
});
