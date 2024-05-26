import { Card } from "./card";
import { render } from "@testing-library/react";

describe("Card Test", () => {
  it("should render correctly", () => {
    const { container } = render(<Card title="Title" content="Content" />);
    expect(container).toBeTruthy();
  });
  it("should have title", () => {
    const { getByText } = render(<Card title="Title" content="Content" />);
    expect(getByText("Title")).toBeTruthy();
  });

  it("should have content", () => {
    const { getByText } = render(<Card title="Title" content="Content" />);
    expect(getByText("Content")).toBeTruthy();
  });
  it("should have custom header", () => {
    const { getByText } = render(
      <Card title="Title" content="Content" customHeader={<h1>Custom Header</h1>} />,
    );
    expect(getByText("Custom Header")).toBeTruthy();
  });
});
