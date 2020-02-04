import React from "react";
import "./scss/Manual.scss";

const stickerRequirementData = [
    {
        checkedTab: "sticker",
        stickerInfo: [
            "16,24,32,40종 중 하나",
            "최대 너비 370 X 높이 320",
            "PNG"
        ],
        notice: [
            "최소 해상도는 72dpi, 색상 모드는 RGB로 제작해 주세요.",
            "스티커 하나당 1MB 이하까지 지원됩니다.",
            "스티커 배경은 투명해야합니다.",
            "크리에이터명은 최대 50자까지 지원됩니다.",
            "스티커 타이틀명은 최대 50자까지 지원됩니다.",
            "스티커 소개글은 최대 200자까지 지원됩니다.",
            "스티커 키워드는 태그( ex.#가족 #화목) 형태로 적어야하며, 상세할수록 분류나 홍보에 용이합니다.",
            "모든 스티커 내 글자는 텍스트만 지원됩니다.",
            "영어를 제외한 글자는 해당 사용 국가만을 지원합니다. "
        ],
        imageNotice: [
            "스티커 가장자리와 콘텐츠 사이에는 10px 정도의 여백을 넣어 제작해 주세요. "
        ],
        otherNotice: [
            "광고가 목적인 스티커는 “비즈니스 스티커”로 분류되며, 스티커 등록 과정에서 명확한 분류가 필요합니다.",
            "스티커 등록시 스티커가 지원하는 언어에 따라 타이틀명을 해당 언어에 맞게 로컬라이징하여 등록해주세요.",
            "EmoticBox는 “LINE CREATORS MARKET”의 스티커 제작 규격을 지원합니다.",
            "그 외 스티커 제작 및 등록 관련 문의는 emoticBox@gmail.com 으로 연락주시기 바랍니다."
        ]
    },
    {
        checkedTab: "animated",
        stickerInfo: [
            "16,24,32,40종 중 하나",
            "최대 너비 320 X 높이 270",
            "PNG(APNG)"
        ],
        notice: [
            "최소 해상도는 72dpi, 색상 모드는 RGB로 제작해 주세요.",
            "스티커 하나당 2MB 이하까지 지원됩니다.",
            "스티커 배경은 투명해야합니다.",
            "스티커 프레임은 25프레임이하로 제작해 주세요.",
            "스티커의 전체 재생 시간은 최대 4초입니다.",
            "크리에이터명은 최대 50자까지 지원됩니다.",
            "스티커 타이틀명은 최대 50자까지 지원됩니다.",
            "스티커 소개글은 최대 200자까지 지원됩니다.",
            "스티커 키워드는 태그( ex.#가족 #화목) 형태로 적어야하며, 상세할수록 분류나 홍보에 용이합니다.",
            "모든 스티커 내 글자는 텍스트만 지원됩니다.",
            "영어를 제외한 글자는 해당 사용 국가만을 지원합니다. "
        ],
        imageNotice: [
            "스티커 가장자리와 콘텐츠 사이의 여백은 가능한한 모두 삭제해 주세요."
        ],
        otherNotice: [
            "광고가 목적인 스티커는 “비즈니스 스티커”로 분류되며, 스티커 등록 과정에서 명확한 분류가 필요합니다.",
            "스티커 등록시 스티커가 지원하는 언어에 따라 타이틀명을 해당 언어에 맞게 로컬라이징하여 등록해주세요.  ",
            "EmoticBox는 “LINE CREATORS MARKET”의 스티커 제작 규격을 지원합니다.",
            "그 외 스티커 제작 및 등록 관련 문의는 emoticBox@gmail.com 으로 연락주시기 바랍니다."
        ]
    },
];

class Manual extends React.Component {
    constructor() {
        super();
        this.state = {
            checkedTab: "sticker"
        };
    }

    changeButton(button) {
        if (!(button === "sticker" || button === "animated")) {
        }
        this.setState({
            checkedTab: button
        });
    }

