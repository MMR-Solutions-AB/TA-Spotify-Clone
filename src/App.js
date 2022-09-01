import { useEffect, useState } from "react";
import Login from "./components/pages/Login";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { getAccessToken } from "./utils/getAccesToken";
import { getAccessTokenFromStorage } from "./utils/getAccessTokenFromStorage";
import SpotifyExperience from "./components/SpotifyEx/SpotifyExperience";

function App({ spotifyApi }) {
  const [token, setToken] = useState(getAccessTokenFromStorage);

  useEffect(() => {
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
    onMount();
  }, []);

  return (
    <Box className="App">
      {token ? (
        <SpotifyExperience spotifyApi={spotifyApi} />
      ) : (
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      )}
    </Box>
  );
}

export default App;
