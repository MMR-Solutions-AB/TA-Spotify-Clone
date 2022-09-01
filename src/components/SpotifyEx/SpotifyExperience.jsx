import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import { getAccessTokenFromStorage } from "../../utils/getAccessTokenFromStorage";
import Playlist from "./components/pages/Playlist";
import Library from "./components/pages/Library";
import Home from "./components/pages/Home";
import SideNav from "./components/SideNav/SideNav";
import MobileNav from "./components/MobilNav/MobileNav";
import Player from "./components/Player/Player";
import { getPlaylist } from "./store/playlistSlice";
import { useDispatch, useSelector } from "react-redux";
const SpotifyExperience = ({spotifyApi}) => {
  const [isPlayerReady, setIsPlayerReady] = useState(true);
  const [token, setToken] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = getAccessTokenFromStorage();

    const onMount = async () => {
      await spotifyApi.setAccessToken(accessToken);
      dispatch(getPlaylist(spotifyApi));
    };

    /* If token, call function */
    if (accessToken) {
      setToken(accessToken);
      onMount();
    }
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ flex: 1, overflowY: "auto", display: "flex" }}>
        <SideNav />
        <Routes>
          <Route
            path="/playlist/:id"
            element={<Playlist spotifyApi={spotifyApi} />}
          />
          <Route path="/library" element={<Library />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
      {token && <Player />}
      <MobileNav />
    </Box>
  );
};

export default SpotifyExperience;
