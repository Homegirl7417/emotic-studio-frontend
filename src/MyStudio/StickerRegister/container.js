import React, { Component } from "react";
import PropTypes from "prop-types";
import StickerRegisterPart1 from "./presenter";
const API_URL = "http://localhost:8001";

const supportingLanguage = ["Only Image","한국어","영어","일본어","스페인어","독일어","베트남어","기타"];
const priceList = ["무료", "0.9달러", "1.9달러"];
const yesOrNo = ["예", "아니요"];

class Container extends Component {
  state = {
    isSubmit:false,
    language:"",
    name:"",
    keyword:"",
    price:0,
    summary:"",
    language:"",
    stickers:[],
    checkedValues:[],
    stickerCount: 24
  };
  render(){
     return (
      <>
      {console.log("스티커등록의 container.js/ stickerRegisterpart1에 넘겨주는 state와props들: ",this.state, this.props)}
      <StickerRegisterPart1 
      {...this.state}
      {...this.props}
      handleInputChange={this._handleInputChange}
      handleImageChange={this._handleImageChange}
      handleCheck={this._handleCheck}
      checkingValue={this._checkingValue}
      checkingStickerCount={this._checkingStickerCount}
      />
      </>
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
  _checkingValue = data =>{
    const result = (this.state.checkedValues.indexOf( data )!=-1)?true : false ; 
    console.log(data,result);
    return result;
  }
  _handleCheck = (data)=>{
    
    let exCheckedValues = this.state.checkedValues;
    let isCheck = exCheckedValues.indexOf( data )
    let count = data.slice(0,2);
    if(!isNaN(count)) {
      this.setState({
        stickerCount: Number(count)
      })
    }
    if(isCheck != -1){
      exCheckedValues.splice(isCheck, 1);
    }else{
      exCheckedValues.push(data);
    }
    this.setState({
      checkedValues:exCheckedValues
    });

  }
  _handleImageChange = (e,idx) => {
    e.preventDefault();
    let file = e.target.files[0];
    if(!file){
      return 0;
    }
    if( file.type.slice(file.type.indexOf("/")+1) != "png" ){
      alert("파일은 PNG 형태로 업로드 해주세요");
    } 
    else if(file.size>500000){
      alert("파일 용량이 너무 큽니다. 파일 하나당 500kb 이하로 맞춰 주세요");
    }else{
      let exStickers=this.state.stickers;
      exStickers[idx]=file;
      this.setState({
          stickers:exStickers
      });
    }
    //reader.readAsDataURL(file)
  }
  _handleInputChange = (e,target) => {
    const { target: { value} } = e;
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
  // _checkingStickerCount = () => {
  //   let checkingStickerCount = 0;
  //   this.state.checkedValues.map(
  //     (value) => {
  //       if(value === "16종")  return (checkingStickerCount = 16);
  //       if(value === "24종")  return (checkingStickerCount = 24);
  //       if(value === "32종")  return (checkingStickerCount = 32);
  //       if(value === "40종")  return (checkingStickerCount = 40);
  //     }
  //   )
  //   this.setState({
  //     stickerCount: checkingStickerCount
  //   });
  // }
  // _checkingStickerCount = (data, result) => {
  //     let checkingStickerCount = 0;
  //     if((data==="16종")&&result) {checkingStickerCount = 16};
  //     if((data==="24종")&&result) {checkingStickerCount = 24};
  //     if((data==="32종")&&result) {checkingStickerCount = 32};
  //     if((data==="40종")&&result) {checkingStickerCount = 40};
  //     this.setState({
  //       stickerCount: checkingStickerCount
  //     });
  // }
  _checkingStickerCount = (data, result) => {
    if((data==="16종")&&result) return 16;
    if((data==="24종")&&result) return 24;
    if((data==="32종")&&result) return 32;
    if((data==="40종")&&result) return 40;
}

}

export default Container;
