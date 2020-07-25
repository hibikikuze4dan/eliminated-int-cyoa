import React from "react";
import "./App.css";

import Navigator from "./components/navigation";
import ArrowNav from "./components/arrow-nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { getSectionTitlesArray } from "./redux/selectors";
import { connect } from "react-redux";
import Page from "./components/page";

function App({ sections }) {
  return (
    <div className="App">
      <Router>
        <Navigator />
        <ArrowNav />
        <Switch>
          {sections.map((section) => {
            return (
              <Route
                key={`app-route-${section.link}`}
                path={`/${section.link}`}
              >
                <Page location={section.link} />
              </Route>
            );
          })}
          <Route render={() => <Redirect to="/opening" />} />
        </Switch>
        <ArrowNav />
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  sections: getSectionTitlesArray(state),
});

export default connect(mapStateToProps)(App);
