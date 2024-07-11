import { Stack } from "@mui/material";
import { styled } from "styled-components";

export const TimelineItemCheck = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-style: solid;
  border-color: #E5E5E5;
  background-color: white;

  z-index: 20;

  svg {
    opacity: 0;
  }

  &[data-state="current"] {
    border-color: #04d361;
  }

  &[data-state="checked"] {
    border-color: #04d361;
    background-color: #04d361;
    svg {
      opacity: 1;
    }
  }
`;

export const TimelineItemWrapper = styled(Stack)`
  position: relative;
  & + &::before {
    content: "";
    display: block;
    width: 2px;
    height: 32px;
    background-color: #e5e5e5;
    position: absolute;
    left: 7px;
    bottom: 8px;
    z-index: 10;
  }
`;
