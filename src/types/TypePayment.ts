export type PaymentItem = {
  amount: number;
  installments: number;
  hasInstallments: boolean;
  total: number;
  cashback: number;
  id: string;
}

export type PaymentData = {
  amount: number;
  installment: number;
  total: number;
  cashback: number;
  discountFees: number;
  id: string;
}
