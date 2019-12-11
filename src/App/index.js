import { connect } from "react-redux";
import { actionCreators as userAction } from "../redux/modules/users";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { users } = state;
  return {
    isLoggedIn:users.isLoggedIn
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login:(email,password)=>{
        return dispatch(userAction.login(email,password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);

