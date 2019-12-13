import React, { Component } from "react";
import PropTypes from "prop-types";
import StickerRegisterPart1 from "./presenter";
const API_URL = "http://localhost:8001";

class Container extends Component {
  state = {
    isSubmit:false,
    isAnimated:null,
    isTranslate:null,
    language:"",
    name:"",
    keyword:"",
    price:0,
    summary:"",
    language:""
  };
  render(){
    return (
      <StickerRegisterPart1 
      {...this.state}
      {...this.props}
      handleInputChange={this._handleInputChange}
      />
    );
  }
  _submitNew = async() =>{
    const result = await this._proposalNewEmoji();
    if(result){
        this.setState({
            isSubmit:true
        })
    }else{
        alert("Error. Please try again");
    }
  }
  _handleInputChange = (e,target) => {
    const { target: { value} } = e;
    console.log(target,value)
    this.setState({
        [target]: value
    });
  };
  _proposalNewEmoji = () =>{
    const { isAnimated, name, keyword, price, summary, language } = this.state;
    fetch(`${API_URL}/proposal/new`,{
        method:"POST",
        headers:{
            "Content-Type" : "application/json",
            "Authorization": `Bearer ${this.props.token}`,
        },
        body: JSON.stringify({
            isAnimated,
            name,
            keyword,
            price,
            summary,
            language,
        })
    })
    .then(response=>{
       if(response==201){
           return true;
       }else{
           return false;
       }
    })
  }
  
}

export default Container;
