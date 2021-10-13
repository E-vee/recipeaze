import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ setUser }) => {
  let history = useHistory();
  const handleClick = () => {
    setUser({ name: 'Omar', id: 1 })
    history.push("/cabinet");
  };

  return (
    <div id="login_container">Login Page
      <button id="login_button" type="submit"
        onClick={handleClick}> Log In </button>
    </div>
  );
};

export default Login;
