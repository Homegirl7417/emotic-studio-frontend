import React from "react";

import StickerRegister from "./MyStudio/StickerRegister";
import StickerManage from "./MyStudio/StickerManagement";
import StickerRegistered from "./MyStudio/OneStickerManagement"
import StickerPending from './MyStudio/StickerPending/presenter.js';
import StickerRejected from './MyStudio/StickerRejected';
import AccountManagement from "./MyStudio/AccountManagement/presenter.js";
import Wallet from "./MyStudio/Wallet/presenter.js";

import "./scss/MyStudio.scss";

import { Route } from "react-router-dom";

class MyStudio extends React.Component {
    render() {
        return (
            <div className="my-studio">
                {console.log("MyStudio.js의 라우터들이 받을 수 있는 props들: ", this.props)}
                <Route
                    exact
                    path="/mystudio/sticker-register"
                    component={StickerRegister}
                ></Route>
                <Route
                    exact
                    path="/mystudio/sticker-manage"
                    component={StickerManage}
                ></Route>
                <Route
                    exact
                    path="/mystudio/account-manage"
                    component={AccountManagement}
                ></Route>
                <Route
                    exact
                    path="/mystudio/wallet"
                    component={Wallet}
                ></Route>
                <Route
                    exact
                    path="/mystudio/rejected/:index"
                    component={StickerRejected}
                ></Route>
                <Route
                    exact
                    path="/mystudio/pending/:index"
                    component={StickerPending}
                ></Route>
                <Route
                    exact
                    path="/mystudio/registered/:index"
                    component={StickerRegistered}
                ></Route>
            </div>
        );
    }
}

export default MyStudio;
