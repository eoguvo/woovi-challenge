export type TypeToastType = "success" | "error" | "info" | "loading" | "";

export type TypeToast = {
  isOpen: boolean;
  message: string;
  type: TypeToastType;
  time?: number;
};
