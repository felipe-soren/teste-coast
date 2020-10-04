import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 40px 60px;
`;

export const ResponsiveGrid = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const GridItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h6 {
    color: #100000;
  }
`;

export const GridItemButton = styled.button`
  background: transparent;
  border: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
