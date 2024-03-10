import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkvalidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Error from "./Error";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { bgURL, user_avatar } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const disPatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkvalidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            //update profile
            displayName: name.current.value,
            photoURL: user_avatar,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              //this is for used to update the value in the redux store manually to encounter state update whenever referesh manually
              // and in the const i user (auth.currentUSer) because we want current user details to render data inside ui otherwise if i user only auth to render it show nothing because data inside store is empty
              disPatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              <Error />;
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const errormsg = "invalid credentials";
          setErrorMessage(errormsg);
        });
    }
  };

  const toggleSignInform = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />

      <div className="absolute ">
        <img alt="backgroud-img" src={bgURL} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute text-white bg-black w-3/12 p-10 my-36 right-0 left-0 mx-auto rounded-lg bg-opacity-75"
      >
        <h1 className="font-bold text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-700 border rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-3 my-4 w-full bg-gray-700 border rounded-md"
        />

        <input
          ref={password}
          type="password"
          placeholder="password (Hello123)"
          className="p-3 my-4 w-full rounded-md bg-gray-700"
        />
        <p className="text-red-600 font-bold text-md py2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-600 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In " : "Sign Up "}
        </button>
        <p className="py-4 font-medium">
          <span onClick={toggleSignInform} className="cursor-pointer ">
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already a User? Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
