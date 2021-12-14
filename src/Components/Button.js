import React from "react";
import { useNavigate } from "react-router-dom";

export default function Button({ label, onClick, variant, type, style, path }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={
        path
          ? () => {
              navigate(path);
            }
          : onClick
      }
      type={type}
      style={style}
      className={
        variant === "secondary"
          ? "button button__secondary"
          : "button button__primary"
      }
    >
      {label}
    </button>
  );
}
