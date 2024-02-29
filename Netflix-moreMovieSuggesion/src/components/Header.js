import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

const Header = () => {
  const user = useSelector((store) => store.user);

  const disPatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    const Auth = auth;
    signOut(Auth).catch((error) => {
      navigate("/Error");
    });
  };

  //this auth will get user data from firebase database to route browser if data is there in database. and redux store also
  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        disPatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
      } else {
        disPatch(removeUser());
        navigate("/");
      }
    });
    return () => Unsubscribe();
  }, []);

  //why i am moving the above useEffect from body.js to header.js because we want to make the auth section accessible by all the component for that
  //i moved in header component to accessible. because header will be present in all the situation.
  // and the another main reason the shift it is that, while navigating inside the body.js module it shows error because navigate should want to inside router provider
  // to tackle this bug i shifted the useEffect inside header component, header component will inside router dom.

  return (
    <div className="absolute flex w-full px-8 bg-gradient-to-b from-black z-30 justify-between ">
      <img className="w-44" alt="netflix-logo" src={LOGO} />
      {user && (
        <div className="flex p-3 pt-5">
          <img className="w-10 h-10 " alt="user-icon" src={user.photoURL} />
          <button
            onClick={handleSignOut}
            className="ml-2 font-extrabold text-white"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
