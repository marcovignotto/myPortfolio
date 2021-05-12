import React, { Fragment } from "react";

import "./css/main.css";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

/**
 * @description Mat UI
 */
import { theme } from "../src/styles/Theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

/**
 *
 * @description FontAwesome
 */

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faReact,
  faChrome,
  faWordpressSimple,
  faAndroid,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
// import {
// } from "@fortawesome/free-solid-svg-icons";

library.add(faReact, faChrome, faWordpressSimple, faAndroid, faApple);

const App = () => {
  return (
    <div className="container">
      <Router>
        <MuiThemeProvider theme={theme}>
          <Fragment>
            <Navbar />
            <Home />
            <Projects />
            <About />
            {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
          </Switch> */}
          </Fragment>
        </MuiThemeProvider>
      </Router>
    </div>
  );
};

export default App;
