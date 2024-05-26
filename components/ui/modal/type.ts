import type { PropsWithChildren, ReactNode } from "react";

export type TModal = PropsWithChildren & {
  title?: string;
  okText?: string;
  onOk?: () => void;
  cancelText?: string;
  content?: string;
  icon?: ReactNode;
  open: boolean;
  onClose: () => void;
};
