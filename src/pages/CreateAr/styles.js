import styled from "styled-components";
import { Card } from "../Home/styles";

import { Form } from "react-bootstrap";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 60px;
`;

export const FormCard = styled(Card)`
  width: 100%;
  height: auto;

  .form-item {
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  legend {
    font-size: 0.99rem;
    display: block;
    margin-bottom: 1.5rem;
    position: relative;
    color: #047bf8;

    &:before {
      content: "";
      width: 100%;
      position: absolute;
      left: 0px;
      right: 0px;
      height: 1px;
      top: 50%;
      background-color: rgba(0, 0, 0, 0.1);
      z-index: 1;
    }

    span {
      padding: 0px 0.5rem 0 0;
      background-color: #fff;
      display: inline-block;
      z-index: 2;
      position: relative;
    }
  }
`;

export const FormUpload = styled(Form)`
  border: 2px dashed #047bf8;
  position: relative;
  margin: 25px 0px;
  width: 100%;
  height: 200px;
`;
