import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from "./views/HomePage";
import { UserHomePage } from "./views/users/UserHomePage";
import { UserDetailPage } from "./views/users/UserDetailPage";
import UserAddPage from "./views/users/UserAddPage";
import UserEditPage from "./views/users/UserEditPage";

import { NewsletterDetailPage } from "./views/newsletters/NewsletterDetailPage";
import { NewsletterHomePage } from "./views/newsletters/NewsletterHomePage";
import NewsletterAddPage from "./views/newsletters/NewsletterAddPage";
import NewsletterEditPage from "./views/newsletters/NewsletterEditPage";

import {
  USERS_HOME_ROUTE,
  USERS_ADD_ROUTE,
  USERS_EDIT_ROUTE,
  USERS_DETAIL_ROUTE,
  NEWSLETTERS_HOME_ROUTE,
  NEWSLETTERS_ADD_ROUTE,
  NEWSLETTERS_EDIT_ROUTE,
  NEWSLETTERS_DETAIL_ROUTE
} from "./consts";

const NoMatch = () => {
  return <div>Page not found</div>;
};

class App extends React.Component {
  render() {
    return (
      <Router>
        <header>
          <nav>
            <Link to="/">Accueil</Link>
            <Link to={USERS_HOME_ROUTE}>Liste des utilisateurs</Link>
            <Link to={USERS_ADD_ROUTE}>Créer un utilisateur</Link>
            <Link to={NEWSLETTERS_HOME_ROUTE}>Liste des newsletters</Link>
            <Link to={NEWSLETTERS_ADD_ROUTE}>Créer une newsletter</Link>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" render={props => <HomePage history={props.history} />} />
          <Route exact path={USERS_HOME_ROUTE} render={props => <UserHomePage history={props.history} />} />
          <Route exact path={USERS_ADD_ROUTE} render={props => <UserAddPage history={props.history} />} />
          <Route
            path={USERS_EDIT_ROUTE + ":username"}
            render={props => <UserEditPage username={props.match.params.username} history={props.history} />}
          />
          <Route
            path={USERS_DETAIL_ROUTE + ":username"}
            render={props => <UserDetailPage username={props.match.params.username} history={props.history} />}
          />

          <Route exact path={NEWSLETTERS_HOME_ROUTE} render={props => <NewsletterHomePage history={props.history} />} />

          <Route exact path={NEWSLETTERS_ADD_ROUTE} render={props => <NewsletterAddPage history={props.history} />} />
          <Route
            path={NEWSLETTERS_EDIT_ROUTE + ":id"}
            render={props => <NewsletterEditPage id={props.match.params.id} history={props.history} />}
          />
          <Route
            path={NEWSLETTERS_DETAIL_ROUTE + ":id"}
            render={props => <NewsletterDetailPage id={props.match.params.id} history={props.history} />}
          />

          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

// test 1
