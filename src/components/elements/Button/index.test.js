import { render, fireEvent } from "@testing-library/react";
import Button from "./index";

describe("Button Component", () => {
  it("renders button with provided text", () => {
    const buttonText = "Click me";
    const { getByText } = render(<Button text={buttonText} />);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders button with provided children", () => {
    const { getByText } = render(<Button>Child Content</Button>);
    const buttonElement = getByText("Child Content");
    expect(buttonElement).toBeInTheDocument();
  });

  it("executes provided onClick function when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button text="Click me" onClick={onClickMock} />
    );
    const buttonElement = getByText("Click me");

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });

  it("applies provided className to the button", () => {
    const customClassName = "custom-class";
    const { container } = render(
      <Button text="Click me" className={customClassName} />
    );
    const buttonElement = container.querySelector(".button");

    expect(buttonElement).toHaveClass(customClassName);
  });
});
