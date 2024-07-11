import { StrictMode } from "react";
import { RecoilRoot } from "recoil";
import { createPortal } from "react-dom";
import { Outlet } from "react-router-dom";

import {
  Stack,
  CssBaseline,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material";

import { materialTheme } from "@/lib";
import { Footer, Header, Toaster } from "@/components";

const Layout = function() {
  return (
    <StrictMode>
      <RecoilRoot>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          {createPortal(<Toaster />, document.getElementById("toaster")!)}
          <ThemeProvider theme={materialTheme}>
            <Stack direction="column" spacing={2.5} paddingBottom={3.5} alignItems="center">
              <Header />
              <Outlet />
              <Footer />
            </Stack>
          </ThemeProvider>
        </StyledEngineProvider>
      </RecoilRoot>
    </StrictMode>
  );
};

export default Layout;
