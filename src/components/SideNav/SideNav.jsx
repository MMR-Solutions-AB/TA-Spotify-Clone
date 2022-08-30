import React from "react";
import { Box, Divider } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NavItem from "../NavItem/NavItem";
import { useSelector } from "react-redux";
import NavPlaylist from "../NavPlaylist/NavPlaylist";

const SideNav = () => {
  const state = useSelector((state) => state.playlist);

  const renderPlaylist = () => {
    if (state.isLoading) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, idx) => {
        return <NavPlaylist key={idx} loading={state.isLoading} />;
      });
    }
    return state.playList.map((playlist, idx) => {
      return <NavPlaylist key={idx} id={playlist.id} name={playlist.name} />;
    });
  };

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
      <Box sx={{ overflowY: "auto", flex: 1 }}>{renderPlaylist()}</Box>
    </Box>
  );
};

export default SideNav;
