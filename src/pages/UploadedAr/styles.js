import styled from "styled-components";
import { Card } from "../Home/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 40px 60px;

  .table td,
  .table th {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  }
`;

export const TableCard = styled(Card)`
  width: 100%;
  height: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  .table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 55px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;

    .pagination {
      display: flex;
      align-items: center;
    }
  }
`;

export const IconButton = styled.button`
  border: none;
  background: none;
  margin-right: 10px;
`;
