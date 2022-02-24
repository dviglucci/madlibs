import React from "react";
import { connect } from 'react-redux';


class Poem2 extends React.Component {
  constructor() {
    super();
  };

  componentDidMount() {
      console.log('PROPS >>>', this.props)
  }

  render () {
    return (
      <div>
        <h2>This Is Just To Say</h2>
        <h4>By William Carlos Williams and {this.props.user.name}</h4>
        <div>
          <div>I have eaten</div>
          <div>the {this.props.poem2.pluralNoun}</div>
          <div>that were in</div>
           <div>the {this.props.poem2.noun}</div>
        </div>
        
        <div>
          <div>and which</div>
          <div>you were probably</div>
          <div>{this.props.poem2.verbIng}</div>
          <div>for breakfast</div>
        </div>
        
        <div>
          <div>Forgive me</div>
          <div>they were {this.props.poem2.adj}</div>
          <div>so {this.props.poem2.adj2}</div>
          <div>and so {this.props.poem2.adj3}</div>
        </div>
      </div>
    );
  };
};

const mapState = (state) => {
    return {
      user: state.user,
      poem2: state.poem2,
    //   pluralNoun: state.pluralNoun,
    //   noun: state.noun,
    //   verbIng: state.verbIng,
    //   adj: state.adj,
    //   adj2: state.adj2,
    //   adj3: state.adj3,
    };
  };

export default connect(mapState)(Poem2);