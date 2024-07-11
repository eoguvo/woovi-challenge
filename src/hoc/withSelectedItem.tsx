import { ComponentType, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import usePaymentStore from "@/stores/paymentStore";
import { PaymentItem } from "@/types/TypePayment";

type InjectedProps = {
  selectedItem: PaymentItem;
};

const withSelectedItem = function<T extends InjectedProps>(Component: ComponentType<T>) {
  return function(props: Omit<T, keyof InjectedProps>) {
    const { selectedItem } = usePaymentStore();
    const navigate = useNavigate();
    useEffect(() => {
      if (!selectedItem) {
        navigate("/");
        return;
      }
    }, [selectedItem]);
    return (
      <Component {...(props as T)} selectedItem={selectedItem!} />
    );
  };
};

export default withSelectedItem;
