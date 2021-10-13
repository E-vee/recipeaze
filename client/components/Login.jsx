import React from 'react';
import { useHistory, useEffect } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setUser }) => {
  let history = useHistory();
  // const handleClick = () => {
  //   setUser({ name: 'Omar', id: 1 })
  //   history.push("/cabinet");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("in handleSubmit!");
    axios({
      method: 'get',
      url: '/requestToken',
    })
      .then(response => console.log("DEBUG >>>", response))
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

        console.log('should be response here line 32', response)
        setUser({ name: 'Omar', id: 1 })
        history.push("/cabinet");
      })
      .catch(err => {
        console.log("ERROR >>> ", err);
      })
  };

  //   axios.post('url', {"body":data}, {
  //     headers: {
  //     'Content-Type': 'application/json'
  //     }
  //   }
  // )
  if (window.location.hash) {
    const hash = (new URL(document.location)).hash;
    console.log(hash);
    const arr = hash.split('&');
    const access_token = arr[0].substring(14);
    requestInfo(access_token);

  };
  // /\((.*?\)/g
  // #access_token
  // token_type
  //http://localhost:8080/#access_token=ya29.a0ARrdaM_E8A93iCH1ld3JVOogTfHVYLhxrTigw0RbueLQe61uBbP8FQt7sL_i2sOoyTSCQNKBuBOa7m7yn49Xk5hgA3FgcnCM1TxWggJ0rkuj13bFXogstSzAdJ9-Am3lvPXN8lp5zQ0SvAWmd9w92hdPH9Bb&token_type=Bearer&expires_in=3599&scope=email%20profile%20https://www.googleapis.com/auth/userinfo.profile%20openid%20https://www.googleapis.com/auth/userinfo.email&authuser=1&prompt=consent


  return (
    <div id="login_container">Login Page
      <form onSubmit={handleSubmit}>
        <button id="login_button" type="submit">Log In</button>
      </form>

      <a href="/requestToken">Sign in with Google</a>
    </div>
  );
};

export default Login;
