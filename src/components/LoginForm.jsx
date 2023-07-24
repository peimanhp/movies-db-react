import React, { useContext, useRef, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function LoginForm({ setShowModal }) {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [errorAlert, setErrorAlert] = useState(false);

  const Login = useContext(LoginContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (Login.login(usernameRef.current.value, passwordRef.current.value)) {
      setErrorAlert(false);
      setShowModal(false);
    } else setErrorAlert(true);
  };

  return (
    <Form onSubmit={handleLogin}>
      <Alert key={"success"} variant={"success"}>
        for developing test:
        <br />
        username: admin
        <br />
        password: admin
      </Alert>
      {errorAlert ? (
        <Alert key={"danger"} variant={"danger"}>
          {Login.errorMsg}
        </Alert>
      ) : null}
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <div className="d-grid gap-2">
          <Form.Label className="text-dark ms-auto">نام کاربری</Form.Label>
        </div>
        <Form.Control
          ref={usernameRef}
          type="text"
          placeholder="نام کاربری"
          required
          autoFocus
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formGroupPassword">
        <div className="d-grid gap-2">
          <Form.Label className="text-dark ms-auto">رمز عبور</Form.Label>
        </div>
        <Form.Control
          ref={passwordRef}
          type="password"
          placeholder="رمز عبور"
          required
        />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="secondary" type="submit">
          ورود
        </Button>
      </div>
    </Form>
  );
}

export default LoginForm;
