import React, { useEffect } from "react";
import Button from "../Components/Button";
import IconBtn from "../Components/IconBtn";
import uploadedImg from "../Assets/uploadedImg.png";

export default function BookingDetails({ setIsSmallNav }) {
  useEffect(() => {
    setIsSmallNav(false);
  }, []);

  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header__heading">Booking</div>
        <div className="container__header__btns">
          <Button label="Approve" path="/dashboard/booking" />
          <Button
            label="Decline"
            variant="secondary"
            style={{ marginLeft: "1em" }}
          />
        </div>
      </div>
      <div className="table__container">
        <form className="table__container__wrapper">
          <div className="table__container__heading">
            <IconBtn
              type="button"
              path="/dashboard/booking"
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
            Booking Details
          </div>
          <div className="table__container__wrapper__content">
            <div className="table__container__wrapper__content__left">
              <div className="container__details__with__background">
                <div className="container__details__heading__wrapper">
                  <div className="container__details__heading">Name</div>
                  <div className="container__details__heading">Last Name</div>
                  <div className="container__details__heading">Email</div>
                  <div className="container__details__heading">
                    Phone Number
                  </div>
                  <div className="container__details__heading">CNIC</div>
                  <div className="container__details__heading">Role</div>
                </div>
                <div className="container__details__plan__detail__wrapper">
                  <div className="container__details__heading plan__detail__bold">
                    Fahad
                  </div>
                  <div className="container__details__heading plan__detail__bold">
                    Ayyaz
                  </div>
                  <div className="container__details__heading plan__detail__bold">
                    abc@gmail.com
                  </div>
                  <div className="container__details__heading plan__detail__bold">
                    33015-2346432-1
                  </div>
                  <div className="container__details__heading plan__detail__bold">
                    Manager
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table__container__wrapper__content__left__headings">
            Customer Details
          </div>
          <div className="customer__table__container__wrapper__content">
            <div className="customer__table__container__wrapper__content__left">
              <img
                src={uploadedImg}
                alt="uploadedImg"
                className="customer__table__container__wrapper__content__pic"
              />
            </div>
            <div className="customer__table__container__wrapper__content__right">
              <div className="container__details__with__background">
                <div className="container__details__heading__wrapper">
                  <div className="container__details__heading">Name</div>
                  <div className="container__details__heading">Last Name</div>
                  <div className="container__details__heading">Email</div>
                  <div className="container__details__heading">
                    Phone Number
                  </div>
                  <div className="container__details__heading">CNIC</div>
                  <div className="container__details__heading">Role</div>
                </div>
                <div className="container__details__plan__detail__wrapper">
                  <div className="container__details__heading plan__detail__bold">
                    Fahad
                  </div>
                  <div className="container__details__heading plan__detail__bold">
                    Ayyaz
                  </div>
                  <div className="container__details__heading plan__detail__bold">
                    abc@gmail.com
                  </div>

                  <div className="container__details__heading plan__detail__bold">
                    0345-3252321
                  </div>
                  <div className="container__details__heading plan__detail__bold">
                    33015-2346432-1
                  </div>
                  <div className="container__details__heading plan__detail__bold">
                    Manager
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ marginTop: "2em" }}
            className="table__container__wrapper__content__left"
          >
            <div className="input__box__location">
              <label htmlFor="Location" className="input__box__file__label">
                Location
              </label>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.231514637267!2d73.07316681559547!3d33.728829042150466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf66825ed077%3A0x74cce21c819c31d4!2sRoomy%20Signature%20Hotel!5e0!3m2!1sen!2s!4v1636784515844!5m2!1sen!2s"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
