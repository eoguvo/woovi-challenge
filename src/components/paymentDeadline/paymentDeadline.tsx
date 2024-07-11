import { Stack, Typography } from "@mui/material";

const PaymentDeadline = function() {
  return (
    <Stack>
      <Typography variant="body1" component="p" color="text.lightGray" fontWeight={600}>
        Prazo de pagamento
      </Typography>
      <Typography variant="body1" component="p" color="text.primary" fontWeight={800}>
        15/12/2021 - 08:17
      </Typography>
    </Stack>
  );
};

export default PaymentDeadline;
