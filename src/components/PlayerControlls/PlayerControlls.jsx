import React, { useEffect } from "react";
import { PlayArrow, SkipNext, SkipPrevious, Pause } from "@mui/icons-material";
import { IconButton, Grid, Stack, Typography, Slider } from "@mui/material";
const PlayerControlls = ({ player }) => {
  const skipStyle = { width: 28, height: 28 };

  return (
    <Stack
      direction="column"
      spacing={2}
      justify="center"
      alignItems="center"
      sx={{ width: "100%" }}
    >
      <Stack
        spacing={1}
        direction="row"
        justifyContent={"center"}
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <IconButton size="small" sx={{ color: "text.primary" }}>
          <SkipPrevious sx={skipStyle} />
        </IconButton>
        <IconButton
          onClick={() => player.togglePlay()}
          size="small"
          sx={{ color: "text.primary" }}
        >
          {true ? (
            <Pause id="toggleplaybtn" sx={{ width: 38, height: 38 }} />
          ) : (
            <PlayArrow sx={{ width: 38, height: 38 }} />
          )}
        </IconButton>
        <IconButton size="small" sx={{ color: "text.primary" }}>
          <SkipNext sx={skipStyle} />
        </IconButton>
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        justifyContent={"center"}
        alignItems="center"
        sx={{ width: "75%" }}
      >
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontSize: 12 }}
        ></Typography>
        <Slider min={0} size="medium" />
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontSize: 12 }}
        ></Typography>
      </Stack>
    </Stack>
  );
};

export default PlayerControlls;
