import { createContext, useEffect, useState } from 'react';

import axios from 'axios';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
export const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = () =>
      onAuthStateChanged(auth, (currentUser) => {
        setLoading(false);
        setUser(currentUser);
        const loggedUser = currentUser?.email || user?.email;
        const userEmail = { email: loggedUser };
        console.log('logged user--', userEmail);
        // generate token from here
        if (currentUser) {
          // axios
          //   .post('http://localhost:3000/jwt', userEmail, {
          //     withCredentials: true,
          //   })
          //   .then((res) => {
          //     console.log(res.data);
          //   })
          //   .catch((err) => {
          //     console.log(err);
          //   });
        } else {
          axios
            .post('http://localhost:3000/logout', userEmail, { withCredentials: true })
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    return () => unSubscribe();
  }, [user?.email]);

  const authInfo = {
    createUser,
    loading,
    loginUser,
    setLoading,
    user,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
