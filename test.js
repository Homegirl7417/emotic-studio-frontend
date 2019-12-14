class Whatever extends React.Component {
    constructor(props) {
      super(props);
  
      this.handleCheck = this.handleCheck.bind(this);
      this.state = {
        foo: "",
      }
    }
  
    handleCheck(ev, checked) {
      window.setTimeout(
        function() {
          this.setState({foo: "bar"});
        }.bind(this),
        0
      );
    }
  
    render() {
      return (
        <div style={styles.block}>
          <b>{this.state.foo}</b>
          {(this.props.options || []).map(function(option, i) {
            return <Checkbox
              onCheck={this.handleCheck}
              key={option.value}
              value={option.value}
              label={option.label}
            />
          }.bind(this))}
        </div>
      );
    }
  }
  supportedLanguage: [
    "Only Image",
    "한국어",
    "영어",
    "일본어",
    "스페인어",
    "독일어", 
    "베트남어",
    "러시아어",
    "이태리어",
    "기타"
]