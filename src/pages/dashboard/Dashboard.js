import React from 'react';
import {connect} from "react-redux";
import {Button} from "react-bootstrap";
import {logout} from "../../redux/actions/auth.action";

const Dashboard = ({ userInfoState, logoutAction }) => {
  return <>
    {userInfoState.firstName} - {userInfoState.lastName} -
    <Button className="mt-3" variant="primary" onClick={logoutAction}>Logout</Button>
    <br/>
  </>
}

const mapStateToProps = ({ auth }) => ({
  userInfoState: auth.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  logoutAction: (payload) => dispatch(logout(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
