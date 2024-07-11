import { Typography } from "@mui/material";

import { dataMockup } from "@/assets/index.ts";
import { OptionList } from "@/components/index.ts";

const PaymentMethod = function() {
  return (
    <>
      <Typography variant="h5" component="h5" fontWeight={800} mt="40px !important">
        João, como você quer pagar?
      </Typography>
      <div style={{ width: "90vw", maxWidth: 500 }}>
        <OptionList items={dataMockup.slice(0, 1)} label="Pix" />
        <OptionList items={dataMockup.slice(1)} label="Pix Parcelado" />
      </div>
    </>
  );
};

export default PaymentMethod;
