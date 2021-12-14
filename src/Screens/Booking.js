import React, { useEffect } from "react";
import Button from "../Components/Button";
import EntryHeadingRow from "../Components/EntryHeadingRow";
import EntryInfoRow from "../Components/EntryInfoRow";
import InputBox from "../Components/InputBox";

export default function Booking({ setIsSmallNav }) {
  useEffect(() => {
    setIsSmallNav(true);
  }, []);
  const tableHeadingRow = [
    { heading: "Branch ID" },
    { heading: "Store ID" },
    { heading: "Date" },
    { heading: "Amount" },
    { heading: "No. of People" },
    { heading: "Time" },
    { heading: "Address" },
    { heading: "Payment" },
  ];

  const tableInfoRow = [
    { info: "Name" },
    { info: "Name" },
    { info: "12-1-2021" },
    { info: "$24" },
    { info: "371" },
    { info: "02:00 Am to 02:00 PM" },
    { info: "Makaan No.2 Iqbal colony Lohore" },
    { info: "Pending" },
  ];

  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header__heading">Booking</div>
        <div className="container__header__btns">
          <InputBox placeholder="Search" variant="search" />
          <Button label="Add" style={{ marginRight: "1em" }} />
          <Button label="Delete" variant="secondary" />
        </div>
      </div>
      <div className="table__container">
        <EntryHeadingRow tableHeadingEntryRow={tableHeadingRow} />
        <div>
          {tableInfoRow.map((item, i) => (
            <div className="entry__info__row">
              <div style={{ width: "200px" }}>{"item.info"}</div>
              <div style={{ width: "200px" }}>{"item.info"}</div>
              <div style={{ width: "200px" }}>{"item.info"}</div>
              <div style={{ width: "200px" }}>{"item.info"}</div>
              <div style={{ width: "200px" }}>{"item.info"}</div>

              <div style={{ width: "200px" }}>
                {"Makaan No.2 Iqbal colony Lahore"}
              </div>
              <div style={{ width: "200px" }}>
                {"Makaan No.2 Iqbal colony Lahore"}
              </div>
              <div style={{ width: "200px" }}>
                {"Makaan No.2 Iqbal colony Lahore"}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="table__container__content">
          <EntryInfoRow
            tableEntryInfoRow={tableInfoRow}
            path="/dashboard/booking-details"
          />
          <EntryInfoRow
            tableEntryInfoRow={tableInfoRow}
            path="/dashboard/booking-details"
          />
          <EntryInfoRow
            tableEntryInfoRow={tableInfoRow}
            path="/dashboard/booking-details"
          />
        </div> */}
      </div>
    </div>
  );
}
