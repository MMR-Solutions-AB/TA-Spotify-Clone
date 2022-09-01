import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Avatar, Button } from "@mui/material";
import { getAccessTokenFromStorage } from "../../utils/getAccessTokenFromStorage";
import PlayerControlls from "../PlayerControlls/PlayerControlls";

const Player = ({ spotifyApi }) => {
  const track = {
    name: "",
    album: {
      images: [{ url: "" }],
    },
    artists: [{ name: "" }],
  };

  const [localPlayer, setPlayer] = useState(undefined);
  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);
  const [current_track, setTrack] = useState(track);

  const transferPlayback = async (device_id) => {
    await spotifyApi.transferMyPlayback([device_id], true);
  };

  useEffect(() => {
    const token = getAccessTokenFromStorage();
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    /* ----------------------------------------------------------------- */

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb) => {
          cb(token);
        },
        volume: 0.5,
      });
      setPlayer(player);
      /* ----------------------------------------------------------------- */

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", { device_id, player });
        transferPlayback(device_id);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      /* ----------------------------------------------------------------- */

      player.addListener("player_state_changed", (state) => {
        if (!state) {
          return;
        }
        setTrack(state.track_window.current_track);
        setPaused(state.paused);

        player.getCurrentState().then((state) => {
          !state ? setActive(false) : setActive(true);
        });
      });
      /* ----------------------------------------------------------------- */

      player.connect();
    };
  }, []);

  const togglePlayer = () => {
    localPlayer && localPlayer.togglePlay();
  };

  return (
    <Box>
      <Grid
        container
        px={3}
        sx={{
          bgcolor: "Background.paper",
          height: 100,
          width: "100%",
          borderTop: "1px solid #292929",
        }}
      >
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Avatar
            src={current_track.album.images[0].url}
            alt={"#"}
            variant="square"
            sx={{ width: 56, height: 56, marginRight: 2 }}
          />
          <Box>
            <Typography sx={{ color: "text.primary", fontSize: 14 }}>
              {current_track.name}
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 12 }}>
              {current_track.artists[0].name}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            display: { xs: "none", md: "flex" },
            flex: 1,
            justifyContent: { xs: "flex-end", md: "center" },
            alignItems: "center",
          }}
        >
          <PlayerControlls player={localPlayer} />
        </Grid>
        {/* Volymy */}
        <Button onClick={() => togglePlayer()}>Playit</Button>
      </Grid>
      {/* Overlay */}
    </Box>
  );
};

export default Player;
