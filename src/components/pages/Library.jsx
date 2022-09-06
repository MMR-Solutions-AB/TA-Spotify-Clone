import React from "react";
import { Box, List, Typography } from "@mui/material";

const Library = () => {
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
      <List>List to be seen</List>
    </Box>
  );
};

export default Library;
