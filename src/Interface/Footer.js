import React from "react";

import "./scss/Footer.scss";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__bottom">
                    <div className="footer__bottom__left">
                        <div className="footer__bottom__first">
                            <span>개인 정보 보호법</span>
                            <span>이용약관</span>
                        </div>
                        <div className="footer__bottom__second">
                            <span>Emoticbox@gmail.com</span>
                        </div>
                    </div>
                    <div className="footer__bottom__right">
                        <div>
                            <i class="fab fa-instagram"></i>
                        </div>
                        <div>
                            <i class="fab fa-twitter"></i>
                        </div>
                        <div>
                            <i class="fab fa-facebook-f"></i>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
