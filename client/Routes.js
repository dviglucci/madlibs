import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Select from "./components/Select";
import Poem1 from "./components/Poem1";
import Poem2 from "./components/Poem2";
import Poem2Form from "./components/Poem2Form.js";

class Routes extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/select" component={Select} />
        <Route path="/poem1" component={Poem1} />
        <Route path="/poem2" component={Poem2Form} />
      </div>
    );
  };
};

export default Routes;
