import React from "react";
import Link from "react-router-dom/Link";
import { connect } from 'react-redux';


class Poem2 extends React.Component {
  constructor() {
    super();
  };

  render () {
      console.log('NAAAAME >>>>', this.props.user.name)
    return (
      <div>
        <h2>This Is Just To Say</h2>
        <h4>By William Carlos Williams and {this.props.user.name}</h4>
        <div>
          <div>I have eaten</div>
          <div>the plums</div>
          <div>that were in</div>
           <div>the icebox</div>
        </div>
        
        <div>
          <div>and which</div>
          <div>you were probably</div>
          <div>saving</div>
          <div>for breakfast</div>
        </div>
        
        <div>
          <div>Forgive me</div>
          <div>they were delicious</div>
          <div>so sweet</div>
          <div>and so cold</div>
        </div>
      </div>
    );
  };
};

const mapState = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapState)(Poem2);