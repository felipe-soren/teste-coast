import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import history from "../../history";

import { Context } from "../../Context/AuthContext";

import { Container, LoginBox, LoginHeader, LoginForm } from "./styles";

function Login() {
  const { handleLogin, authenticated } = useContext(Context);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    console.log("auth=>", authenticated);

    if (authenticated) {
      history.push("/home");
    }
  }, [authenticated]);

  const onSubmit = (data) => handleLogin(data);

  return (
    <Container>
      <LoginBox>
        <LoginHeader>
          <h4>Admin Login</h4>
        </LoginHeader>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              ref={register({ required: true })}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              ref={register({ required: true })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </LoginForm>
      </LoginBox>
    </Container>
  );
}

export default Login;
