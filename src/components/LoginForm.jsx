import React, { useContext, useRef } from "react";
import { LoginContext } from "../context/LoginContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function LoginForm({ setShowModal }) {
  const username = useRef(null);
  const password = useRef(null);

  const Login = useContext(LoginContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (Login.login(username.current.value, password.current.value)) setShowModal(false);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>نام کاربری</Form.Label>
        <Form.Control
          ref={username}
          type="text"
          placeholder="Username"
          autoFocus
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>رمز عبور</Form.Label>
        <Form.Control ref={password} type="password" placeholder="Password" />
      </Form.Group>
      <Button onClick={handleLogin} variant="primary" type="submit">
        ورود
      </Button>
    </Form>
  );
}

export default LoginForm;
