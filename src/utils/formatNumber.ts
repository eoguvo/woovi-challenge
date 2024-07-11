
type FormatNumberOptions = {
  locale?: Intl.LocalesArgument;
  currency?: Intl.NumberFormatOptions["currency"];
  style?: Intl.NumberFormatOptions["style"];
};

const formatNumber = (value?: number, fallback = "R$ 0,00", options: FormatNumberOptions = {}) => {
  if (!value || typeof value !== "number") {
    return fallback;
  }
  const NumberFormatter = new Intl.NumberFormat(options.locale || "pt-BR", {
    style: options.style || "currency",
    currency: options.currency || "BRL",
  });
  const formattedValue = NumberFormatter.format(value);
  const normalizedValue = formattedValue.replace(/\s/g, " ");
  return normalizedValue;
};

export default formatNumber;
