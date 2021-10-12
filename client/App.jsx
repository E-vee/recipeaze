import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Login from "./components/Login"
import Cabinet from "./components/Cabinet"

const App = () => {
  const [user, setUser] = useState({});
  return (
    <Router>
      <div id="main_container">Recipeaze</div>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact="/cabinet">
          <Cabinet />
        </Route>
        {/* <Route exact="/results">
          <Results />
        </Route> */}
      </Switch>

    </Router>
  )
}

export default App;