import { yup } from "@/lib";
import { TestContext } from "yup";

const removeNonDigits = function(value: string) {
  return value.replace(/\D/g, "");
};

const isValidExpiration = function<T = unknown, TContext = object>(value: T, context: TestContext<TContext>) {
  const { createError } = context;
  if (!value || typeof value !== "string") {
    return true;
  }

  const isValidLength = value.length === 5;
  if (!isValidLength) {
    return createError({ message: "Data de validade no formato inválido" });
  }

  const [month, year] = value.split("/").map(Number);
  if (!month || !year) {
    return createError({ message: "Data de validade no formato inválido" });
  }

  if (month > 12 || month < 1) {
    return createError({ message: "Mês inválido" });
  }

  const today = new Date();
  const prefixYear = today.getFullYear().toString().slice(0, 2);
  const serializedYear = Number(`${prefixYear}${year}`);

  const cardExpirationDate = new Date(`${serializedYear}-${month}-01T00:00:00`);

  if (cardExpirationDate <= today) {
    return createError({ message: "Cartão expirado" });
  }

  return true;
};

const isInRange = function(min: number, max: number, outOfRangeMessage: string = "Valor inválido") {
  return function<T = unknown, TContext = object>(value: T, context: TestContext<TContext>) {
    const parsedValue = Number(value);
    if (isNaN(parsedValue)) {
      return true;
    }

    if (parsedValue < min || parsedValue > max) {
      return context.createError({ message: outOfRangeMessage });
    }

    return true;
  };
};

const lengthRange = function(min: number, max: number, entity: string = "") {
  return function<T = unknown, TContext = object>(value: T, context: TestContext<TContext>) {
    const { createError } = context;
    if (!value || typeof value !== "string") {
      return true;
    }

    if (value.length < min) {
      return createError({ message: `${entity} deve ter pelo menos ${min} caracteres` });
    }

    if (value.length > max) {
      return createError({ message: `${entity} deve ter no máximo ${max} caracteres` });
    }

    return true;
  };
};

const paymentCardSchema = yup.object().shape({
  fullname: yup.string()
    .test("lengthRange", "Nome inválido", lengthRange(3, 256, "Nome"))
    .required("Nome é obrigatório"),
  card_number: yup.string()
    .transform(removeNonDigits)
    .min(15, "Número do cartão deve ter pelo menos 15 caracteres")
    .max(16, "Número do cartão deve ter no máximo 16 caracteres")
    .required("Número do cartão é obrigatório"),
  card_expiration: yup.string()
    .test("isValidExpiration", "Data de validade inválida", isValidExpiration)
    .required("Data de validade é obrigatória"),
  card_security_code: yup.string()
    .transform(removeNonDigits)
    .min(3, "CVV deve ter pelo menos 3 caracteres")
    .max(4, "CVV deve ter no máximo 4 caracteres")
    .required("CVV é obrigatório"),
  installments: yup.string()
    .transform(removeNonDigits)
    .test("isInRange", "Parcelas inválida", isInRange(1, 7, "Parcelas inválidas"))
    .required("Selecione ao menos uma parcela"),
  document: yup.string()
    .isValidDocument("CPF inválido")
    .required("CPF é obrigatório"),
});

export default paymentCardSchema;
