import React from "react";
import { Route } from "react-router-dom";
import PropTypes from 'prop-types';
import Header from "../Interface/Header";
import Footer from "../Interface/Footer";

import Home from "../Home";
import GuideLine from "../GuideLine";
import Faq from "../Faq";
import MyStudio from "../MyStudio";

import "../scss/App.scss";

class App extends React.Component{
    render(){
        return(
            <div className="App" style={{ backgroundColor: "#fcfcfc" }}>
                <Header {...this.props}/>
                <div className="main-contents">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/guide" component={GuideLine} />
                    <Route path="/faq" component={Faq}></Route>
                    <Route path="/mystudio" component={MyStudio} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;