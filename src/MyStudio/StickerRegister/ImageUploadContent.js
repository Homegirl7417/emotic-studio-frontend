import React from "react";
import PropTypes from 'prop-types';
import FileDrop from "react-file-drop";
import "../scss/ImageUploadContent.scss"
class ImageUploadContent extends React.Component {
    static propTypes={
        handleImageChange:PropTypes.func.isRequired,
        stickers:PropTypes.array.isRequired,
        stickerCount:PropTypes.number.isRequired
    };
    constructor() {
        super();
        this.state = {
            imageOn: [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ]
        };
    }

    imageDrop(idx) {
        console.log("drop");
        const imageOn = this.state.imageOn;
        imageOn[idx] = true;
        this.setState({
            imageOn: imageOn,
            ...this.setState
        });
    }
    render() {
        const { handleImageChange,stickers,stickerCount } = this.props;
        return (
            <div className="image-upload-content">
                {console.log("**StickerRegister/ImageUploadContent.js의 props: ", this.props)}
                {console.log("imageOn: ", this.state.imageOn)}
                <div className="image-upload-content__title">
                    {this.props.title}
                    <span style={{ color: "red", fontSize: "1.0rem" }}> *</span>
                    <div className="image-upload-content__clause-check">
                        가이드 라인 확인
                    </div>
                </div>
                <div className="image-upload-content__grid-wrapper">
                    {[...Array(stickerCount).keys()].map((key, idx) => {
                        if (stickers[idx]) {
                            return (
                                <>
                                <label
                                    className="image-upload-content__grid-element"
                                    key={key}
                                >
                                    <div className="grid-element__plus-icon">
                                        <img
                                            src={URL.createObjectURL(stickers[idx])}
                                            alt="img"
                                            key={key}
                                            className="grid-element__pre-view"
                                        ></img>
                                    </div>
                                    <input className="grid-element__input-element" type="file" id="upload-button" style={{ display: 'none' }} onChange={e=>handleImageChange(e,idx)}/>
                                </label>
                                
                                </>
                                
                            );
                        } else {
                            return (
                                <>
                                <label
                                    className="image-upload-content__grid-element"
                                    key={key}
                                >
                            
                                    <div className="grid-element__plus-icon">
                                        +
                                    </div>
                                    <input className="grid-element__input-element" type="file" id="upload-button" style={{ display: 'none' }} onChange={e=>handleImageChange(e,idx)}/>
                                </label>
                                
                                </>
                            );
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default ImageUploadContent;
