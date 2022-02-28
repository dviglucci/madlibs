import React from "react";
import { connect } from 'react-redux';
import { createPoem1 } from "../redux/poem1.js";


class Poem1Form extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(event) {
    event.preventDefault();
    const newPoem1 = {
        noun: event.target.noun.value,
        adj: event.target.adj.value,
        verb: event.target.verb.value,
        adj2: event.target.adj2.value,
        verbPast: event.target.verbPast.value,
        verb2Past: event.target.verb2Past.value,
        verb3Past: event.target.verb3Past.value,
        adj3: event.target.adj3.value,
        noun2: event.target.noun2.value,
        adj4: event.target.adj4.value,
        verb4Past: event.target.verb4Past.value,
        noun3: event.target.noun3.value,
        adj5: event.target.adj5.value,
        noun4: event.target.noun4.value,
        noun5: event.target.noun5.value,
        verb5Past: event.target.verb5Past.value,
        noun6: event.target.noun6.value,
        pluralNoun: event.target.pluralNoun.value,
    };
    this.props.createPoem1(newPoem1);
    this.props.history.push('/poem1/final');
  }

  render () {
    return (
      <div>
        <div>Okay {this.props.user.name}, let's see your poetical stylings! Please enter the following:</div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="noun">Noun</label>
          <input type="text" name="noun" />

          <label htmlFor="adj">Adjective</label>
          <input type="text" name="adj" />

          <label htmlFor="verb">Verb</label>
          <input type="text" name="verb" />

          <label htmlFor="adj2">Adjective</label>
          <input type="text" name="adj2" />

          <label htmlFor="verbPast">Verb, past tense</label>
          <input type="text" name="verbPast" />

          <label htmlFor="verb2Past">Verb, past tense</label>
          <input type="text" name="verb2Past" />

          <label htmlFor="verb3Past">Verb, past tense</label>
          <input type="text" name="verb3Past" />

          <label htmlFor="adj3">Adjective</label>
          <input type="text" name="adj3" />

          <label htmlFor="noun2">Noun</label>
          <input type="text" name="noun2" />

          <label htmlFor="adj4">Adjective</label>
          <input type="text" name="adj4" />

          <label htmlFor="verb4Past">Verb, past tense</label>
          <input type="text" name="verb4Past" />

          <label htmlFor="noun3">Noun</label>
          <input type="text" name="noun3" />

          <label htmlFor="adj5">Adjective</label>
          <input type="text" name="adj5" />

          <label htmlFor="noun4">Noun</label>
          <input type="text" name="noun4" />

          <label htmlFor="noun5">Noun</label>
          <input type="text" name="noun5" />

          <label htmlFor="verb5Past">Verb, past tense</label>
          <input type="text" name="verb5Past" />

          <label htmlFor="noun6">Noun</label>
          <input type="text" name="noun6" />

          <label htmlFor="pluralNoun">Plural noun</label>
          <input type="text" name="pluralNoun" />

          <button type="submit">Show me my poem</button>
        </form>
      </div>
    );
  };
};

const mapState = (state) => {
  return {
    user: state.user,
    noun: state.noun,
    adj: state.adj,
    verb: state.verb,
    adj2: state.adj2,
    verbPast: state.verbPast,
    verb2Past: state.verb2Past,
    verb3Past: state.verb3Past,
    adj3: state.adj3,
    noun2: state.noun2,
    adj4: state.adj4,
    verb4Past: state.verb4Past,
    noun3: state.noun3,
    adj5: state.adj5,
    noun4: state.noun4,
    noun5: state.noun5,
    verb5Past: state.verb5Past,
    noun6: state.noun6,
    pluralNoun: state.pluralNoun,
  };
};

const mapDispatch = (dispatch) => {
    return {
      createPoem1: (poem) => dispatch(createPoem1(poem))
    };
};

export default connect(mapState, mapDispatch)(Poem1Form);