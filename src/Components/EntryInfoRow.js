import React from "react";
import { useNavigate } from "react-router-dom";
import EntryImg from "../Assets/EntryImg.png";
import Button from "./Button";

function EntryInfoRowData({ value, variant, label, path }) {
  if (variant === "btn") {
    return (
      <div className="entry__info__row__text">
        <Button label={label} path={path} />
      </div>
    );
  } else if (variant === "img") {
    return (
      <div className="entry__info__row__text">
        <img src={EntryImg} alt="" />
      </div>
    );
  } else {
    return (
      <div
        className="entry__info__row__text"
        style={value === "Pending" ? { color: "#FB6A3B" } : null}
      >
        {value}
      </div>
    );
  }
}

export default function EntryInfoRow({ tableEntryInfoRow, path }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={
        path
          ? () => {
              navigate(path);
            }
          : null
      }
      className="entry__info__row"
    >
      {tableEntryInfoRow.map((item, i) => (
        <>
          <div
            // className="entry__info__row"
            style={{ width: "20%" }}
          >
            <Button label={item.label} path={item.path} />
          </div>

          <div
            // className="entry__info__row__text"
            style={{
              width: "20%",
            }}
          >
            <img src={EntryImg} alt="" />
          </div>

          <div
            // className="entry__info__row__text"
            style={{
              marginRight: "20px",
              marginLeft: "0px",
              backgroundColor: "red",
            }}
          >
            {item.info}
          </div>

          {/* <EntryInfoRowData
          key={i}
          value={item.info}
          variant={
            item.type === "btn" ? "btn" : item.type === "img" ? "img" : null
          }
          label={item.label}
          path={item.path}
        /> */}
        </>
      ))}
    </button>
  );
}
