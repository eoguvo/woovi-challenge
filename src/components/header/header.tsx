import { LogoSvgAsset } from "@/assets/index.ts";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = function() {
  return (
    <Box component={Link} to="/" sx={{ mt: "40px!important", display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
      <LogoSvgAsset height={40} />
    </Box>
  );
};

export default Header;
