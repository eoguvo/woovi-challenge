import { atom, useRecoilState } from "recoil";

import type { TypeToast } from "@/types/TypeToast";

const toastStore = atom<TypeToast>({
  key: "toastStore",
  default: {
    isOpen: false,
    message: "",
    type: "",
    time: 5000,
  },
});

const useToast = function() {
  const [toast, setToast] = useRecoilState(toastStore);

  const openToast = function({ message, type, time }: Omit<TypeToast, "isOpen">) {
    setToast({
      isOpen: true,
      message,
      type,
      time: time || 5000,
    });
  };

  const closeToast = function() {
    setToast({
      isOpen: false,
      message: "",
      type: "",
    });
  };

  return {
    toast,
    openToast,
    closeToast,
  };
};

export default useToast;
