import React from 'react';
import { useHistory, useEffect } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setUser }) => {
  let history = useHistory();
  const handleClick = () => {
    setUser({ name: 'Omar', id: 1 })
    history.push("/cabinet");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("in handleSubmit!");
    axios({
      method: 'get',
      url: '/requestToken',
    })
    .then(response => console.log("DEBUG >>>", response))
    .catch(err => {
      console.log("ERROR >>> ", err);
    })
  };

  const requestInfo = (access_token) => {
    axios({
      method: 'get',
      url: '/requestInfo',
      headers: {
        'Authorization': access_token
      }
    })
      .then(response => {

        console.log('should be response here line 32', response);
        setUser({ name: 'Omar', id: 1 });
        history.push("/cabinet");
      })
      .catch(err => {
        console.log("ERROR >>> ", err);
      })
  };

  if (window.location.hash) {
    const hash = (new URL(document.location)).hash;
    console.log(hash);
    const arr = hash.split('&');
    const access_token = arr[0].substring(14);
    requestInfo(access_token);
  };

  return (
    <div id="login_container">
      {/* <form onSubmit={handleSubmit}>
        <button id="login_button" type="submit">Log In</button>
      </form> */}

      <a id="google_link"href="/requestToken">Log In</a>
    </div>
  );
};

export default Login;
