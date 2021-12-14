import React, { useEffect } from "react";
import Button from "../Components/Button";
import EntryHeadingRow from "../Components/EntryHeadingRow";
import EntryInfoRow from "../Components/EntryInfoRow";
import IconBtn from "../Components/IconBtn";
import uploadedImg from "../Assets/uploadedImg.png";

export default function CustomerDetails({ setIsSmallNav }) {
  useEffect(() => {
    setIsSmallNav(false);
  }, []);
  const tableHeadingRow = [
    { heading: "Branch ID" },
    { heading: "Slot ID" },
    { heading: "Date" },
    { heading: "Amount" },
    { heading: "No. of People" },
    { heading: "Time" },
  ];

  const tableInfoRow = [
    { info: "51321" },
    { info: "651023" },
    { info: "12-2-2021" },
    { info: "$245" },
    { info: "321" },
    { info: "02:00 Am to 02:00 PM" },
  ];
  return (
    <div className="container">
      <div className="container__header">
        <div className="table__container__heading">
          <IconBtn
            type="button"
            path="/dashboard/customer"
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
          Customer Details
        </div>
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
              <div className="container__details__heading">Phone Number</div>
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
                0345-2343134
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
      <div className="table__container">
        <EntryHeadingRow tableHeadingEntryRow={tableHeadingRow} />
        <div className="table__container__content">
          <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
          <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
          <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
          <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
          <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
          <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
          <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
          <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
          <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
          <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
        </div>
      </div>
    </div>
  );
}
