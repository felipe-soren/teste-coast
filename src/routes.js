import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Context } from "./Context/AuthContext";

import Login from "./pages/Login";
import Users from "./pages/Home";
import CreateAr from "./pages/CreateAr";
import UploadedAr from "./pages/UploadedAr";
import AccountSettings from "./pages/AccountSettings";
import Folders from "./pages/Folders";
import ModelPage from "./pages/ModelPage";

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return null;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/login" component={Login} />
      <CustomRoute exact path="/" component={() => <Redirect to="/login" />} />
      <CustomRoute isPrivate exact path="/home" component={Users} />
      <CustomRoute isPrivate exact path="/create-ar" component={CreateAr} />
      <CustomRoute isPrivate exact path="/uploaded-ar" component={UploadedAr} />
      <CustomRoute
        isPrivate
        exact
        path="/account"
        component={AccountSettings}
      />
      <CustomRoute isPrivate exact path="/folders" component={Folders} />
      <CustomRoute
        isPrivate
        exact
        path="/folder/:name"
        component={UploadedAr}
      />
      <CustomRoute exact path="/model/:id" component={ModelPage} />
    </Switch>
  );
}
