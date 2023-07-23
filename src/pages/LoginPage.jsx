import React from 'react'
import { Container } from 'react-bootstrap';
import Form from "react-bootstrap/Form";

function LoginPage() {
    return (
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
      </Container>
    );
}

export default LoginPage