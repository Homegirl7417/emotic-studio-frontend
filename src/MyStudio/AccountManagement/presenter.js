import React from "react";
import SubPageTemplate from "../../SubPageTemplate";
import SubPageCompleteButton from "../../SubPageContents/SugPageCompleteButton";
import Profile from "./profile";

import '../scss/AccountManagement.scss';

class AccountManagement extends React.Component {
    render() {
        return (
            <SubPageTemplate
                header="마이 스튜디오"
                data={navigationData}
                contentsJSX={[<Profile />]}
                completeButton={<SubPageCompleteButton text="정보 수정하기" />}
            />
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

export default AccountManagement;