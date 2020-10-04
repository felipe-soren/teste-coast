import React from "react";

import Menu from "../../../Components/Menu";
import MobileMenu from "../../../Components/MobileMenu";

import { Container } from "./styles";

function defaultLayout({ children }) {
  return (
    <Container>
      <MobileMenu />
      <div className="card">
        <Menu />
        {children}
      </div>
    </Container>
  );
}

export default defaultLayout;
