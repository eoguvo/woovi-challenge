import { Typography } from "@mui/material";
import { styled } from "styled-components";

import { palette } from "@/lib/index.ts";

export const OptionListLabel = styled(Typography)`
  background: #e5e5e5;
  border-radius: 999px;
  padding: 2px 20px;
  
  font-weight: 800;

  top: -17px;
  left: 20px;
  position: absolute;

  z-index: 30;
`;

export const OptionListWrapper = styled.div`
  position: relative;
  color: ${palette.text.primary};
  margin-top: 34px !important;
`;

export const OptionListItemRadio = styled.div`
  width: 26px;
  height: 26px;
  border-width: 2px;
  border-style: solid;
  border-color: #e5e5e5;
  background-color: transparent;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;

  svg {
    transition: all 0.3s ease-in-out;
    opacity: 0;
    transform: scale(0);
  }
`;

export const OptionListItem = styled.div`
  outline-offset: -2px;
  margin-top: -2px;
  outline: 2px solid #e5e5e5;
  background-color: transparent;
  z-index: 10; 
  position: relative;
  
  padding: 22px 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:first-of-type {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  &:last-child {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:hover {
    background: #fafafa;
  }

  &[data-selected="true"] {
    outline: 2px solid ${palette.primary.main};
    background-color: ${palette.primary.light};
    z-index: 20;

    & ${OptionListItemRadio} {
      border-color: ${palette.primary.main};
      background-color: ${palette.primary.main};

      svg {
        opacity: 1 !important;
        transform: scale(1) !important;
      }
    }
  }
`;
