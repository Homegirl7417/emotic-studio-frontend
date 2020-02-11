import React from "react";

import "./scss/SugPageCompleteButton.scss";

function SubPageCompleteButton({ text, id }) {
  return (
    <div className="sub-page-complete-button-wrapper">
      <button className="sub-page-complete-button">{text}</button>
      {
        (id === "stickerRejectedButton")
          ? <span id="deleteButton">제안 삭제하기</span>
          : null
      }
    </div>
  );
}

export default SubPageCompleteButton;
