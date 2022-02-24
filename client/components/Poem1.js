import React from "react";
import { connect } from 'react-redux';


class Poem1 extends React.Component {
  constructor() {
    super();
  };

  render () {
    return (
      <div>
        <h2>The {this.props.poem1.noun} Not Taken</h2>
        <h4>By Robert Frost and {this.props.user.name}</h4>
        <div>
            <div>Two {this.props.poem1.noun}s diverged in a {this.props.poem1.adj} wood,</div>
            <div>And sorry I could not {this.props.poem1.verb} both</div>
            <div>And be one traveler, {this.props.poem1.adj2} I stood</div>
            <div>And {this.props.poem1.verbPast} down one as far as I could</div>
            <div>To where it {this.props.poem1.verb2Past} in the undergrowth;</div>
        </div>
  
        <div>
            <div>Then {this.props.poem1.verb3Past} the other, as just as {this.props.poem1.adj3},</div>
            <div>And having perhaps the better {this.props.poem1.noun2},</div>
            <div>Because it was {this.props.poem1.adj4} and wanted wear;</div>
            <div>Though as for that the passing there</div>
            <div>Had {this.props.poem1.verb4Past} them really about the same,</div>
        </div>
  
        <div>
            <div>And both that {this.props.poem1.noun3} equally lay</div>
            <div>In leaves no step had trodden {this.props.poem1.adj5}.</div>
            <div>Oh, I kept the {this.props.poem1.noun4} for another day!</div>
            <div>Yet knowing how {this.props.poem1.noun5} leads on to {this.props.poem1.noun5},</div>
            <div>I {this.props.poem1.verb5Past} if I should ever come back.</div>
        </div>
  
        <div>
            <div>I shall be telling this with a {this.props.poem1.noun6}</div>
            <div>Somewhere {this.props.poem1.pluralNoun} and {this.props.poem1.pluralNoun} hence:</div>
            <div>Two {this.props.poem1.noun}s diverged in a wood, and I—</div>
            <div>I took the one less {this.props.poem1.verb}ed by,</div>
            <div>And that has made all the difference.</div>
        </div>
      </div>
    );
  }
};

const mapState = (state) => {
  return {
    user: state.user,
    poem1: state.poem1,
  };
};

export default connect(mapState)(Poem1);
