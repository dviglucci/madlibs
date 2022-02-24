import React from "react";
import { connect } from 'react-redux';
import { createPoem2 } from "../redux/poem2.js";


class Poem2Form extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log('PROPS >>>>>', this.props)
    const newPoem2 = {
      pluralNoun: event.target.pluralNoun.value,
      noun: event.target.noun.value,
      verbIng: event.target.verbIng.value,
      adj: event.target.adj.value,
      adj2: event.target.adj2.value,
      adj3: event.target.adj3.value,
    };
    console.log('newPoem2', newPoem2);
    this.props.createPoem2(newPoem2);
    this.props.history.push('/poem2/final');
  }

  render () {
    return (
      <div>
        <h4>Okay {this.props.user.name}, let's see your poetical stylings! Please enter the following:</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="pluralNoun">Plural noun</label>
          <input type="text" name="pluralNoun" />

          <label htmlFor="noun">Noun</label>
          <input type="text" name="noun" />

          <label htmlFor="verbIng">Verb ending in -ing</label>
          <input type="text" name="verbIng" />

          <label htmlFor="adj">Adjective</label>
          <input type="text" name="adj" />

          <label htmlFor="adj2">Adjective</label>
          <input type="text" name="adj2" />

          <label htmlFor="adj3">Adjective</label>
          <input type="text" name="adj3" />

          <button type="submit">Show me my poem</button>
        </form>
      </div>
    );
  };
};

const mapState = (state) => {
  return {
    user: state.user,
    pluralNoun: state.pluralNoun,
    noun: state.noun,
    verbIng: state.verbIng,
    adj: state.adj,
    adj2: state.adj2,
    adj3: state.adj3,
  };
};

const mapDispatch = (dispatch) => {
    return {
      createPoem2: (poem) => dispatch(createPoem2(poem))
    };
};

export default connect(mapState, mapDispatch)(Poem2Form);