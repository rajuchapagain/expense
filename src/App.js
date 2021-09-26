import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignInPage from "./components/Auth/signIn.Page";
import HomePage from "./components/HomePage";
import UserList from "./components/Users/UserList";
import SignUpPage from "./components/Auth/signUp.Page";
import { useSelector, useDispatch } from "react-redux";
import { SetAuthenticated } from "./services/authentication.service";
import NavbarComponent from "./components/Navbar";
import ExpenseStatistics from "./components/Expenses/ExpenseStatistics";

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.authenticationReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const sessionUser = JSON.parse(sessionStorage.getItem("user"));
    if (sessionUser !== undefined && sessionUser !== null) {
      SetAuthenticated(dispatch, sessionUser);
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (isLoggedIn ? <HomePage /> : <SignInPage />)}
        ></Route>
        <Route
          path="/signup"
          render={() => (isLoggedIn ? <HomePage /> : <SignUpPage />)}
        />
        <Route
          path="/signin"
          render={() => (isLoggedIn ? <HomePage /> : <SignInPage />)}
        />
        <Route
          path="/statistics"
          render={() => (isLoggedIn ? <ExpenseStatistics /> : <SignInPage />)}
        />
        <Route
          path="/users"
          render={() => (isLoggedIn ? <UserList /> : <SignInPage />)}
        />
        <Route component={() => <h2>Page not found!</h2>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
