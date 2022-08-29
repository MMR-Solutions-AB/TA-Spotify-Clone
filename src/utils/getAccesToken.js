export const getAccessToken = () => {
  const params = new URLSearchParams(window.location.hash.replace("#", "?"));
  return params.get("access_token");
};

/* Version 2 för att se expired date ( refresh token ) */
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};
