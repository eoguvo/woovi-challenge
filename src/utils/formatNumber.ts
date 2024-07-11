const NumberFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const formatNumber = (value?: number, fallback = "R$ 0,00") => {
  if (!value || typeof value !== "number") {
    return fallback;
  }
  return NumberFormatter.format(value);
};

export default formatNumber;
