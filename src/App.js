import React from "react";
import { Router } from "react-router-dom";

import Routes from "./routes";
import history from "./history";

import CreateGlobalStyle from "./styles/global";

import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <CreateGlobalStyle />
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
