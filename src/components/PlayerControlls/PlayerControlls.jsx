import React, { useEffect } from "react";
import { PlayArrow, SkipNext, SkipPrevious, Pause } from "@mui/icons-material";
import { IconButton, Grid, Stack, Typography, Slider } from "@mui/material";
const PlayerControlls = ({ player, is_paused }) => {
  const skipStyle = { width: 28, height: 28 };
  console.log("player in slider cuzzz");
  console.log(player);

  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            <PlayArrow sx={{ width: 38, height: 38 }} />
          ) : (
            <Pause id="toggleplaybtn" sx={{ width: 38, height: 38 }} />
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
          1:23
        </Typography>
        <Slider
          min={0}
          size="medium"
          value={value}
          onChange={handleChange}
          max={100}
        />
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontSize: 12 }}
        >
          3:45
        </Typography>
      </Stack>
    </Stack>
  );
};

export default PlayerControlls;
