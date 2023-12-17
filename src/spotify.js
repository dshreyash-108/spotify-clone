export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://ubiquitous-winner-x5wgww46wjpc6vwx-3000.app.github.dev/";

const clientId = "c683b408d9154bc398aed45eec60bf75";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ]; 

  export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) =>{
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
  };

  export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;