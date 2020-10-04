import styled from "styled-components";
import { Card } from "../Home/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 40px 60px;

  .form-header {
    span {
      padding: 0px 0.5rem 0 0;
      background-color: #fff;
      display: inline-block;
      z-index: 2;
      position: relative;
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
    }
  }
`;

export const AccountSettingCard = styled(Card)`
  height: auto;
  padding: 40px 60px;
  margin-bottom: 50px;
`;
