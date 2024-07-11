import { IconShield, LogoSvgAsset } from "@/assets";
import { Box, Typography } from "@mui/material";

const Footer = function() {
  return (
    <Box component="footer" sx={{ mt: "40px!important", display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
      <IconShield />
      <Typography variant="body2" color="text.lightGray">
        Pagamento 100% seguro via:
      </Typography>
      <div style={{ height: 20 }}>
        <LogoSvgAsset fill="#B2B2B2" height={17} width={55} />
      </div>
    </Box>
  );
};

export default Footer;
