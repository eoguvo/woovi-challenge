import { Stack, Typography } from "@mui/material";

import { usePaymentStore } from "@/stores/index";

const PaymentIdentifier = function() {
  const { selectedItem } = usePaymentStore();
  return (
    <Stack justifyContent="space-between" alignItems="center" width="100%" spacing={0.5}>
      <Typography variant="body2" component="p" color="text.lightGray" fontWeight={600}>
        Identificador:
      </Typography>
      <Typography variant="body2" component="p" color="text.primary" fontWeight={800}>
        {selectedItem?.id}
      </Typography>
    </Stack>
  );
};

export default PaymentIdentifier;
