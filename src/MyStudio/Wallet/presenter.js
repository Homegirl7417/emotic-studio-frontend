import React from "react";
import SubPageTemplate from "../../SubPageTemplate";
import WalletProperty from './WalletProperty';
import WalletWithdraw from './WalletWithdraw';
import WalletPaypal from './WalletPaypal';
import WalletAccount from './WalletAccount';

class Wallet extends React.Component {
    render() {
        return (
            <SubPageTemplate
                header="마이 스튜디오"
                data={navigationData}
                contentsJSX={[
                    <WalletProperty />,
                    <WalletWithdraw />,
                    <WalletPaypal />,
                    <WalletAccount />
                ]}
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

export default Wallet;