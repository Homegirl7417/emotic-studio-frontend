import React from "react";
import PropTypes from 'prop-types';
import CheckBoxContent from "../../SubPageContents/CheckBoxContent";
import TextAreaContent from "../../SubPageContents/TextAreaContent";


const supportedLanguage = [
    "Only Image",
    "한국어",
    "영어",
    "일본어",
    "스페인어",
    "독일어", 
    "베트남어",
    "기타"
]
const stickerGenreCheckBoxData = ["Sticker", "Animated Sticker"]
const StickerRegisterPart1 = (props) =>{
    return (
        <div className="sticker-register">
                <CheckBoxContent
                    title="스티커 종류"
                    isRequire={true}
                    checkBox={stickerGenreCheckBoxData}
                />
                <TextAreaContent
                    title="스티커 이름"
                    isRequire={true}
                    rows={2}
                    value={props.name}
                    valueName={"name"}
                    onChange={props.handleInputChange}
                />
                <TextAreaContent
                    title="키워드"
                    isRequire={false}
                    rows={6}
                    value={props.keyword}
                    valueName={"keyword"}
                    onChange={props.handleInputChange}
                />
                <TextAreaContent
                    title="스티커 스토리"
                    isRequire={false}
                    rows={6}
                    value={props.summary}
                    valueName={"summary"}
                    onChange={props.handleInputChange}
                />
                <CheckBoxContent
                    title="지원 언어"
                    isRequire={true}
                    checkBox={supportedLanguage}
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
    )
}
export default StickerRegisterPart1;