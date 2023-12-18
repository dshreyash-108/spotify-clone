import React, { useEffect } from 'react';
import './App.css';
import { Mylogin } from './Mylogin';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { Player } from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();


function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  // Run code based on given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      // setToken(_token);
      
      spotify.setAccessToken(_token);

      spotify.getMe().then((user)=> {
        console.log('User from Spotify API:', user);

        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
    } 
  }, []);


  return (
    <div className="App">
      {
        token ? (<Player spotify={spotify}/>) : (<Mylogin/>)
      }
      
      </div>
  );
}

export default App;
