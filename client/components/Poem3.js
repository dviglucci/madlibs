import React from "react";
import { connect } from 'react-redux';


class Poem3 extends React.Component {
  constructor() {
    super();
  };

  render () {
    return (
      <div>
        <h2>Excerpt from Romeo and Juliet, Act II Scene II</h2>
        <h4>By William Shakespeare and {this.props.user.name}</h4>
        <div>
          <div>But {this.props.poem3.adj}! What light through yonder window {this.props.poem3.verbS}?</div>
          <div>It is the east, and {this.props.poem3.personsName} is the sun.</div>
          <div>Arise, fair sun, and kill the envious {this.props.poem3.noun},</div>
           <div>Who is already sick and pale with {this.props.poem3.noun2},</div>
           <div>That thou, her maid, art far more {this.props.poem3.adj2} than she.</div>
           <div>Be not her maid since she is {this.props.poem3.adj3}.</div>
           <div>Her vestal livery is but sick and green,</div>
           <div>And none but fools do {this.props.poem3.verb} it. {this.props.poem3.exclamation}!</div>
        </div>
        
        <div>
          <div>It is my lady. Oh, it is my {this.props.poem3.noun3}.</div>
          <div>Oh, that she knew she were!</div>
          <div>She {this.props.poem3.verb2S}, yet she says nothing. What of that?</div>
          <div>Her eye discourses. I will answer it.—</div>
          <div>I am too bold. 'Tis not to me she {this.props.poem3.verb2S}.</div>
          <div>Two of the fairest {this.props.poem3.pluralNoun} in all the heaven,</div>
          <div>Having some business, do entreat her {this.props.poem3.pluralNoun2}</div>
          <div>To twinkle in their spheres till they return.</div>
          <div>What if her {this.props.poem3.pluralNoun2} were there, they in her head?</div>
          <div>The brightness of her {this.props.poem3.noun4} would shame those stars</div>
          <div>As daylight doth a lamp. Her eye in heaven</div>
          <div>Would through the airy region {this.props.poem3.verb2} so bright</div>
          <div>That birds would {this.props.poem3.verb3} and think it were not night.</div>
          <div>See how she leans her {this.props.poem3.noun5} upon her {this.props.poem3.noun6}.</div>
          <div>Oh, that I were a glove upon that {this.props.poem3.noun6}</div>
          <div>That I might touch that {this.props.poem3.noun5}!</div>
        </div>
      </div>
    );
  };
};

const mapState = (state) => {
    return {
      user: state.user,
      poem3: state.poem3,
    };
  };

export default connect(mapState)(Poem3);