import React, { useEffect } from "react";
import Button from "../Components/Button";
import IconBtn from "../Components/IconBtn";
import InputBox from "../Components/InputBox";

export default function AddBranch({ setIsSmallNav }) {
  useEffect(() => {
    setIsSmallNav(false);
  }, []);

  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header__heading">Branch</div>
        <div className="container__header__btns">
          <Button
            label="Save"
            path="/dashboard/branch"
            style={{ marginRight: "1em" }}
          />
        </div>
      </div>
      <div className="table__container">
        <form className="table__container__wrapper">
          <div className="table__container__heading">
            <IconBtn
              type="button"
              path="/dashboard/branch"
              svg={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16.828">
                  <g id="arrow-left" transform="translate(-4 -3.586)">
                    <line
                      id="Line_11"
                      data-name="Line 11"
                      x1="14"
                      transform="translate(5 12)"
                      fill="none"
                      stroke="#fb6a3b"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      id="Path_9210"
                      data-name="Path 9210"
                      d="M12,19,5,12l7-7"
                      fill="none"
                      stroke="#fb6a3b"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              }
            />
            Add New Branch
          </div>
          <div className="table__container__wrapper__content__left">
            <InputBox placeholder="Name" required />
            <InputBox placeholder="Add Image" variant="file" />
            <InputBox placeholder="Add Location" variant="location" />
          </div>
        </form>
      </div>
    </div>
  );
}
