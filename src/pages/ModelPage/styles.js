import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const QRCodeContainer = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 100px;
  height: 100px;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
