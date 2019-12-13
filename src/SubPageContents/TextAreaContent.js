import React from "react";
import PropTypes from 'prop-types';
import "./scss/TextAreaContent.scss";

import SubPageContentTemplate from "./SubPangeContentTemplate";

class TextAreaContent extends React.Component {
    static propTypes={
        value:PropTypes.string.isRequired,
        valueName:PropTypes.string.isRequired,
        onChange:PropTypes.func.isRequired,
    };
    render() {
        return (
            <SubPageContentTemplate
                title={this.props.title}
                isRequire={this.props.isRequire}
            >
                <div className="text-area-content">
                    <textarea
                        className="text-area-content__input"
                        rows={this.props.rows}
                        value={this.props.value}
                        onChange={e=>this.props.onChange(e,this.props.valueName)}
                    />
                </div>
            </SubPageContentTemplate>
        );
    }
}

export default TextAreaContent;
