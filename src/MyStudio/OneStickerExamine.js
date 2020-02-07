import React from "react";

//import "./scss/OneStickerExamine.scss";
import SubPageTemplate from "../SubPageTemplate";

class StickerExamine extends React.Component {
    render() {
        return (
            <div>
                심사 중입니다. 감사합니다.
            </div>
        );
    }
}

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
            contentsJSX={
                <StickerExamine />
            }
        ></SubPageTemplate>
    );
};
