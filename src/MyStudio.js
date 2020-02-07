import React from "react";

import StickerRegister from "./MyStudio/StickerRegister/index";
import StickerManage from "./MyStudio/StickerManagement";
import OneStickerManagement from "./MyStudio/OneStickerManagement";
import OneStickerExamine from './MyStudio/OneStickerExamine';
import AccountManagement from "./MyStudio/AccountManagement/presenter.js";
import Wallet from "./MyStudio/Wallet/presenter.js";

import "./scss/MyStudio.scss";

import { Route } from "react-router-dom";

class MyStudio extends React.Component {
    render() {
        return (
            <div className="my-studio">
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
            </div>
        );
    }
}

export default MyStudio;
