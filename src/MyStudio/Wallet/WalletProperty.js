import React from "react";
import '../scss/Wallet.scss';

class WalletProperty extends React.Component {
    render() {
        return (
            <div className="wallet__property">
                <h3 className="wallet__title">수익 관리</h3>
                <div className="wallet__propertyList">
                    <div className="wallet__propertyItem">
                        <div className="wallet__propertyIndex">누적 수익</div>
                        <div className="wallet__propertyValue">$100</div>
                    </div>
                    <div className="wallet__propertyItem">
                        <div className="wallet__propertyIndex">현재 보유 수익</div>
                        <div className="wallet__propertyValue">$4</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WalletProperty;