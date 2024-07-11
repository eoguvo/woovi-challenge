import { Stack } from "@mui/material";

import { PaymentTimeline, PaymentDeadline, PaymentSummary, PaymentIdentifier } from "@/components";

const PaymentDetails = function() {
  return (
    <Stack alignItems="center" spacing={2} width="90%" maxWidth={500}>
      <PaymentDeadline />
      <PaymentTimeline />
      <PaymentSummary />
      <PaymentIdentifier />
    </Stack>
  );
};

export default PaymentDetails;
