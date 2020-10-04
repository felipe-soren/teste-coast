import styled from "styled-components";
import { Form } from "react-bootstrap";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  width: 90%;
  max-width: 450px;
  height: 400px;
  background: #fff;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const LoginHeader = styled.div`
  padding-top: 30px;
  padding-left: 30px;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const LoginForm = styled(Form)`
  padding: 40px;
`;

export const Buttons = styled.div`
  padding-top: 1rem;
  margin-top: 0.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;
