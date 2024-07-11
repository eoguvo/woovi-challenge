import { string } from "yup";

const validateCpf = (cpf: string) => {
  const calculateDigitalChecker = (slice: number) => {
    const sum = cpf
      .slice(0, slice)
      .split("")
      .map(Number)
      .reduce((acc, digit, index) => acc + digit * (slice + 1 - index), 0);
    const rest = sum % 11;
    return rest < 2 ? 0 : 11 - (rest);
  };

  if (cpf.split("").every((digit) => digit === cpf[0])) {
    return false;
  }

  const firstDigitIndex = 9;
  const secondDigitIndex = 10;

  const digitsToVerify = [firstDigitIndex, secondDigitIndex];

  for (const digitVerifier of digitsToVerify) {
    const digitVerifierResult = calculateDigitalChecker(digitVerifier);
    if (digitVerifierResult !== parseInt(cpf.charAt(digitVerifier), 10)) {
      return false;
    }
  }

  return true;
};

const validateCnpj = (cnpj: string) => {
  const firstMultiplier = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  const secondMultiplier = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  const calculateDigitalChecker = (multiplier: Array<number>) => {
    let sum = 0;
    multiplier.forEach((multiplierValue, index) => {
      sum += parseInt(cnpj.charAt(index), 10) * multiplierValue;
    });

    const rest = sum % 11;
    return rest < 2 ? 0 : 11 - rest;
  };

  const firstDigit = calculateDigitalChecker(firstMultiplier);
  const secondDigit = calculateDigitalChecker(secondMultiplier);

  const verifyingDigit = `${cnpj[12]}${cnpj[13]}`;

  const digitCalculated = `${firstDigit}${secondDigit}`;

  return verifyingDigit === digitCalculated;
};


const isValidCpfCnpj = function(message: string) {
  return string().test("isValidCpfCnpj", message, function(value, { createError }) {
    if (!value) {
      return true;
    }

    const acceptedLengths = [11, 14];
    const hasLengthOfDocument = acceptedLengths.includes(value.length);

    if (!hasLengthOfDocument) {
      return createError({ message: "Documento deve ter 11 ou 14 caracteres" });
    }

    const formatedCpfCnpj = value.replace(/[/.-]/g, "");

    if (formatedCpfCnpj.length === 11) {
      const isValidCpf = validateCpf(formatedCpfCnpj);
      if (!isValidCpf) {
        return createError({ message: "CPF inválido" });
      }
      return true;
    }

    if (formatedCpfCnpj.length === 14) {
      const isValidCnpj = validateCnpj(formatedCpfCnpj);
      if (isValidCnpj) {
        return true;
      }
      return createError({ message: "CNPJ inválido" });
    }

    return true;
  });
};

declare module "yup" {
  interface StringSchema {
    isValidDocument(message?: string): StringSchema;
  }
}

export default isValidCpfCnpj;
