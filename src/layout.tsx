import { StrictMode } from "react";
import { RecoilRoot } from "recoil";
import { Outlet } from "react-router-dom";
import { CssBaseline, Stack, StyledEngineProvider, ThemeProvider } from "@mui/material";

import { materialTheme } from "@/lib";
import { Footer, Header } from "@/components";

const Layout = function() {
  return (
    <StrictMode>
      <RecoilRoot>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
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
