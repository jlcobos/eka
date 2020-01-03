import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from "./app-history";
import Nav from "./components/Layout/Nav";
import Signup from "./views/Signup";
import Home from "./views/Home";
import { AppStateProvider  } from "./AppState";
import Container from '@material-ui/core/Container';
import './CSS/App.css';

function App() {
  return (
    <Router  history={history}>
      <Nav />
      <Container fixed>
        <AppStateProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </AppStateProvider>
      </Container>
    </Router>
  );
}

export default App;
