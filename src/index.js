import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/system";
import { BrowserRouter } from "react-router-dom";
import { themeOptions } from "./theme/material-theme";
import { store } from "./store/store";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: "d5c0f95ce6054352b55c2de78e9f17a1",
  clientSecret: "f141ced4aeed4cba9dce2273f1ff3e30",
  redirectUri: "http://localhost:3000/",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={themeOptions}>
        <Provider store={store}>
          <App spotifyApi={spotifyApi} />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
