import React from "react";
import { Box, List, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import PlaylistItem from "../components/PlaylistItem/PlaylistItem";

const Library = () => {
  const { status, albumList } = useSelector((state) => state.playlist);

  const renderPlaylistItems = () => {
    if (status.isLoading) {
      return [1, 2, 3, 4, 5, 6, 7].map((_, i) => (
        <PlaylistItem key={i} loading={status.isLoading} />
      ));
    }

    return albumList.map((playlist, i) => (
      <PlaylistItem key={i} {...playlist} loading={status.isLoading} />
    ));
  };

  return (
    <Box
      id="Library"
      px={3}
      sx={{
        display: { xs: "flex", md: "none" },
        bgcolor: "background.default",
        flex: 1,
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <Typography
        py={3}
        variant="h2"
        fontWeight="bold"
        sx={{ color: "text.primary", fontSize: 30 }}
      >
        Ditt bibliotek
      </Typography>
      <List>{renderPlaylistItems()}</List>
    </Box>
  );
};

export default Library;
