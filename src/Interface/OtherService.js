import React from "react";

import "./scss/Footer.scss";

class OtherService extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__top">
                    <div className="footer__top__left footer__top--font">
                        <div className="footer__top__content">
                            <div className="footer__top__text-content">
                                <div className="footer__top__title">
                                    EmoticBox
                                </div>
                                <div className="footer__top__question">
                                    다양한 이모티콘을 구매하고 싶으시다면?
                                </div>
                                <div className="footer__top__link">
                                    바로가기 <b>></b>
                                </div>
                            </div>
                            <img
                                className="footer__top__icon__left"
                                src="/images/footer-left-icon.svg"
                                alt="emoticbox"
                            ></img>
                        </div>
                    </div>
                    <div className="footer__top__right footer__top--font">
                        <div className="footer__top__content">
                            <div className="footer__top__text-content">
                                <div className="footer__top__title">
                                    EmoticBox devloper
                                </div>
                                <div className="footer__top__question">
                                    자신의 플랫폼에 EmoticBox SDK를 적용하고
                                    싶다면?
                                </div>
                                <div className="footer__top__link">
                                    바로가기 <b>></b>
                                </div>
                            </div>
                            <img
                                className="footer__top__icon__right"
                                src="/images/footer-right-icon.svg"
                                alt="emoticbox"
                            ></img>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default OtherService;
