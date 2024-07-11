import { Stack, Typography } from "@mui/material";

import type { PaymentData } from "@/types/TypePayment";

import { formatNumber } from "@/utils";
import { Flag } from "@/components/index.ts";
import { IconCheck } from "@/assets/index.ts";
import { usePaymentStore } from "@/stores/index";

import {
  OptionListItem,
  OptionListItemRadio,
  OptionListLabel,
  OptionListWrapper,
} from "./styles";

const getFlagData = function(item: PaymentData) {
  const shouldRender = Boolean(item.discountFees || item.cashback);
  if (!shouldRender) {
    return { shouldRender: false, title: "", content: "" };
  }
  if (item.cashback) {
    const cashbackValue = item.total * item.cashback;
    const displayCashbackValue = formatNumber(cashbackValue);
    return { shouldRender, title: `🤑 ${displayCashbackValue}`, content: "de volta no seu Pix na hora" };
  }
  const discountFeesPercent = item.discountFees * 100;
  return { shouldRender, title: `-${discountFeesPercent}% de juros`, content: "melhor opção de parcelamento" };
};

type OptionListProps = {
  label?: string;
  items?: PaymentData[];
  onSelect?: (item: PaymentData) => void;
};

const OptionList = function({ label = "OptionList", items = [], onSelect }: OptionListProps) {
  const { selectedItem } = usePaymentStore();
  return (
    <OptionListWrapper>
      <OptionListLabel>{label}</OptionListLabel>
      {items.map(function(item) {
        const flag = getFlagData(item);
        const isSelected = selectedItem?.id === item.id;
        const onClick = function() {
          onSelect?.(item);
        };
        return (
          <OptionListItem key={item.id} onClick={onClick} role="button" tabIndex={0} data-selected={String(isSelected)}>
            <Stack direction="row" justifyContent="space-between" alignItems="start">
              <Stack direction="column">
                <Typography variant="h5" component="span" fontWeight={600}>
                  <Typography variant="h5" component="span" fontWeight={800}>
                    {item.installment}x
                  </Typography>
                  {" "}
                  {formatNumber(item.amount)}
                </Typography>
                <Typography variant="body1" color="text.mediumGray" fontWeight={600}>
                  Total:
                  {" "}
                  {formatNumber(item.total)}
                </Typography>
              </Stack>
              <OptionListItemRadio>
                <IconCheck />
              </OptionListItemRadio>
            </Stack>
            {Boolean(item.cashback) && (
              <Typography variant="body1" component="span" display="flex" gap={0.5} color="primary.main" fontWeight={600}>
                Ganhe
                <Typography variant="body1" fontWeight={800}>
                  {item.cashback * 100}%
                </Typography>
                de Cashback
              </Typography>
            )}
            <Flag
              title={flag.title}
              content={flag.content}
              shouldRender={flag.shouldRender}
            />
          </OptionListItem>
        );
      })}
    </OptionListWrapper>
  );
};

export default OptionList;
