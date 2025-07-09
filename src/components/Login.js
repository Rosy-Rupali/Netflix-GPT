import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
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
              type="text"
              placeholder="Full Name"
              className="w-full bg-gray-700 my-5 p-2"
            />
            <input
              type="number"
              placeholder="Mobile no."
              className="w-full bg-gray-700 my-5 p-2"
            />
          </>
        )}
        <input
          type="text"
          placeholder="Email"
          className="w-full bg-gray-700 my-5 p-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-gray-700 my-5 p-2"
        />
        <button className="w-full bg-red-700 my-5 p-2 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p>
          {isSignInForm ? (
            <>
              New to Netflix?
              <span className='cursor-pointer' onClick={toggleSignInForm}>Sign Up Now </span>
            </>
          ) : (
            <>
              Already registered?
              <span className='cursor-pointer' onClick={toggleSignInForm}>Sign In Now</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
