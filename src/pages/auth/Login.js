import React, {useState} from 'react';
import {connect} from 'react-redux';
import {login} from "../../redux/actions/auth.action";
import {Form, Button} from 'react-bootstrap';

const Login = ({loginAction}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    loginAction({
      username,
      password,
    });
  };

  return (
    <div className="container">
      <div className="text-center mb-11">
        <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
      </div>
      <div>david - 123456</div>
      <Form.Label>UserName</Form.Label>
      <Form.Control
        type="text"
        onChange={e => setUsername(e.target.value)}
      />
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        onChange={e => setPassword(e.target.value)}
      />
      <Button className="mt-3" variant="primary" onClick={handleLogin}>Sign In</Button>
    </div>
  );
};

const mapStateToProps = ({auth}) => ({
  isLoading: auth.isLoading,
  message: auth.message,
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: (payload) => dispatch(login(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
