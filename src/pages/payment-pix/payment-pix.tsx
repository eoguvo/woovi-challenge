import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { IconCopy, pixQrCode } from "@/assets";
import { formatNumber } from "@/utils";

import { QrCodeWrapper } from "./styles";
import { PaymentDetails } from "@/components";
import { PaymentItem } from "@/types/TypePayment";
import { withSelectedItem } from "@/hoc";

const Payment = function({ selectedItem }: { selectedItem: PaymentItem }) {
  const navigate = useNavigate();

  const amountToPay = formatNumber(selectedItem?.amount);

  const title = (selectedItem?.hasInstallments) ? (
    `João, pague a entrada de ${amountToPay} pelo Pix`
  ) : (
    `João, pague agora o total de ${amountToPay} pelo Pix`
  );

  const handleCopyToClipboard = async function() {
    await navigator.clipboard.writeText(pixQrCode);
    setTimeout(function() {
      const to = selectedItem?.hasInstallments ? "/payment-card" : "/";
      navigate(to);
    }, 1000);
  };

  return (
    <>
      <Typography variant="h5" component="h5" fontWeight={800} mt="40px !important" align="center" width="80%">
        {title}
      </Typography>
      <QrCodeWrapper value={pixQrCode} />
      <Button variant="contained" color="primary" onClick={handleCopyToClipboard} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        Clique para copiar QR CODE
        <IconCopy />
      </Button>
      <PaymentDetails />
    </>
  );
};

export default withSelectedItem(Payment);
