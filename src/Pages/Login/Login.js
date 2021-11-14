import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import img from "./Google_Logo.svg.webp";

import initializeAuthentication from "../../Firebase/firebase.initialize";
import { useHistory, useLocation } from "react-router";

initializeAuthentication();

const provider = new GoogleAuthProvider();

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const redirectUri = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      history.push(redirectUri);
    });
  };
  return (
    <div>
      <div className="my-5  mx-auto ">
        <img src={img} alt="" />
      </div>
      <button className="btn btn-danger " onClick={handleGoogleSignIn}>
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
