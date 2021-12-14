import React from "react";
import { useNavigate } from "react-router-dom";

export default function IconBtn({ svg, onClick, type, path }) {
  const navigate = useNavigate();
  return (
    <button
      className="icon__btn"
      onClick={
        path
          ? () => {
              navigate(path);
            }
          : onClick
      }
      type={type ? type : "button"}
    >
      {svg}
    </button>
  );
}
