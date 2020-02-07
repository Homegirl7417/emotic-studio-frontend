import React from "react";
import '../scss/Wallet.scss';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Calender() {
    return (
        <div className="calender">
            <div className="calender__header">
                <button><IoIosArrowBack value={{ color: "#AAAAAA" }}/></button>
                <span className="calender__day">2019.10</span>
                <button><IoIosArrowForward /></button>
            </div>
        </div>
    )
}

class WalletWithdraw extends React.Component {
    render() {
        return (
            <div className="wallet__withdraw">
                <h3 className="wallet__title">출금 내역</h3>
                <Calender />
                <table>
                    <thead className="wallet__withdrawIndex">
                        <tr>
                            <th>날짜</th><th>출금액</th><th>잔액</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2020-02-07</td><td>1000</td><td>9000</td>
                        </tr>
                        <tr>
                            <td>2020-02-05</td><td>1000</td><td>10000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default WalletWithdraw;