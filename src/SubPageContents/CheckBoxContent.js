import React from "react";

import SubPageContentTemplate from "./SubPangeContentTemplate";

import "./scss/CheckBoxContent.scss";
import Checkbox from "@material-ui/core/Checkbox";

class CheckBoxContent extends React.Component {
  render() {
    const {handleCheck,checkedValues,checkingValue} = this.props;
    return (
      <SubPageContentTemplate
        title={this.props.title}
        isRequire={this.props.isRequire}
      >
        <div className="checkbox-content">
          {this.props.checkBox.map((data,index) => {
            return (
              <div className="checkbox-content__ckbox-element">
                <Checkbox color="default" onChange={()=>handleCheck(data)} checked={checkingValue(data) }/>
                <span className="checkbox-content__element-name">{data}</span>
              </div>
            );
          })}
        </div>
      </SubPageContentTemplate>
    );
  }
}

export default CheckBoxContent;
