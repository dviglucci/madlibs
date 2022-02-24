import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Select from "./components/Select";
import Poem1 from "./components/Poem1";
import Poem2 from "./components/Poem2";
import Poem3 from "./components/Poem3";
import Poem1Form from "./components/Poem1Form";
import Poem2Form from "./components/Poem2Form";
import Poem3Form from "./components/Poem3Form";

class Routes extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/select" component={Select} />
        <Route exact path="/poem1" component={Poem1Form} />
        <Route exact path="/poem2" component={Poem2Form} />
        <Route exact path="/poem3" component={Poem3Form} />
        <Route path="/poem1/final" component={Poem1} />
        <Route path="/poem2/final" component={Poem2} />
        <Route path="/poem3/final" component={Poem3} />
      </div>
    );
  };
};

export default Routes;
