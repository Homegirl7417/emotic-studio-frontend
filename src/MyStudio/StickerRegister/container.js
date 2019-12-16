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
    name:"tpr",
    keyword:"",
    price:0,
    summary:"",
    language:"",
    isOnlyImage:null,
    isKorean:null,
    isEnglish:null,
    isJapanese:null,
    isSpanish:null,
    isGerman:null,
    isVietnamese:null,
    stickers:[],
  };
  render(){
    return (
      <StickerRegisterPart1 
      {...this.state}
      {...this.props}
      handleInputChange={this._handleInputChange}
      handleImageChange={this._handleImageChange}
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
  _handleImageChange = (e,idx) => {
    e.preventDefault();
    let file = e.target.files[0];
    console.log(file);
    if(!file){
      return 0;
    }
    if( file.type.slice(file.type.indexOf("/")+1) != "png" ){
      alert("파일은 APNG 형태로 업로드 해주세요");
    } 
    else if(file.size>500000){
      alert("파일 용량이 너무 큽니다. 파일 하나당 500kb 이하로 맞춰 주세요");
    }else{
      let exStickers=this.state.stickers;
      exStickers[idx]=file;
      this.setState({
          stickers:exStickers
      });
      console.log("파일 업로드 완료",file)
    }
    //reader.readAsDataURL(file)
  }
  _handleInputChange = (e,target) => {
    const { target: { value} } = e;
    console.log(target,value)
    this.setState({
        [target]: value
    });
  };
  _proposalNewEmoji = () =>{
    const { isAnimated, name, keyword, price, summary, language, stickers } = this.state;
    const formData = new FormData()

    stickers.forEach((sticker, i) => {
      formData.append('emoji', sticker)
    })
    formData.append("isAnimated",isAnimated ? 1:0);
    formData.append("name",name);
    formData.append("summary",summary);
    formData.append("keyword",keyword);
    formData.append("price",price);
    
    fetch(`${API_URL}/proposal/new`,{
        method:"POST",
        headers:{
            "Content-Type": "multipart/form-data",
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
