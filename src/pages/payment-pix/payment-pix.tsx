import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";

import { useToast } from "@/stores";
import { formatNumber } from "@/utils";
import { withSelectedItem } from "@/hoc";
import { PaymentDetails } from "@/components";
import { IconCopy, pixQrCode } from "@/assets";

import type { PaymentItem } from "@/types/TypePayment";

import { QrCodeWrapper } from "./styles";

const Payment = function({ selectedItem }: { selectedItem: PaymentItem }) {
  const navigate = useNavigate();
  const { openToast } = useToast();

  const amountToPay = formatNumber(selectedItem?.amount);
  const hasInstallments = Boolean(selectedItem?.hasInstallments);

  const title = (hasInstallments) ? (
    `João, pague a entrada de ${amountToPay} pelo Pix`
  ) : (
    `João, pague agora o total de ${amountToPay} pelo Pix`
  );

  const handleCopyToClipboard = async function() {
    openToast({ message: "Processando pagamento", type: "loading", time: 1000 });
    await navigator.clipboard.writeText(pixQrCode);
    setTimeout(function() {
      const message = hasInstallments ? "Entrada paga" : "Pagamento realizado";
      const to = hasInstallments ? "/payment-card" : "/";

      openToast({ message, type: "success", time: 1000 });
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
