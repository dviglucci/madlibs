import React from "react";
import Link from "react-router-dom/Link";
import { connect } from 'react-redux';


class Poem2Form extends React.Component {
  constructor() {
    super();
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log('event >>>>', event.target.inputnum)
    // const newUser = {
    //   name: event.target.name.value,
    // };
    // this.props.createUser(newUser);
    // this.props.history.push('/select');
  }

  render () {
    return (
      <div>
        <h4>Okay {this.props.user.name}, let's see your poetical stylings! Please enter the following:</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="inputnum">This is a big ol' test...</label>
          <input type="text" inputnum="1" />
          {/* <input type="text" inputnum="2" />
          <input type="text" inputnum="3" /> */}
          <button type="submit">Show me my poem</button>
        </form>
      </div>
    );
  };
};

const mapState = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapState)(Poem2Form);