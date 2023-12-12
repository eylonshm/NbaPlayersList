import { render } from "@testing-library/react";
import ThemeToggle from "./index";

describe("ThemeToggle Component", () => {
  it("renders ThemeToggle component", () => {
    const { container } = render(<ThemeToggle />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("applies custom className to the wrapper", () => {
    const customClassName = "custom-class";
    const { container } = render(<ThemeToggle className={customClassName} />);
    const wrapperElement = container.firstChild;

    expect(wrapperElement).toHaveClass(customClassName);
  });
});
