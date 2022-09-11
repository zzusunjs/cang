import React from "react";
import { Link, HashRouter as Router } from "react-router-dom";
import CangRouter from "./router";

import "./app.less";

function App() {
  return (
    <Router>
      <div className="left">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/clock">ClockExample</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <CangRouter />
      </div>
    </Router>
  );
}
export default App;
