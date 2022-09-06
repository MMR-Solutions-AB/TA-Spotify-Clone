export const authEndpoint = "https://accounts.spotify.com/authorize";
export const clientId = "d5c0f95ce6054352b55c2de78e9f17a1";
export const liveURL = "http://localhost:3000/";
export const devURL = "http://localhost:3000/";
export const redirectURL = liveURL;
export const scopes = [
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-read-private",
  "playlist-modify-private",
  "app-remote-control",
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-library-modify",
  "user-library-read",
  "user-top-read",
  "user-read-playback-position",
  "ugc-image-upload",
  "user-modify-playback-state",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-follow-modify",
  "user-follow-read",
  "user-read-recently-played",
];

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
