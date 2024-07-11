import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import type { PaymentData } from "@/types/TypePayment";

import { dataMockup } from "@/assets/index.ts";
import { OptionList } from "@/components/index.ts";
import { usePaymentStore, useToast } from "@/stores";

const PaymentMethod = function() {
  const { handleSelection } = usePaymentStore();
  const { openToast } = useToast();

  const navigate = useNavigate();

  const handleSelectItem = function(item: PaymentData) {
    handleSelection(item);
    openToast({ message: "Gerando PIX", type: "loading", time: 1500 });
    setTimeout(() => {
      openToast({ message: "Pix Gerado!", type: "success", time: 1000 });
      navigate("/payment-pix");
    }, 1000);
  };

  return (
    <>
      <Typography variant="h5" component="h5" fontWeight={800} mt="40px !important">
        João, como você quer pagar?
      </Typography>
      <div style={{ width: "90vw", maxWidth: 500 }}>
        <OptionList
          onSelect={handleSelectItem}
          items={dataMockup.slice(0, 1)}
          label="Pix"
        />
        <OptionList
          onSelect={handleSelectItem}
          items={dataMockup.slice(1)}
          label="Pix Parcelado"
        />
      </div>
    </>
  );
};

export default PaymentMethod;
