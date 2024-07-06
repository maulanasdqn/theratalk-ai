export type TNotify = {
  show?: boolean;
  type?: "success" | "error";
  position?: "top" | "bottom";
  message: string;
};
