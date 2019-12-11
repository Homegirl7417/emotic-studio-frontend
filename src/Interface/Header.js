import React from "react";

import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import LoginForm from "./LoginForm";
import "./scss/Header.scss";


class Header extends React.Component {
    
    constructor() {
        super();
        this.state = {

        };
    }
    static propTypes={
        isLoggedIn:PropTypes.bool.isRequired
    }


    render() {
        const {email,password,loginSubmit,isLoggedIn} = this.props
        return (
            <header>
                <div className="header">
                    <div className="header__column">
                        <Link to="/" className="header__home-link">
                            <img
                                src="/images/emotic-box-logo.svg"
                                alt="EmoticStudio"
                            ></img>
                        </Link>
                    </div>
                    <div className="header__column">
                        <nav className="header__nav">
                            <Link
                                to="/guide"
                                className="nav__guide-line nav-item"
                            >
                                가이드 라인
                            </Link>
                            <Link
                                to="/faq/service"
                                className="nav__faq nav-item"
                            >
                                FAQ
                            </Link>

                            {(() => {
                                if (!isLoggedIn) {
                                    return (
                                        <LoginForm
                                            className="nav__my-studio nav-item"
                                            {...this.props}
                                        ></LoginForm>
                                    );
                                } else {
                                    return (
                                        <Link
                                            to="/mystudio/sticker-register"
                                            className="nav__my-sutdio nav-item"
                                        >
                                            마이 스튜디오
                                        </Link>
                                    );
                                }
                            })()}
                            <Link
                                to="/guide"
                                className="nav__guide-line nav-item"
                            >
                                커뮤니티
                            </Link>
                        </nav>
                        <div className="header__language">
                            <i></i>
                            <i></i>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
