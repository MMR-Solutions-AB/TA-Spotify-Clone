import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const NavItem = ({ name, Icon, target, active }) => {
  return (
    <Link to={target} style={{ textDecoration: "none" }}>
      <Box
        px={3}
        py={1}
        sx={{
          color: active ? "text.primary" : "text.secondary",
          display: "flex",
          alignItems: "center",
          fontWeight: "bold",
          cursor: "pointer",
          "&:hover": { color: "white" },
          transitions: "color 0.2s ease-in-out",
          fontSize: 14,
        }}
      >
        {Icon && <Icon sx={{ fontSize: 28, marginRight: 1 }} />}
        {name}
      </Box>
    </Link>
  );
};

export default NavItem;
