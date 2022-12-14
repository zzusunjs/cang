import React from "react";
import { Switch, Route } from "react-router-dom";
import { ClockExample } from "../components/index";

export default function CangRouter() {
  return (
    <Switch>
      <Route path="/clock">
        <ClockExample />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
