import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Select from "./components/Select";
import Poem1 from "./components/Poem1";

class Routes extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/select" component={Select} />
        <Route path="/poem1" component={Poem1} />
      </div>
    );
  };
};

export default Routes;
