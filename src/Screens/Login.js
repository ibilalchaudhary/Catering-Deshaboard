import React, { useEffect } from "react";
import loginImg from "../Assets/loginImg.jpg";
import LoginForm from "../Components/LoginForm";

export default function Login({ setIsLogedin }) {
  useEffect(() => {
    setIsLogedin(true);
  }, [window.location.pathname === "/"]);
  return (
    <div className="login__container">
      <div className="login__container__img__wrapper"></div>
      <img src={loginImg} alt="loginImg" className="login__container__img" />
      <LoginForm setIsLogedin={setIsLogedin} />
    </div>
  );
}
