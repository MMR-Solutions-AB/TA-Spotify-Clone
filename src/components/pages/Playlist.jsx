import React from "react";
import { Avatar, Box, Typography } from "@mui/material";


const Playlist = () => {

  return (
    <Box
      id="Playlist__page"
      sx={{ bgcolor: "background.paper", flex: 1, overflowY: "auto" }}
    >
      <Box
        p={{ xs: 3, md: 4 }}
        sx={{
          width: "100%",
          background: "linear-gradient(0deg, #121212 0%, #F0790070 100%);",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: { xs: "flex-start", md: "flex-end", xl: "center" },
          gap: 3,
          boxSizing: "border-box",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Avatar
          /* playlistInfo?.image */
          src={"#"}
          variant="square"
          alt="Bieber"
          sx={{
            boxShadow: 15,
            width: { sx: "100%", md: 235 },
            height: { sx: "100%", md: 235 },
          }}
        />
        <Box>
          <Typography
            sx={{ fontSize: 12, fontWeight: "bold", color: "text.primary" }}
          >
            Playlist
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 42, md: 72 },
              fontWeight: "bold",
              color: "text.primary",
            }}
          >
            {/* playlistInfo?.name */}
            playlistInfo?.name
          </Typography>
        </Box>
      </Box>
      {/* SongTable Component */}
      <span>SongTable Component</span>
    </Box>
  );
};

export default Playlist;
