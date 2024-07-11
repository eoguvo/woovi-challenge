import { AlertColor } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const palette = {
  primary: {
    main: "#04D361",
    light: "#F4FBF9",
  },
  secondary: {
    main: "#133A6F",
    dark: "#113463",
  },
  background: {
    default: "#FFFFFF",
  },
  text: {
    primary: "#4D4D4D",
    secondary: "#04D361",
    lightGray: "#B2B2B2",
    mediumGray: "#AFAFAF",
  },
};

const theme = createTheme({
  palette: palette,
  typography: {
    fontFamily: "Nunito, \"Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
    fontWeightBold: 800,
    fontWeightMedium: 600,
    body2: {
      lineHeight: 1,
    },
    h5: {
      color: palette.text.primary,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            "textTransform": "none",
            "border": "none",
            "backgroundColor": palette.secondary.main,
            "color": "#fff",
            "borderRadius": 8,
            "fontWeight": 600,
            "boxShadow": "none !important",
            "&:hover": {
              backgroundColor: palette.secondary.dark,
            },
            "&:active": {
              backgroundColor: palette.secondary.dark,
            },
          },
        },
      ],
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "rgba(0, 0, 0, 0.6)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "16px",
          backgroundColor: palette.secondary.main,
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          width: "90vw",
          maxWidth: 500,
        },
      },
    },
    MuiAlert: {
      variants: [
        {
          props: { variant: "filled", severity: "success" },
          style: {
            backgroundColor: palette.primary.main,
            color: palette.text.primary,
          },
        },
        {
          props: { variant: "filled", severity: "loading" as AlertColor },
          style: {
            backgroundColor: palette.secondary.main,
            color: palette.primary.light,
          },
        },
      ],
    },
  },
});

export default theme;
