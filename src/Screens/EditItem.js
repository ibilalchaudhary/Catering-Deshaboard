import React from "react";
import Button from "../Components/Button";
import InputBox from "../Components/InputBox";

export default function EditItem({ closeOnClick }) {
  function handleSubmit() {
    console.log("hey");
  }
  return (
    <div className="popup__container">
      <form action="" className="popup__container__form">
        <div className="popup__container__form__header">
          <div className="popup__container__form__header__heading">
            Edit Item
          </div>
          <button
            className="popup__container__form__header__button"
            type="button"
            onClick={() => {
              closeOnClick(false);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.828 14.828">
              <g id="x" transform="translate(-4.586 -4.586)">
                <line
                  id="Line_20"
                  data-name="Line 20"
                  x1="12"
                  y2="12"
                  transform="translate(6 6)"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  id="Line_21"
                  data-name="Line 21"
                  x2="12"
                  y2="12"
                  transform="translate(6 6)"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
            </svg>
          </button>
        </div>
        <div className="popup__container__form__content">
          <div className="popup__container__form__content__row">
            <InputBox placeholder="Name" style={{ marginRight: "1.2em" }} />
            <InputBox placeholder="Price" />
          </div>
          <div className="popup__container__form__content__row">
            <InputBox
              placeholder="Description"
              variant="textarea"
              style={{
                maxWidth: "100%",
                height: "115px",
              }}
            />
            {/* <div className="popup__container__form__content__col">
              <InputBox
                placeholder="Branch"
                variant="dropdown"
                style={{ marginRight: "0em" }}
              />
              <InputBox
                placeholder="Slab"
                variant="dropdown"
                style={{ marginRight: "0em" }}
              />
            </div> */}
          </div>
          <div className="popup__container__form__content__row">
            <InputBox variant="file" placeholder="Add Image" />
          </div>
          <div className="popup__container__form__content__btns">
            <Button
              label="Edit Item"
              onClick={() => {
                closeOnClick(false);
                handleSubmit();
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
