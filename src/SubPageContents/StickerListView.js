import React from "react";
import { Link } from "react-router-dom"; 
import "./scss/StickerListView.scss";

class StickerListView extends React.Component {
    render() {
        return (
            <div className="sticker-list-view">
                <div className="sticker-list-view__title">
                    {this.props.title}
                </div>
                <div className="sticker-list-view__grid-wrapper">
                    {this.props.data.map((data, idx) => {
                        return (
                            <Link to={`/mystudio/${data.type}/${data.index}`}>
                                <div
                                    key={idx}
                                    className="sticker-list-view__sticker-wrapper"
                                >   
                                    <img
                                        className="sticker-list-view__sticker-image"
                                        src={data.link}
                                        alt={data.title}
                                    />
                                    <div className="sticker-list-view__sticker-title">
                                        {data.title}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default StickerListView;
