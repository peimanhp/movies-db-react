import { createContext, useState } from "react";

export const LoginContext = createContext({
  login: () => {},
});

export function LoginProvider({ children }) {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [isLogin, setIsLogin] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  function login(user, pass) {
    if (user === username && pass === password) {
      setIsLogin(true);
      return true;
    } else {
      setErrorMsg("نام کاربری یا رمز عبور اشتباه است");
      return false;
    }
  }

  const contextValue = {
    login,
    isLogin,
    errorMsg,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
}
