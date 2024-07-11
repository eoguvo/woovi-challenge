import { atom, useRecoilState } from "recoil";

import type { PaymentData, PaymentItem } from "@/types/TypePayment";

const paymentStore = atom<PaymentItem | null>({
  key: "paymentStore",
  default: null,
});

const usePaymentStore = function() {
  const [selectedItem, setSelectedItem] = useRecoilState(paymentStore);
  const hasSelectedItem = selectedItem !== null;

  const handleSelection = function(item: PaymentData) {
    setSelectedItem({
      ...item,
      hasInstallments: item.installment > 1,
      installments: item.installment,
    });
  };

  return {
    selectedItem,
    handleSelection,
    hasSelectedItem,
  };
};

export default usePaymentStore;

