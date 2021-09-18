import React, { Component } from "react";
import hornsLikeButton from '../../images/hornsLikeButton.webp';
// import redLikeButton from '../../images/redLikeButton.png';
//import * as UserService from "../../api/UserService";
import './styles.css';


class Likes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      likes: 0,
      updated: false
    };
  }
  updateLikes = () => {
    if(!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });
    }
  }
  render(){
    return(
      <div>
        <p onClick={this.updateLikes}><button><img src={ hornsLikeButton } /></button></p>
        <p>{this.state.likes}</p>
      </div>
    );
  }
}
export default Likes;