import { Form, Button, FormControl, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SignIn } from "../../services/authentication.service";
import GoogleSignIn from "../ThirdPartyAuth/GoogleSignIn";
import { Link } from "react-router-dom";
const SignInPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  return (
    <div style={{ width: "30rem", margin: "auto", paddingTop: "8px" }}>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          SignIn(dispatch, { userName, password });
        }}
      >
        <h4 style={{ textAlign: "center" }}>Welcome Back </h4>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="UserName"
            onChange={(event) => setUserName(event.target.value)}
          ></FormControl>
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Password"
            type="password"
            autoComplete="on"
            onChange={(event) => setPassword(event.target.value)}
          ></FormControl>
        </InputGroup>
        <InputGroup className="mb-3">
          <Button
            type="submit"
            variant="primary"
            style={{
              margin: "auto",
              display: "block",
              width: "10rem",
              textAlign: "center",
            }}
          >
            Sign in
          </Button>

          <Link
            to="/signup"
            variant="btn btn-link"
            style={{ margin: "auto", display: "block", width: "10rem" }}
          >
            Sign up
          </Link>
        </InputGroup>
      </Form>
      <GoogleSignIn />
    </div>
  );
};

export default SignInPage;
