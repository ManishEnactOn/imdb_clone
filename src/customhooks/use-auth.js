import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
const useAuth = () => {
  const [_user, setUser] = useState({});
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsUser(true);
        // console.log("isture", isUser);
        setUser(user);
      } else {
        setIsUser(false);
        // console.log("false", isUser);
        setUser({});
      }
    });
  }, [auth]);

  const logout = () => {
    auth.signOut();
    setUser({});
    setIsUser(false);
  };

  return {
    _user,
    isUser,
    logout,
  };
};

export default useAuth;
