import React from "react";
import SubPageTemplate from "../../SubPageTemplate";
import SubPageCompleteButton from "../../SubPageContents/SugPageCompleteButton";

import "../scss/StickerPending.scss";

class StickerPending extends React.Component {
    render() {
        return (
            <div className="stickerPending">
                <h3>심사 중</h3>
                <div className="stickerPending__paragraph">
                    <div>
                        심사중입니다. 감사합니다.
                    </div>
                </div>
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
            contentsJSX={[<StickerPending />]}
            completeButton={<SubPageCompleteButton text="제안 취소하기" />}
        ></SubPageTemplate>
    );
};
