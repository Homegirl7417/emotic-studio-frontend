import React from "react";
import '../scss/OneAccountWallet.scss';

class OneAccountWallet extends React.Component {
    render() {
        return (
            <div className="wallet">
                <div className="wallet__property">
                    <h3 className="wallet__title">수익 관리</h3>

                </div>
                <div className="wallet__withdraw">
                    <h3 className="wallet__title">출금 내역</h3>

                </div>
                <div className="wallet__paypal">
                    <h3 className="wallet__title">Paypal</h3>

                </div>
                <div className="wallet__account">
                    <h3 className="wallet__title">계좌</h3>
                </div>
            </div>
        )
    }
}

export default OneAccountWallet;