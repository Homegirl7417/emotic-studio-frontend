import React from "react";
import PropTypes from 'prop-types';
import CheckBoxContent from "../../SubPageContents/CheckBoxContent";
import TextAreaContent from "../../SubPageContents/TextAreaContent";


const stickerGenreCheckBoxData = ["Sticker", "Animated Sticker"];
const stickerCounterCheckBoxData = ["16종","24종","32종","40종"];
const StickerRegisterPart1 = (props) =>{
    console.log("스티커반려의 props: ",props);
    return (
        <div className="sticker-register">
                <CheckBoxContent
                    title="스티커 종류"
                    isRequire={true}
                    checkBox={stickerGenreCheckBoxData}
                    handleCheck={props.handleCheck}
                    checkedValues={props.checkedValues}
                    checkingValue={props.checkingValue}
                />
                <CheckBoxContent
                    title="스티커 개수"
                    isRequire={true}
                    checkBox={stickerCounterCheckBoxData}
                    handleCheck={props.handleCheck}
                    checkedValues={props.checkedValues}
                    checkingValue={props.checkingValue}
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
                    checkBox={["Only Image","한국어","영어","일본어","스페인어","독일어","베트남어","기타"]}
                    handleCheck={props.handleCheck}
                    checkedValues={props.checkedValues}
                    checkingValue={props.checkingValue}
                ></CheckBoxContent>
                <CheckBoxContent
                    title="판매 가격"
                    isRequire={true}
                    checkBox={["무료", "0.9달러", "1.9달러"]}
                    handleCheck={props.handleCheck}
                    checkedValues={props.checkedValues}
                    checkingValue={props.checkingValue}
                ></CheckBoxContent>
                <CheckBoxContent
                    title="번역 요청"
                    isRequire={true}
                    checkBox={["예", "아니요"]}
                    handleCheck={props.handleCheck}
                    checkedValues={props.checkedValues}
                    checkingValue={props.checkingValue}
                ></CheckBoxContent>
                {
                    props.checkedValues[0] === "예"
                    ? (
                        <CheckBoxContent
                            title={
                                <span>
                                    <div style={{ fontSize : "0.7rem" }}>(복수선택가능)</div>
                                    <span>요청 목록</span>
                                </span>
                            }
                            isRequire={true}
                            checkBox={["영어", "일본어","스페인어"]}
                            handleCheck={props.handleCheck}
                            checkedValues={props.checkedValues}
                            checkingValue={props.checkingValue}
                        ></CheckBoxContent>
                    )
                    : null
                }
                <CheckBoxContent
                    title="약관 확인"
                    isRequire={true}
                    checkBox={["약관에 동의합니다."]}
                    handleCheck={props.handleCheck}
                    checkedValues={props.checkedValues}
                    checkingValue={props.checkingValue}
                ></CheckBoxContent>
        </div>
    )
}
export default StickerRegisterPart1;