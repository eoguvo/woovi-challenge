import { Stack, Typography } from "@mui/material";

import { IconChevron } from "@/assets";
import { formatNumber } from "@/utils";
import { usePaymentStore } from "@/stores/index";

const PaymentSummary = function() {
  const { selectedItem } = usePaymentStore();
  return (
    <Stack width="100%" spacing={2} alignContent="center">
      <Stack direction="row" justifyContent="space-between" alignItems="end" width="100%">
        <Typography variant="body2" component="p" color="text.primary" fontWeight={600}>
          CET: 0,5%
        </Typography>
        <Typography variant="body2" fontSize={18} component="p" color="text.primary" fontWeight={800}>
          {formatNumber(selectedItem?.total)}
        </Typography>
      </Stack>
      <div style={{ width: "100%", height: 2, backgroundColor: "#E5E5E5" }} />
      <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%" sx={{ cursor: "pointer" }}>
        <Typography variant="body1" component="p" color="text.primary" fontWeight={800}>
          Como funciona?
        </Typography>
        <IconChevron />
      </Stack>
      <div style={{ width: "100%", height: 2, backgroundColor: "#E5E5E5" }} />
    </Stack>
  );
};

export default PaymentSummary;
