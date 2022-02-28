import React from "react";
import { connect } from 'react-redux';
import { createPoem3 } from "../redux/poem3.js";


class Poem3Form extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(event) {
    event.preventDefault();
    const newPoem3 = {
        adj: event.target.adj.value,
        verbS: event.target.verbS.value,
        personsName: event.target.personsName.value,
        noun: event.target.noun.value,
        noun2: event.target.noun2.value,
        adj2: event.target.adj2.value,
        adj3: event.target.adj3.value,
        verb: event.target.verb.value,
        exclamation: event.target.exclamation.value,
        noun3: event.target.noun3.value,
        verb2S: event.target.verb2S.value,
        pluralNoun: event.target.pluralNoun.value,
        pluralNoun2: event.target.pluralNoun2.value,
        noun4: event.target.noun4.value,
        verb2: event.target.verb2.value,
        verb3: event.target.verb3.value,
        noun5: event.target.noun5.value,
        noun6: event.target.noun6.value,
    };
    this.props.createPoem3(newPoem3);
    this.props.history.push('/poem3/final');
  };

  render () {
    return (
      <div>
        <div>Okay {this.props.user.name}, let's see your poetical stylings! Please enter the following:</div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="adj">Adjective</label>
          <input type="text" name="adj" />

          <label htmlFor="verbS">Verb ending in s</label>
          <input type="text" name="verbS" />

          <label htmlFor="personsName">Person's name</label>
          <input type="text" name="personsName" />

          <label htmlFor="noun">Noun</label>
          <input type="text" name="noun" />

          <label htmlFor="noun2">Noun</label>
          <input type="text" name="noun2" />

          <label htmlFor="adj2">Adjective</label>
          <input type="text" name="adj2" />

          <label htmlFor="adj3">Adjective</label>
          <input type="text" name="adj3" />

          <label htmlFor="verb">Verb</label>
          <input type="text" name="verb" />

          <label htmlFor="exclamation">Exclamation</label>
          <input type="text" name="exclamation" />

          <label htmlFor="noun3">Noun</label>
          <input type="text" name="noun3" />

          <label htmlFor="verb2S">Verb ending in s</label>
          <input type="text" name="verb2S" />

          <label htmlFor="pluralNoun">Plural noun</label>
          <input type="text" name="pluralNoun" />

          <label htmlFor="pluralNoun2">Plural noun</label>
          <input type="text" name="pluralNoun2" />

          <label htmlFor="noun4">Noun</label>
          <input type="text" name="noun4" />

          <label htmlFor="verb2">Verb</label>
          <input type="text" name="verb2" />

          <label htmlFor="verb3">Verb</label>
          <input type="text" name="verb3" />

          <label htmlFor="noun5">Noun</label>
          <input type="text" name="noun5" />

          <label htmlFor="noun6">Noun</label>
          <input type="text" name="noun6" />

          <button type="submit">Show me my poem</button>
        </form>
      </div>
    );
  };
};

const mapState = (state) => {
  return {
    user: state.user,
    adj: state.adj,
    verbS: state.verbS,
    personsName: state.personsName,
    noun: state.noun,
    noun2: state.noun2,
    adj2: state.adj2,
    adj3: state.adj3,
    verb: state.verb,
    exclamation: state.exclamation,
    noun3: state.noun3,
    verb2S: state.verb2S,
    pluralNoun: state.pluralNoun,
    pluralNoun2: state.pluralNoun2,
    noun4: state.noun4,
    verb2: state.verb2,
    verb3: state.verb3,
    noun5: state.noun5,
    noun6: state.noun6,
  };
};

const mapDispatch = (dispatch) => {
    return {
      createPoem3: (poem) => dispatch(createPoem3(poem))
    };
};

export default connect(mapState, mapDispatch)(Poem3Form);