import { QRCodeSVG } from "qrcode.react";
import { styled } from "styled-components";

import { palette } from "@/lib/index.ts";

export const QrCodeWrapper = styled(QRCodeSVG)`
  width: 80vw;
  max-width: 332px;
  height: 80vw;
  max-height: 332px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 9px 8px 9px;
  border: 1px solid ${palette.primary.main};
  border-radius: 10px;
`;
