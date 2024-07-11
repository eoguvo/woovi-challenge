import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Stack, Typography } from "@mui/material";
import { FieldValues, Form, FormProvider, FormSubmitHandler, useForm } from "react-hook-form";

import { useToast } from "@/stores";
import { formatNumber } from "@/utils";
import { withSelectedItem } from "@/hoc";
import { PaymentDetails } from "@/components";
import { SelectInput, TextInput } from "@/lib";
import type { PaymentItem } from "@/types/TypePayment";

import paymentCardSchema from "./payment-card.schema";

const generateInstallmentsOptions = function(installments?: number, amount?: number) {
  const length = installments ? installments - 1 : 1;
  const offset = 2;
  return Array.from({ length }, function(_, index) {
    const value = String(index + offset);
    return {
      value,
      label: `${value}x de ${formatNumber(amount)}`,
    };
  });
};

type FormData = {
  fullname: string;
  document: string;
  card_number: string;
  card_expiration: string;
  card_security_code: string;
  installments: string;
};

const Card = function({ selectedItem }: { selectedItem: PaymentItem }) {
  const navigate = useNavigate();
  const { openToast } = useToast();
  const methods = useForm<FormData>({
    resolver: yupResolver(paymentCardSchema),
    mode: "onChange",
  });

  const installmentsOptions = generateInstallmentsOptions(selectedItem?.installments, selectedItem?.amount);

  const onSubmit = methods.handleSubmit(async function(data: FormData) {
    console.log("Received:", data),
    openToast({ message: "Processando pagamento...", type: "loading", time: 1500 });
    setTimeout(() => {
      openToast({ message: "Pago!", type: "success", time: 1000 });
      navigate("/");
    }, 1500);
  }) as unknown as FormSubmitHandler<FieldValues>;

  methods.watch("fullname");

  return (
    <FormProvider {...methods}>
      <Form onSubmit={onSubmit}>
        <Typography variant="h5" component="h5" fontWeight={800} mt="40px !important" align="center" width="80%">
          João, pague o restante em {selectedItem?.installments}x no cartão
        </Typography>
        <Stack spacing="21px !important" mt="28px !important" width="90vw" maxWidth={500}>
          <Stack spacing="28px !important" width="100%">
            <TextInput name="fullname" label="Nome completo" placeholder="Nome completo" />
            <TextInput name="document" label="CPF" placeholder="CPF" mask="999.999.999-99" />
            <TextInput name="card_number" label="Número do cartão" placeholder="Número do cartão" mask="9999-9999-9999-9999" />
            <Stack direction="row" spacing="22px !important">
              <TextInput name="card_expiration" label="Vencimento" placeholder="MM/AA" mask="99/99" />
              <TextInput name="card_security_code" label="CVV" placeholder="CVV" mask="999" />
            </Stack>
            <SelectInput
              name="installments"
              options={installmentsOptions}
              label="Parcelas"
            />
          </Stack>
          <Button variant="contained" type="submit">
            Pagar
          </Button>
        </Stack>
      </Form>
      <PaymentDetails />
    </FormProvider>
  );
};

export default withSelectedItem(Card);
