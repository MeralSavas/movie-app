import { useEffect, useState, createContext } from "react";
import { userObserver } from "../auth/firebase";

const AutoContext = createContext();

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContextProvider value={{ currentUser }}>
      {props.children}
    </AuthContextProvider>
  );
};
export default AuthContextProvider;
