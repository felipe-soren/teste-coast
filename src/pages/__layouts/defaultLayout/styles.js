import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .card {
    display: flex;
    flex-direction: row;
    width: 90%;
    max-width: 1600px;
    min-height: 735px;
    background: #fff;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
`;
