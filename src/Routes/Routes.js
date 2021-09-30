import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import ClickingComponent from "../components/Clicking/ClickingComponent";
import SubscriptionComponent from "../components/Subscription/SubscriptionComponent";
import TagsComponent from "../components/TagsComponent/TagsComponent";
import ArchievesPage from "../pages/ArchievesPage";

import DetailPage from "../pages/DetailPage";
import EmptyScreenPage from "../pages/EmptyScreenPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NewNotePage from "../pages/NewNotePage";
import NotesScreenPage from "../pages/NotesScreenPage";
import PagesPage from "../pages/PagesPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import { SignUpPage } from "../pages/SignUpPage";
import UserPage from "../pages/UserPage";
import ProtectedRoute from "./PrivateRoute";

const Routes = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignUpPage} />
        <Route exact path='/detail' component={DetailPage} />

        <Route exact path='/forgotPassword' component={ForgotPasswordPage} />
        <Route exact path='/resetPassword' component={ResetPasswordPage} />

        <ProtectedRoute exact path='/newNote' component={NewNotePage} />
        <ProtectedRoute exact path='/' component={HomePage} />
        <ProtectedRoute exact path='/user' component={UserPage} />
        <ProtectedRoute exact path='/noteScreen' component={NotesScreenPage} />
        <ProtectedRoute exact path='/emptyScreen' component={EmptyScreenPage} />
        <ProtectedRoute exact path='/archives' component={ArchievesPage} />
        <ProtectedRoute exact path='/tags' component={TagsComponent} />
        <ProtectedRoute
          exact
          path='/subscription'
          component={SubscriptionComponent}
        />
        <ProtectedRoute exact path='/clicking' component={ClickingComponent} />

        <Route exact path='/pages' component={PagesPage} />
      </Switch>
    </div>
  );
};

export default Routes;
