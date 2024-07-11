import { Stack, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

import { IconCheck } from "@/assets";
import { formatNumber } from "@/utils";
import { PaymentItem } from "@/types/TypePayment";
import usePaymentStore from "@/stores/paymentStore";

import { TimelineItemCheck, TimelineItemWrapper } from "./styles";

type TimelineItemState = "current" | "checked" | "";

type TimelineItemProps = {
  text: string;
  value: number;
  state?: TimelineItemState;
};

const TimelineItem = function({ text, value, state = "" }: TimelineItemProps) {
  return (
    <TimelineItemWrapper direction="row" justifyContent="space-between" alignItems="center" width="100%">
      <Stack direction="row" spacing={1}>
        <TimelineItemCheck data-state={state}>
          <IconCheck width={7} height={6} />
        </TimelineItemCheck>
        <Typography variant="body2" component="p" color="text.primary" fontWeight={600}>
          {text}
        </Typography>
      </Stack>
      <Typography variant="body2" component="p" color="text.primary" fontWeight={800}>
        {formatNumber(value)}
      </Typography>
    </TimelineItemWrapper>
  );
};

const getTimelineItemState = function(item: PaymentItem | null, pathName: string): TimelineItemProps[] | null {
  if (!item || !item.hasInstallments) {
    return null;
  }

  if (pathName.includes("payment-pix")) {
    const result = [{ text: "1ª entrada no Pix", value: item.amount, state: "current" as TimelineItemState }];
    const arrayWithRange = Array.from({ length: item.installments - 1 }, (_, i) => i + 2);
    arrayWithRange.forEach(function(value) {
      result.push({ text: `${value}ª no cartão`, value: item.amount, state: "" as const });
    });
    return result;
  }

  const result = [{ text: "1ª entrada no cartão", value: item.amount, state: "checked" as TimelineItemState }];
  const arrayWithRange = Array.from({ length: item.installments - 1 }, (_, i) => i + 2);
  arrayWithRange.forEach(function(value, index) {
    const state = index === 0 ? "current" : "";
    result.push({ text: `${value}ª no cartão`, value: item.amount, state });
  });
  return result;
};

const PaymentTimeline = function() {
  const { selectedItem } = usePaymentStore();
  const location = useLocation();
  const timeline = getTimelineItemState(selectedItem, location.pathname);
  if (!timeline) {
    return null;
  }
  return (
    <Stack alignItems="center" spacing={2} width="100%">
      {timeline.map(function(item) {
        return (
          <TimelineItem
            key={item.text}
            text={item.text}
            value={item.value}
            state={item.state}
          />
        );
      })}
      <div style={{ width: "100%", height: 2, backgroundColor: "#E5E5E5" }} />
    </Stack>
  );
};

export default PaymentTimeline;
