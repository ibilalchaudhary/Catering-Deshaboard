import React from "react";
import Button from "./Button";
import InputBox from "./InputBox";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ setIsLogedin }) {
  const navigate = useNavigate();

  return (
    <div className="side__bar">
      <div className="side__bar__header">
        <div className="side__bar__header__left"></div>
        <ThemeToggleBtn />
      </div>
      <div className="side__bar__content">
        <form
          onSubmit={() => {
            navigate("/dashboard");
            setIsLogedin(true);
          }}
          className="side__bar__content__form"
        >
          <div className="side__bar__content__form__logo">Bulevard</div>
          <InputBox
            type="email"
            placeholder="Email Address"
            required
            autoFocus
          />
          <InputBox type="password" placeholder="Password" required />
          <InputBox variant="checkbox" placeholder="Remember" />
          <Button label="Login" type="submit" />
        </form>
      </div>
    </div>
  );
}
