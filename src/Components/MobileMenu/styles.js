import styled from "styled-components";

export const Container = styled.div`
  display: none;
  margin-bottom: 40px;

  @media only screen and (max-width: 900px) {
    display: flex;
  }

  nav {
    width: 100vw;
  }
`;
