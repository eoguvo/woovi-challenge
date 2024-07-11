import { ReactNode } from "react";
import { Alert, AlertColor, keyframes, Slide, Snackbar } from "@mui/material";

import useToast from "@/stores/toastStore";
import { Autorenew, Check, ErrorOutline, Info, Warning } from "@mui/icons-material";
import { palette } from "@/lib";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Toaster = function() {
  const { toast, closeToast } = useToast();
  const { isOpen, message, type } = toast;

  const severityToColors = {
    success: {
      bg: palette.primary.main,
      text: palette.primary.light,
    },
    error: {
      bg: palette.secondary.main,
      text: palette.primary.light,
    },
    info: {
      bg: palette.secondary.main,
      text: palette.primary.light,
    },
    warning: {
      bg: "red",
      text: palette.primary.light,
    },
    loading: {
      bg: palette.primary.light,
      text: palette.text.primary,
    },
  } as Record<AlertColor, { bg: string; text: string }>;

  const color = severityToColors[type as AlertColor] || severityToColors.success;

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={toast.time || 5000}
      onClose={closeToast}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      sx={{
        width: "90vw",
        maxWidth: 500,
        borderRadius: 10,
        border: "1px solid #E5E5E5",
      }}
      TransitionComponent={Slide}
    >
      <Alert
        variant="filled"
        severity={type as AlertColor}
        onClose={closeToast}
        iconMapping={{
          success: <Check />,
          error: <ErrorOutline />,
          info: <Info />,
          warning: <Warning />,
          loading: <Autorenew sx={{ animation: `${spin} 1.5s ease-in-out infinite` }} />,
        } as Record<AlertColor, ReactNode>}
        sx={{
          width: "100%",
          background: color.bg,
          color: color.text,
          transition: "all 0.3s ease-in-out",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toaster;
