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
  clientId: "0e1113dcd8d74446951d82012e867c1f",
  clientSecret: "532724a40bd04841ba231acb477ddb22",
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
