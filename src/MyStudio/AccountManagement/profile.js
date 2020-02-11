import React from "react";

class Profile extends React.Component {
    render() {
        return (
            <div className="account-management">
                <h3>작가 정보 관리</h3>
                <div className="account-management__profileList"> 
                    <div className="account-management__profileItem"> 
                        <div className="account-management__index profile-style">프로필 사진</div>
                        <div className="account-management__profile-image">
                            <label
                                className="account-management__image-upload-content"
                            >
                                <div className="account-management__plus-icon">
                                    +
                                </div>
                                <input className="account-management__input-element" type="file" id="upload-button" style={{ display: 'none' }} />
                            </label>
                        </div>
                    </div>
                    <div className="account-management__profileItem"> 
                        <div className="account-management__index">닉네임</div>
                        <div className="account-management__account">엄마딸</div>
                    </div>
                    <div className="account-management__profileItem"> 
                        <div className="account-management__index">이메일</div>
                        <div className="account-management__account whiteStyle">abcde@gmail.com</div>
                    </div>
                    <div className="account-management__profileItem"> 
                        <div className="account-management__index">생년월일</div>
                        <div className="account-management__account whiteStyle">1998.01.11</div>
                    </div>
                    <div className="account-management__profileItem"> 
                        <div className="account-management__index">현재 비밀번호</div>
                        <div className="account-management__account">test</div>
                    </div>
                    <div className="account-management__profileItem"> 
                        <div className="account-management__index">새로운 비밀번호</div>
                        <div className="account-management__account">test</div>
                    </div>
                    <div className="account-management__profileItem"> 
                        <div className="account-management__index">비밀번호 확인</div>
                        <div className="account-management__account">test</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;