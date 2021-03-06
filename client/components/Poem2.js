import React, { Component } from "react";
import { connect } from 'react-redux';
import { saveFinalPoem } from "../redux/finalPoem";
import { Link } from 'react-router-dom';


class Poem2 extends React.Component {
  constructor() {
    super();

    this.storePoem = this.storePoem.bind(this);
  };

  storePoem(finalPoem) {
    console.log('inside storePoem')
    this.props.saveFinalPoem(finalPoem);
  };

  render () {
    const finalPoem = 
    <div>
      <div className="final-poem">
        <h2>This Is Just To {this.props.poem2.verb}</h2>
        <h4>By William Carlos Williams and {this.props.user.name}</h4>
        <div className="stanza">
          <div>I have eaten</div>
          <div>the {this.props.poem2.pluralNoun}</div>
          <div>that were in</div>
          <div>the {this.props.poem2.noun}</div>
        </div>
        
        <div className="stanza">
          <div>and which</div>
          <div>you were probably</div>
          <div>{this.props.poem2.verbIng}</div>
          <div>for breakfast</div>
        </div>
        
        <div className="stanza">
          <div>Forgive me</div>
          <div>they were {this.props.poem2.adj}</div>
          <div>so {this.props.poem2.adj2}</div>
          <div>and so {this.props.poem2.adj3}</div>
        </div>
      </div>
      <button type="submit">Omg share my poem!!!</button>
      <Link to="/select">Play again</Link>
      </div>

      const finalPoemText = (
        `This Is Just To ${this.props.poem2.verb}
        \nBy William Carlos Williams and ${this.props.user.name}
        \nI have eaten
        \nthe ${this.props.poem2.pluralNoun}
        \nthat were in
        \nthe ${this.props.poem2.noun}
        \nand which
        \nyou were probably
        \n${this.props.poem2.verbIng}
        \nfor breakfast
        \nForgive me
        \nthey were ${this.props.poem2.adj}
        \nso ${this.props.poem2.adj2}
        \nand so ${this.props.poem2.adj3}`
      );

      this.storePoem(finalPoemText);
      //console.log(finalPoemText)
    return (
      <div>{finalPoem}</div>
    );
  };
};

const mapState = (state) => {
  return {
    user: state.user,
    poem2: state.poem2,
  };
};

const mapDispatch = (dispatch) => {
  return {
    saveFinalPoem: (poem) => dispatch(saveFinalPoem(poem))
  };
};

export default connect(mapState, mapDispatch)(Poem2);