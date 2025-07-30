import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO, SIGNED_USER } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleToggleSearchView = () => {
    dispatch(toggleGptSearchView())
  };
  return (
    <div className="flex justify-between items-center w-full p-2 absolute bg-gradient-to-b from-black z-10">
      <div className="w-40">
        <img src={NETFLIX_LOGO} alt="logo" />
      </div>

      {user && (
        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-sm bg-purple-900 text-white font-semibold"
            onClick={handleToggleSearchView}
          >
            GPT Search
          </button>
          <img src={SIGNED_USER} alt="profile-logo" className="w-10 h-10" />
          <button
            className="text-white font-semibold hover:underline"
            onClick={handleSignOut}
          >
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
