import { render, screen } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { Input } from "./input";

const ControlledComponent = (props: any) => {
  const { control } = useForm();
  return <Input control={control} {...props} />;
};

describe("Input component", () => {
  const renderInput = (props: any) => {
    return render(<ControlledComponent {...props} />);
  };

  it("renders correctly with label and required asterisk", () => {
    renderInput({ name: "test", label: "Test Label", required: true });
    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders correctly without label", () => {
    renderInput({ name: "test" });
    expect(screen.queryByText("Test Label")).not.toBeInTheDocument();
  });
});
