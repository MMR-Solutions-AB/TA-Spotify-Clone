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
import { getSessionStorage, getAccessToken } from "./utils/getAccesToken";
function App({ spotifyApi }) {
  const [isPlayerReady, setIsPlayerReady] = useState(true);

  const [token, setToken] = useState(getSessionStorage);

  async function onMount() {
    const accessToken = getAccessToken();
    if (accessToken) {
      setToken(accessToken);
      sessionStorage.setItem("spotifyToken", accessToken);
      await spotifyApi.setAccessToken(accessToken);
    }
  }

  useEffect(() => {
    onMount();
  }, []);

  return (
    <Box className="App">
      {token ? (
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
              <Route path="/playlist/:id" element={<Playlist />} />
              <Route path="/library" element={<Library />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Box>
          {isPlayerReady && <Player />}
          <MobileNav />
        </Box>
      ) : (
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      )}
    </Box>
  );
}

export default App;
