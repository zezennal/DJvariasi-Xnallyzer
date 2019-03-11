import React, {Component} from 'react';
import User from './User';

export default class Users extends Component {
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <User></User>
        <User age="20">doe</User>
        <User age="30">aja</User>
      </div>
    );
  }
}