// 자 새롭게 시작해보자g
import React from "react";
import { Route } from "react-router-dom";

import Header from "./Interface/Header";
import Footer from "./Interface/Footer";

import Home from "./Home";
import GuideLine from "./GuideLine";
import Faq from "./Faq";
import MyStudio from "./MyStudio";

import "./scss/App.scss";

const App = () => {
    return (
        <div className="App" style={{ backgroundColor: "#fcfcfc" }}>
            <Header />
            <div className="main-contents">
                <Route exact path="/" component={Home} />
                <Route exact path="/guide" component={GuideLine} />
                <Route path="/faq" component={Faq}></Route>
                <Route path="/mystudio" component={MyStudio} />
            </div>
            <Footer />
        </div>
    );
};

export default App;
