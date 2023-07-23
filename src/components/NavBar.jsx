import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const NavBar = () => {

  const Login = useContext(LoginContext)
  console.log('islogin',Login)

  return (
    <div id="menu">
      {Login.isLogin ? (
        <h1 className="bg-orange-700">پیمان خوش آمدید</h1>
      ) : (
        "لطفا وارد شوید"
      )}
      {/* <button className="bg-white" onClick={Login.login('admin', 'admin')}>login</button> */}
    </div>
  );
};

export default NavBar;
