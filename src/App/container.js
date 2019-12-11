import React, { Component } from "react";
import PropTypes from "prop-types";
import App from "./presenter";

class Container extends Component {
  state = {
    email:"",
    password:"",
    newNick:"",
    newEmail:"",
    newPassword:"",
    confirmNewPassword:"",
    birth:"", 
  };
  render() {
    return (
      <App 
      {...this.state}
      {...this.props}
      loginSubmit={this._loginSubmit}
      changeEmail={this._changeEmail}
      changePassword={this._changePassword}
      handleInputChange={this._handleInputChange}
      />
    );
  }
  
  _handleInputChange = (e,target) => {
    const { target: { value} } = e;
    console.log(target,value)
    this.setState({
        [target]: value
    });
  };
  _loginSubmit=async()=>{
    const { email, password } = this.state;
    const result = await this.props.login(email,password);
    if(!result){
        alert("Fail");
    }
  }
  
  
}

export default Container;
