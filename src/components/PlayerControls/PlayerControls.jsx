import React from "react";
import { PlayArrow, SkipNext, SkipPrevious, Pause } from "@mui/icons-material";
import { IconButton, Stack, Typography, Slider } from "@mui/material";
import { formatTime } from "../../utils/formatTime";
import { useEffect } from "react";
import { useState } from "react";
const PlayerControls = ({ player, is_paused, duration, progress }) => {
  const skipStyle = { width: 28, height: 28 };
  console.log(progress);
  const [currentProgress, setCurrentProgress] = useState();



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
        <IconButton
          onClick={() => player.previousTrack()}
          size="small"
          sx={{ color: "text.primary" }}
        >
          <SkipPrevious sx={skipStyle} />
        </IconButton>
        <IconButton
          onClick={() => player.togglePlay()}
          size="small"
          sx={{ color: "text.primary" }}
        >
          {is_paused ? (
            <Pause sx={{ width: 38, height: 38 }} />
          ) : (
            <PlayArrow sx={{ width: 38, height: 38 }} />
          )}
        </IconButton>
        <IconButton
          onClick={() => player.nextTrack()}
          size="small"
          sx={{ color: "text.primary" }}
        >
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
        >
          {formatTime(progress)}
        </Typography>
        <Slider max={duration} value={progress} min={0} size="medium" />
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontSize: 12 }}
        >
          {formatTime(duration)}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default PlayerControls;
