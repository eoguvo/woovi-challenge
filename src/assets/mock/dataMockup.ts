import { uuid } from "@/lib";
import { PaymentData } from "@/types/TypePayment";

const total = 30500;

const dataMockupDirty = [
  {
    installment: 1,
    amount: total,
    total: total,
    cashback: 0.03,
  },
  {
    installment: 2,
    amount: 15300,
    total: 30600,
  },
  {
    installment: 3,
    amount: 10196.66,
    total: 30620,
  },
  {
    installment: 4,
    amount: 7725,
    total: 30900,
    discountFees: 0.03,
  },
  {
    installment: 5,
    amount: 6300,
    total: 31500,
  },
  {
    installment: 6,
    amount: 5283.33,
    total: 31699.98,
  },
  {
    installment: 7,
    amount: 4542.85,
    total: 31800,
  },
];

const dataMockup: Array<PaymentData> = dataMockupDirty.map(function(item) {
  return {
    ...item,
    discountFees: item.discountFees || 0,
    cashback: item.cashback || 0,
    id: uuid(),
  };
});

export default dataMockup;
