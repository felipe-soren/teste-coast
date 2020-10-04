import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  padding: 55px;

  .table-wrapper {
    padding: 1rem;
    width: 100%;

    .table-header {
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      width: 100%;

      &:after {
        content: "";
        background-color: #047bf8;
        width: 22px;
        height: 6px;
        border-radius: 2px;
        display: block;
        position: relative;
        top: 3px;
      }
    }
  }
`;

export const Card = styled.div`
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 0px 30px rgba(69, 101, 173, 0.1);
  width: 100%;
  height: 150px;
  padding: 1.5rem 2rem;

  @media only screen and (max-width: 1200px) {
    margin-bottom: 15px;
  }

  p {
    font-weight: 200;
    font-size: 12px;
  }

  .total {
    font-size: 29px;
  }

  .requirements {
    font-weight: 500;
  }
`;

export const BlueCard = styled(Card)`
  background-image: linear-gradient(-154deg, #1643a3 8%, #2e1170 90%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TableCard = styled(Card)`
  margin-top: 15px;
  width: 100%;
  height: auto;
`;
