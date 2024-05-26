import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "./modal";

describe("Modal component", () => {
  const modalProps = {
    open: true,
    icon: <div data-testid="icon">Icon</div>,
    title: "Test Modal Title",
    content: "This is a test modal content",
    onClose: jest.fn(),
    onOk: jest.fn(),
    cancelText: "Cancel",
    okText: "OK",
  };

  it("renders correctly when open", () => {
    render(<Modal {...modalProps} />);

    expect(screen.getByText(modalProps.title)).toBeInTheDocument();
    expect(screen.getByText(modalProps.content)).toBeInTheDocument();
    expect(screen.getByText(modalProps.cancelText)).toBeInTheDocument();
    expect(screen.getByText(modalProps.okText)).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("calls onClose when the cancel button is clicked", () => {
    render(<Modal {...modalProps} />);
    fireEvent.click(screen.getByText(modalProps.cancelText));
    expect(modalProps.onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onOk when the OK button is clicked", () => {
    render(<Modal {...modalProps} />);
    fireEvent.click(screen.getByText(modalProps.okText));
    expect(modalProps.onOk).toHaveBeenCalledTimes(1);
  });

  it("does not render when not open", () => {
    render(<Modal {...modalProps} open={false} />);
    expect(screen.queryByText(modalProps.title)).not.toBeInTheDocument();
    expect(screen.queryByText(modalProps.content)).not.toBeInTheDocument();
  });
});
