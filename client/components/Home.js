import React from "react";
import Link from "react-router-dom/Link";
import { createUser } from "../redux/user";
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('event >>>>', event.target.name.value)
    const newUser = {
      name: event.target.name.value,
    };
    this.props.createUser(newUser);
    this.props.history.push('/select');
  }

  render() {
    return (
      <div>
        Welcome to the Mad Libs poem generator!
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name" id="enter-name">Enter your name to get started.</label>
          <input type="text" name="name" id="name-input"/>
          <button type="submit">Let's go</button>
        </form>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user))
  };
};

export default connect(null, mapDispatch)(Home);
