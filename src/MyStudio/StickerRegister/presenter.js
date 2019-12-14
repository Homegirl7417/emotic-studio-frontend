import React from "react";
import PropTypes from 'prop-types';
import CheckBoxContent from "../../SubPageContents/CheckBoxContent";
import TextAreaContent from "../../SubPageContents/TextAreaContent";
import ImageUploadContent from "../../SubPageContents/ImageUploadContent";

import SubPageTemplate from "../../SubPageTemplate";

import SubPageCompleteButton from "../../SubPageContents/SugPageCompleteButton";

class StickerRegisterPart1 extends React.Component {
    static propTypes={
        isSubmit:PropTypes.bool.isRequired,
        isAnimated:PropTypes.bool.isRequired,
        isTranslate:PropTypes.bool.isRequired,
        language:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        keyword:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        summary:PropTypes.string.isRequired,
        language:PropTypes.string.isRequired,
        handleInputChange:PropTypes.func.isRequired,
        handleImageChange:PropTypes.func.isRequired
    };
    constructor() {
        super();
        this.state = {
            stickerGenreCheckBoxData: ["Sticker", "Animated Sticker"],
            supportedLanguage: [
                "Only Image",
                "한국어",
                "영어",
                "일본어",
                "스페인어",
                "독일어", 
                "베트남어",
                "기타"
            ]
        };
    }
    render() {
        return (
            <div className="sticker-register">
                <CheckBoxContent
                    title="스티커 종류"
                    isRequire={true}
                    checkBox={this.state.stickerGenreCheckBoxData}
                />
                <TextAreaContent
                    title="스티커 이름"
                    isRequire={true}
                    rows={2}
                    value={this.props.name}
                    valueName={"name"}
                    onChange={this.props.handleInputChange}
                />
                <TextAreaContent
                    title="키워드"
                    isRequire={false}
                    rows={6}
                    value={this.props.keyword}
                    valueName={"keyword"}
                    onChange={this.props.handleInputChange}
                />
                <TextAreaContent
                    title="스티커 스토리"
                    isRequire={false}
                    rows={6}
                    value={this.props.summary}
                    valueName={"summary"}
                    onChange={this.props.handleInputChange}
                />
                <CheckBoxContent
                    title="지원 언어"
                    isRequire={true}
                    checkBox={this.state.supportedLanguage}
                ></CheckBoxContent>
                <CheckBoxContent
                    title="판매 가격"
                    isRequire={true}
                    checkBox={["무료", "0.9달러", "1.9달러"]}
                ></CheckBoxContent>
                <CheckBoxContent
                    title="번역 요청"
                    isRequire={true}
                    checkBox={["예", "아니요"]}
                ></CheckBoxContent>
                <CheckBoxContent
                    title="약관 확인"
                    isRequire={true}
                    checkBox={["약관에 동의합니다."]}
                ></CheckBoxContent>
            </div>
        );
    }
}

const stickerRegisterComponentsList = [
    <StickerRegisterPart1 />,
    <ImageUploadContent title="스티커 파일 업로드"/>
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

export default () => {
    return (
        <SubPageTemplate
            header="마이 스튜디오"
            data={navigationData}
            contentsJSX={stickerRegisterComponentsList}
            completeButton={<SubPageCompleteButton text="제안하기" />}
        ></SubPageTemplate>
    );
};
