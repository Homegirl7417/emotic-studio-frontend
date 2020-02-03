import React from "react";

import "./scss/SubBanner.scss";

function SubBanner() {
    return (
            <div className="sub-banner">
                <div className="sub-banner__imagebox">
                    <img className="sub-banner__image" src="/images/sub-banner.png"></img>
                </div>
                <div className="sub-banner__textbox">
                    <h2 className="sub-banner__title">
                        EmoticBox는 모든 플랫폼이<br></br>
                        쓸 수 있는 이모티콘 SDK입니다.
                    </h2>
                    <p className="sub-banner__paragraph">
                        EmoticStudio에 등록된 이모티콘은 EmoticBox를 통해<br></br>
                        여러 플랫폼 유저들에게 사용 됩니다.
                    </p>
                </div>
            </div>  
    );
}

export default SubBanner;
