import React from "react";
import { Box, Divider } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NavItem from "../NavItem/NavItem";

const SideNav = () => {

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        width: 230,
        height: "100%",
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
      }}
    >
      <Box p={3}>
        <img src="/Spotify_Logo.png" width={"75%"} alt="Spotify" />
      </Box>
      <NavItem name="Home" Icon={HomeRoundedIcon} target="/" active />
      <NavItem name="Search" Icon={SearchRoundedIcon} target="/search" />
      <Box px={3} py={1}>
        <Divider sx={{ backgroundColor: "#ffffff40" }} />
      </Box>
      {/* renderPlaylists */}
      <Box sx={{ overflowY: "auto", flex: 1 }}>renderPlaylists</Box>
    </Box>
  );
};


export default SideNav;

