import React from "react";
import PropTypes from 'prop-types';
import CheckBoxContent from "../../SubPageContents/CheckBoxContent";
import TextAreaContent from "../../SubPageContents/TextAreaContent";
import ImageUploadContent from "./ImageUploadContent";

import SubPageTemplate from "../../SubPageTemplate";
import StickerRegisterPart1 from "./StickerRegisterPart1";
import SubPageCompleteButton from "../../SubPageContents/SugPageCompleteButton";

class StickerRegister extends React.Component {
    constructor(props) {
        super(props);
    
        console.log("스티커 등록의 presenter.js의 props:",this.props)
    }
    static propTypes={
        stickers:PropTypes.array.isRequired,
        checkedValues:PropTypes.array.isRequired,
        isSubmit:PropTypes.bool.isRequired,
        language:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        keyword:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        summary:PropTypes.string.isRequired,
        language:PropTypes.string.isRequired,
        handleInputChange:PropTypes.func.isRequired,
        handleImageChange:PropTypes.func.isRequired,
        handleCheck:PropTypes.func.isRequired,
        checkingValue:PropTypes.func.isRequired,
        stickerCount:PropTypes.number.isRequired
    };
    render() {
        return (
            <SubPageTemplate
            header="마이 스튜디오"
            data={navigationData}
            contentsJSX={stickerRegisterComponentsList(this.props)}
            completeButton={<SubPageCompleteButton text="제안하기" id="StickerRejectedButton"/>}
            />
        );
    }
}

const stickerRegisterComponentsList = (props) => [
    <StickerRegisterPart1 
        handleInputChange={props.handleInputChange} 
        name={props.name} 
        keyword={props.keyword} 
        summary={props.summary} 
        checkedValues={props.checkedValues}
        handleCheck={props.handleCheck}
        checkingValue={props.checkingValue}
    />,
    <ImageUploadContent title="스티커 파일 업로드" handleImageChange={props.handleImageChange} stickers={props.stickers} stickerCount={props.stickerCount}/>
];

const navigationData = [
    {
        title: "스티커 등록",
        link: "/mystudio/sticker-register"
    },
    {
        title: "스티커 관리",
        link: "/mystudio/sticker-manage"
    },
    {
        title: "계정 관리",
        link: "/mystudio/account-manage"
    },
    {
        title: "지갑",
        link: "/mystudio/wallet"
    }
];

export default StickerRegister;