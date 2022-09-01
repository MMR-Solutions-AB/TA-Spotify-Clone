import { useEffect, useState } from "react";
import Login from "./components/pages/Login";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Playlist from "./components/pages/Playlist";
import Library from "./components/pages/Library";
import Home from "./components/pages/Home";
import SideNav from "./components/SideNav/SideNav";
import MobileNav from "./components/MobilNav/MobileNav";
import Player from "./components/Player/Player";
import { getAccessToken } from "./utils/getAccesToken";
import { getAccessTokenFromStorage } from "./utils/getAccessTokenFromStorage";
import { getPlaylist } from "./store/playlistSlice";
import { useDispatch, useSelector } from "react-redux";
import SpotifyExperience from "./components/SpotifyEx/SpotifyExperience";

function App({ spotifyApi }) {
  const [isPlayerReady, setIsPlayerReady] = useState(true);
  const [token, setToken] = useState(getAccessTokenFromStorage);
  const dispatch = useDispatch();

  const onMount = async () => {
    let accessToken = getAccessToken();
    if (getAccessTokenFromStorage()) {
      accessToken = getAccessTokenFromStorage();
    }
    if (accessToken) {
      setToken(accessToken);
      sessionStorage.setItem("spotifyToken", accessToken);
      window.location.hash = "";
    }
  };

  useEffect(() => {
    onMount();
    console.log(token);
  }, []);

  return (
    <Box className="App">
      {token ? (
        <SpotifyExperience />
      ) : (
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      )}
    </Box>
  );
}

export default App;
