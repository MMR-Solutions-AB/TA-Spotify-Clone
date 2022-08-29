export const getAccessToken = () => {
  const params = new URLSearchParams(window.location.hash.replace("#", "?"));
  return params.get("access_token");
};

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


export function getSessionStorage() {
  const tokenFromLocalStorage = sessionStorage.getItem("spotifyToken");
  if (tokenFromLocalStorage !== null) {
    return tokenFromLocalStorage;
  }
  return false;
}


