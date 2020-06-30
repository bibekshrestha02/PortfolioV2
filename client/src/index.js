import React from "react";
import ReactDOM from "react-dom";
import "./style/bootstrap.min.css";
import App from "./App";
import Login from "./Dashboard/Auth/Login";
import Dashboard from "./Dashboard/Dashboard";
import Auth from "./Dashboard/Auth/auth";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <App />
        </Route>
        <Route
          path='/dashboard'
          render={() => (new Auth().isLogIn() ? <Dashboard /> : <Login />)}
        />
        <Route path='*'>
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
