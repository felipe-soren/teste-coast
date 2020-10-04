import React from "react";
import { Form, Button } from "react-bootstrap";
import DefaultLayout from "../__layouts/defaultLayout";

import { Container, AccountSettingCard } from "./styles";

function AccountSettings() {
  return (
    <DefaultLayout>
      <Container>
        <div className="form-header">
          <legend>
            <span>GLB Model</span>
          </legend>
        </div>
        <Form>
          <AccountSettingCard>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter email" />
            </Form.Group>
          </AccountSettingCard>
          <Button block>SAVE DATA</Button>
        </Form>
      </Container>
    </DefaultLayout>
  );
}

export default AccountSettings;
