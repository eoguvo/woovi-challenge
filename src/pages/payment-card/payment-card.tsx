import { Button, Stack, Typography } from "@mui/material";
import { FieldValues, Form, FormProvider, FormSubmitHandler, useForm } from "react-hook-form";

import { formatNumber } from "@/utils";
import { withSelectedItem } from "@/hoc";
import { PaymentDetails } from "@/components";
import { SelectInput, TextInput } from "@/lib";
import { PaymentItem } from "@/types/TypePayment";

type FormData = {
  name: string;
  document: string;
  card_number: string;
  card_expiration: string;
  card_security_code: string;
  installments: string;
};

const Card = function({ selectedItem }: { selectedItem: PaymentItem }) {
  const methods = useForm<FormData>();
  const installmentCount = selectedItem?.installments || 1;
  const installmentsOptions = Array.from({ length: installmentCount- 1 }, (_, i) => {
    return { value: String(i + 2), label: `${i + 2}x de ${formatNumber(selectedItem?.amount)}` };
  });

  const onSubmit = methods.handleSubmit(async function(data: FormData) {
    console.log(data);
  }) as unknown as FormSubmitHandler<FieldValues>;

  return (
    <FormProvider {...methods}>
      <Form onSubmit={onSubmit}>
        <Typography variant="h5" component="h5" fontWeight={800} mt="40px !important" align="center" width="80%">
          João, pague o restante em {selectedItem?.installments}x no cartão
        </Typography>
        <Stack spacing="21px !important" mt="28px !important" width="90vw" maxWidth={500}>
          <Stack spacing="28px !important" width="100%">
            <TextInput name="name" label="Nome completo" placeholder="Nome completo" />
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
          <Button variant="contained">
            Pagar
          </Button>
        </Stack>
      </Form>
      <PaymentDetails />
    </FormProvider>
  );
};

export default withSelectedItem(Card);
