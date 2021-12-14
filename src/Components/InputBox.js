import React, { useState } from "react";
import Select from "react-select";
import uploadedImg from "../Assets/uploadedImg.png";

export default function InputBox({
  placeholder,
  type,
  required,
  autoFocus,
  variant,
  svg,
  style,
  isMulti,
}) {
  const [isUploaded, setIsUploaded] = useState(false);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  if (variant === "checkbox") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "0em .2em",
          width: "100%",
        }}
      >
        <input
          type="checkbox"
          name={"input__box" + placeholder}
          id={"input__box" + placeholder}
          className="input__box__checkbox"
          required={required}
        />
        <label htmlFor={"input__box" + placeholder}>{placeholder}</label>
      </div>
    );
  } else if (variant === "dropdown") {
    return (
      <div className="input__box__dropdown" style={style}>
        <Select options={options} placeholder={placeholder} isMulti={isMulti} />
      </div>
    );
  } else if (variant === "file") {
    return (
      <div className="input__box__file" style={style}>
        <label htmlFor={placeholder} className="input__box__file__label">
          {placeholder}
        </label>
        <div className="input__box__file__box">
          <input
            type="file"
            id={placeholder}
            name={"input__box__file__box__input" + placeholder}
            className="input__box__file__box__input"
            required={required}
            onChange={() => {
              setIsUploaded(true);
            }}
          />
          {isUploaded ? (
            <img
              src={uploadedImg}
              alt="uploadedImg"
              className="input__box__file__box__img"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.561"
              height="16.561"
              viewBox="0 0 16.561 16.561"
            >
              <g
                id="Icon_feather-plus"
                data-name="Icon feather-plus"
                transform="translate(1.5 1.5)"
              >
                <path
                  id="Path_9205"
                  data-name="Path 9205"
                  d="M18,7.5V21.061"
                  transform="translate(-11.219 -7.5)"
                  fill="none"
                  stroke="#7c7a79"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
                <path
                  id="Path_9206"
                  data-name="Path 9206"
                  d="M7.5,18H21.061"
                  transform="translate(-7.5 -11.219)"
                  fill="none"
                  stroke="#7c7a79"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
              </g>
            </svg>
          )}
        </div>
      </div>
    );
  } else if (variant === "location") {
    return (
      <div className="input__box__location" style={style}>
        <label htmlFor={placeholder} className="input__box__file__label">
          {placeholder}
        </label>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.231514637267!2d73.07316681559547!3d33.728829042150466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf66825ed077%3A0x74cce21c819c31d4!2sRoomy%20Signature%20Hotel!5e0!3m2!1sen!2s!4v1636784515844!5m2!1sen!2s"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <input
          type={type}
          className="input__box"
          placeholder={placeholder}
          required={required}
          autoFocus={autoFocus}
        />
      </div>
    );
  } else if (variant === "search") {
    return (
      <div className="input__box__search" style={style}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="feather feather-search"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          type={type}
          className="input__box__search__field"
          placeholder={placeholder}
          required={required}
          autoFocus={autoFocus}
        />
      </div>
    );
  } else if (variant === "textarea") {
    return (
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        type={type}
        className="input__box__textarea"
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
        style={style}
      ></textarea>
    );
  } else {
    return (
      <input
        type={type}
        className="input__box"
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
        style={style}
      />
    );
  }
}
