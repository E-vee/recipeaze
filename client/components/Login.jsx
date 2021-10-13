import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setUser }) => {
  let history = useHistory();
  const handleClick = () => {
    // history.push('/auth/requestToken')
    history.push("/cabinet");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("in handleSubmit!");
    axios({
      method: 'get',
      url: '/requestToken'
    })
      .then(response => console.log("DEBUG >>>", response))
  }

  return (
    <div id="login_container">Login Page
      <form onSubmit={handleSubmit}>
        <button id="login_button" type="submit">Log In</button>
      </form>

      <a href="/auth/requestToken">Sign in with Google</a>
    </div>
  );
};

export default Login;