    render() {
        const { checkedTab } = this.state;
        return (
            <div className="manual">
                <div className="manual__btn-group">
                    <button
                        className="manual__btn"
                        style={{
                            borderBottom:
                                checkedTab === "sticker"
                                    ? "2px solid #de3621"
                                    : "none"
                        }}
                        onClick={() => {
                            this.changeButton("sticker");
                        }}
                    >
                        Sticker
                    </button>
                    <button
                        className="manual__btn"
                        style={{
                            borderBottom:
                                checkedTab === "animated"
                                    ? "2px solid #de3621"
                                    : "none"
                        }}
                        onClick={() => {
                            this.changeButton("animated");
                        }}
                    >
                        Animated Sticker
                    </button>
                </div>
                <div className="manual__guideline">
                    <h2 className="manual__guideline__title">요구사항</h2>
                    <section className="manual__guideline__stickerInfo">
                        <table>
                            <thead>
                                <tr>
                                    <th>스티커 개수</th><th>스티커 사이즈</th><th>파일 형식</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {
                                        checkedTab === "sticker"  
                                            ? (stickerRequirementData[0].stickerInfo.map((data, index) => {
                                                return <td key={index}>{data}</td>
                                            }))
                                            : null
                                    }
                                    {
                                        checkedTab === "animated"  
                                            ? (stickerRequirementData[1].stickerInfo.map((data, index) => {
                                                return <td key={index}>{data}</td>
                                            }))
                                            : null
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section className="manual__guideline__noticeInfo">
                        <ul>
                            {
                                checkedTab === "sticker"  
                                    ? (stickerRequirementData[0].notice.map((data, index) => {
                                        return <li key={index}>・{data}</li>
                                    }))
                                    : null
                            }
                            {
                                checkedTab === "animated"  
                                    ? (stickerRequirementData[1].notice.map((data, index) => {
                                        return <li key={index}>・{data}</li>
                                    }))
                                    : null
                            }
                        </ul>
                    </section>
                    <section className="manual__guideline__imageInfo">
                        <h3>이미지 여백</h3>
                        <div className="manual__guideline__imageWrap">
                            <span className="manual__guideline__imageSample">
                                {
                                    checkedTab === "sticker"  
                                        ? <img alt="stickerSample" src="/images/sticker-right.png"></img>
                                        : null
                                }
                                {
                                    checkedTab === "animated"  
                                        ? <img alt="animatedSample" src="/images/animated-right.png"></img>
                                        : null
                                }   
                                <div style={{color: "#67DA91"}}>옳은 예</div>
                            </span>
                            <span className="manual__guideline__imageSample">
                                {
                                    checkedTab === "sticker"  
                                        ? <img alt="stickerWrongSample" src="/images/sticker-wrong.png"></img>
                                        : null
                                }
                                {
                                    checkedTab === "animated"  
                                        ? <img alt="animatedWrongSample" src="/images/animated-wrong.png"></img>
                                        : null
                                }   
                                <div style={{color: "#F26C55"}}>틀린 예</div>
                            </span>
                        </div>
                        <div>
                            <ul>
                                {
                                    checkedTab === "sticker"  
                                        ? (stickerRequirementData[0].imageNotice.map((data, index) => {
                                            return <li key={index}>・{data}</li>
                                        }))
                                        : null
                                }
                                {
                                    checkedTab === "animated"  
                                        ? (stickerRequirementData[1].imageNotice.map((data, index) => {
                                            return <li key={index}>・{data}</li>
                                        }))
                                        : null
                                }
                            </ul>
                        </div>
                    </section>
                    <section className="manual__guideline__otherInfo">
                        <h3>기타 유의사항</h3>
                        <div>
                            <ul>
                                {
                                    checkedTab === "sticker"  
                                        ? (stickerRequirementData[0].otherNotice.map((data, index) => {
                                            return <li key={index}>・{data}</li>
                                        }))
                                        : null
                                }
                                {
                                    checkedTab === "animated"  
                                        ? (stickerRequirementData[1].otherNotice.map((data, index) => {
                                            return <li key={index}>・{data}</li>
                                        }))
                                        : null
                                }
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Manual;
