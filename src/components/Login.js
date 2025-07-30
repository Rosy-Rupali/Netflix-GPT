import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMAGE } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  const handleClickBtn = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value,
      name.current?.value
    );
    setErrorMessage(message);

    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: name.current?.value,
          })
            .then(() => {
              const { uid, displayName, email, password } = auth.currentUser;
              console.log(auth.currentUser);
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
          navigate("/error");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
          navigate("/error");
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_IMAGE}
          alt="bg-image"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 p-4 bg-black text-white rounded-lg my-40 mx-auto right-0 left-0 absolute bg-opacity-80"
      >
        <h2 className="text-2xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (
          <>
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full bg-gray-700 my-5 p-2"
            />
          </>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="w-full bg-gray-700 my-5 p-2"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full bg-gray-700 my-5 p-2"
        />
        <p className="text-red-600">{errorMessage}</p>
        <button
          className="w-full bg-red-700 my-5 p-2 rounded-lg"
          onClick={handleClickBtn}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p>
          {isSignInForm ? (
            <>
              New to Netflix?
              <span className="cursor-pointer" onClick={toggleSignInForm}>
                Sign Up Now
              </span>
            </>
          ) : (
            <>
              Already registered?
              <span className="cursor-pointer" onClick={toggleSignInForm}>
                Sign In Now
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
