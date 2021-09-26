import { Form, Button, FormControl, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SignUp } from "../../services/authentication.service";
import GoogleSignIn from "../ThirdPartyAuth/GoogleSignIn";
const SignUpPage = () => {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  return (
    <div style={{ width: "30rem", margin: "auto", paddingTop: "8px" }}>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          SignUp(dispatch, { userName, password, email, fullName });
        }}
      >
        <h4 style={{ textAlign: "center" }}>Register your user here</h4>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Full Name"
            onChange={(event) => setFullName(event.target.value)}
          ></FormControl>
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          ></FormControl>
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="UserName"
            onChange={(event) => setUserName(event.target.value)}
          ></FormControl>
        </InputGroup>

        <InputGroup className="mb-3">
          {" "}
          <FormControl
            placeholder="Password"
            type="password"
            autocomplete="on"
            onChange={(event) => setPassword(event.target.value)}
          ></FormControl>
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Confirm Password"
            type="password"
            autocomplete="on"
            onChange={(event) => setConfirmPassword(event.target.value)}
          ></FormControl>
        </InputGroup>
        <Button
          type="submit"
          variant="primary"
          style={{ margin: "auto", display: "block", width: "10rem" }}
          disabled={password !== confirmPassword || password.length < 1}
        >
          Sign Up
        </Button>
      </Form>
      <GoogleSignIn />
    </div>
  );
};

export default SignUpPage;
