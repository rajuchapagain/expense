import React from "react";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { ThirdPartySignIn } from "../../services/authentication.service";
const GoogleSignIn = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center" }}>
      <GoogleLogin
        clientId={process.env.REACT_APP_TP_CLIENT_ID}
        onSuccess={(r) => ThirdPartySignIn(dispatch, r.tokenId)}
        onFailure={(e) => console.log("Error!", e)}
      />
    </div>
  );
};

export default GoogleSignIn;
