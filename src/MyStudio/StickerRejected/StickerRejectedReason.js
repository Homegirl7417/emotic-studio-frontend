import React from "react";
import '../scss/OneStickerRejected.scss';

class RejectedReason extends React.Component {
    render() {
        return (
            <div className="stickerRejected">
                <h3 className="stickerRejected__title">반려 사유</h3>
                <div className="stickerRejected__reason"></div>
            </div>
        )
    }
}

export default RejectedReason;