import { createContext, useEffect, useState } from 'react';

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
      });
    return () => unSubscribe();
  }, []);

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
