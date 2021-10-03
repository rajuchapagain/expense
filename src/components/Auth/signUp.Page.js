import { Form, Button, FormControl, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SignUp } from "../../services/authentication.service";
import GoogleSignIn from "../ThirdPartyAuth/GoogleSignIn";
const SignUpPage = () => {
  const dispatch = useDispatch();
  const defaultImageSrc = "/img/default.png";
  const initialState = {
    userName: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    imgSrc: defaultImageSrc,
    imageFile: null,
  };
  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setUser({
          ...user,
          imageFile,
          imgSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setUser({
        ...user,
        imgSrc: defaultImageSrc,
        imageFile: null,
      });
    }
  };
  const validate = () => {
    let temp = {};
    temp.fullName = user.fullName === "" ? false : true;
    temp.userName = user.userName === "" ? false : true;
    temp.password = user.password === "" ? false : true;
    temp.email = user.email === "" ? false : true;
    temp.imgSrc = user.imgSrc === defaultImageSrc ? false : true;
    setErrors(temp);
    return Object.values(temp).every((x) => x === true);
  };

  const applyErrorClass = (field) =>
    field in errors && errors[field] === false ? " invalid-field" : "";

  return (
    <div style={{ width: "30rem", margin: "auto", paddingTop: "8px" }}>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          if (validate()) {
            const formData = new FormData();
            formData.append("userName", user.userName);
            formData.append("email", user.email);
            formData.append("password", user.password);
            formData.append("fullName", user.fullName);
            formData.append("imgSrc", user.imgSrc);
            formData.append("imageFile", user.imageFile);
            SignUp(dispatch, formData);
            setUser(initialState);
            setErrors({});
            console.log("Validation success", errors);
          } else {
            console.log("Validation failed", errors);
          }
        }}
      >
        <h4 style={{ textAlign: "center" }}>Register your user here</h4>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter full name"
            name="fullName"
            onChange={handleInputChange}
            className={"form-control" + applyErrorClass("fullName")}
          ></FormControl>
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter email address"
            name="email"
            className={"form-control" + applyErrorClass("email")}
            onChange={handleInputChange}
          ></FormControl>
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter valid user name"
            name="userName"
            className={"form-control" + applyErrorClass("userName")}
            onChange={handleInputChange}
          ></FormControl>
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter valid password"
            type="password"
            name="password"
            autoComplete="off"
            className={"form-control" + applyErrorClass("password")}
            onChange={handleInputChange}
          ></FormControl>
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            autoComplete="off"
            onChange={handleInputChange}
          ></FormControl>
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            type="file"
            name="imgSrc"
            onChange={showPreview}
            accept="image/*"
            className={"form-control-file" + applyErrorClass("imgSrc")}
          ></FormControl>
          <div className="item">
            <span
              className="badge"
              onClick={(e) =>
                setUser({
                  ...user,
                  imageFile: null,
                  imgSrc: defaultImageSrc,
                })
              }
            >
              x
            </span>
            <img
              src={user.imgSrc}
              className="img-thumbnail"
              alt="..."
              id="imgPrev"
            />
          </div>
        </InputGroup>

        <Button
          type="submit"
          variant="primary"
          style={{ margin: "auto", display: "block", width: "10rem" }}
          disabled={
            user.password !== user.confirmPassword || user.password.length < 1
          }
        >
          Sign Up
        </Button>
      </Form>
      <GoogleSignIn />
    </div>
  );
};

export default SignUpPage;
