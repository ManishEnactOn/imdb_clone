import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useCallback, useEffect, useState } from "react";

const useAuth = () => {
  const [_user, setUser] = useState({});
  const [isUser, setIsUser] = useState(false);
  const [auth, setAuth] = useState();

  useEffect(() => {
    setAuth(getAuth);
    authListener();
    return () => {};
  }, []);

  const logout = () => {
    auth.signOut();
    // setUser({});
    // setIsUser(false);
  };

  const authListener = useCallback(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //   setUser(user);
        //   setIsUser(true);
      } else {
        //   setUser({});
        //   setIsUser(false);
      }
    });
  }, [auth, onAuthStateChanged]);

  return {
    _user,
    isUser,
    logout,
  };
};

export default useAuth;
