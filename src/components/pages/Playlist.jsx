import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { getSpecifikPlaylist } from "../../store/playlistSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SongTable from "../SongTable/SongTable";

const Playlist = ({ spotifyApi }) => {
  const [playlistInfo, setPlaylistInfo] = useState({ name: "", image: "" });
  const [songs, setSongs] = useState([]);
  const { id } = useParams();
  const state = useSelector((state) => state.playlist);
  const dispatch = useDispatch();

  useEffect(() => {
    const getList = async () => {
      dispatch(getSpecifikPlaylist({ spotifyApi, id }));
      getPlaylistInfo();
    };
    getList();
  }, [id]);

  const getPlaylistInfo = () => {
    setPlaylistInfo({
      image: state.playlist.images[0].url,
      name: state.playlist.name,
    });
    const { tracks } = state.playlist;
    const formatedSongs = formatSongData(tracks.items);
    setSongs(formatedSongs);
  };

  const formatSongData = (songs) => {
    return songs.map((song, i) => {
      const { track } = song;
      track.contextUri = `spotify:playlist:${id}`;
      track.position = i;
      return track;
    });
  };
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
          src={"playlistInfo.image"}
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
            {playlistInfo.name}
          </Typography>
        </Box>
      </Box>
      {/*       <SongTable
        songs={songs}
        loading={state.playlistStatus.isLoading}
        spotifyApi={spotifyApi}
      /> */}
    </Box>
  );
};

export default Playlist;
