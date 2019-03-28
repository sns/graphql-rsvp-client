import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import Dashboard from "./Dashboard";
import Home from "./Home";

export class Sidebar extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact={true} component={Home} />
          <Route path="/about/" exact={true} component={About} />
          <Route path="/dashboard" exact={true} component={Dashboard} />
        </div>
      </Router>
    );
  }
}
export default Sidebar;
