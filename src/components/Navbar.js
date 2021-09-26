import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { SignOut } from "../services/authentication.service";
import { FcBusinessman } from "react-icons/fc";
const NavbarComponent = () => {
  const { isLoggedIn, fullName } = useSelector(
    (state) => state.authenticationReducer
  );
  const dispatch = useDispatch();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          href="/"
          style={{ fontFamily: "Brush Script MT, cursive" }}
        >
          My Expenses
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {isLoggedIn ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <NavLink style={{ marginLeft: "1rem" }} variant="link" to="/">
              Home
            </NavLink>
            <NavLink
              style={{ marginLeft: "1rem" }}
              variant="link"
              to="/statistics"
            >
              Statistics
            </NavLink>
            <NavLink style={{ marginLeft: "1rem" }} variant="link" to="/users">
              Registered Users
            </NavLink>

            <Button
              variant="link"
              href="/signin"
              onClick={() => SignOut(dispatch)}
            >
              <FcBusinessman
                data-toggle="tooltip"
                data-placement="bottom"
                title={fullName}
              />
              Log Out
            </Button>
          </div>
        ) : (
          <div style={{ display: "flex" }}>
            <NavLink to="/signup">Sign up</NavLink>
            <NavLink to="/signin" style={{ marginLeft: "1rem" }}>
              Sign in
            </NavLink>
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
