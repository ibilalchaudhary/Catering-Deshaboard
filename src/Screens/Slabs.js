import React, { useEffect } from "react";
import Button from "../Components/Button";
import EntryHeadingRow from "../Components/EntryHeadingRow";
import EntryInfoRow from "../Components/EntryInfoRow";
import InputBox from "../Components/InputBox";

export default function Slabs({ setIsSmallNav }) {
  useEffect(() => {
    setIsSmallNav(false);
  }, []);
  const tableHeadingRow = [
    { heading: "" },
    { heading: "Name" },
    { heading: "Time" },
    { heading: "Max Booking" },
    { heading: "Booked" },
  ];

  const tableInfoRow = [
    { type: "btn", label: "Edit", path: "/dashboard/edit-slab" },
    { info: "Fahad" },
    { info: "12:00 AM to 2:00 PM" },
    { info: "1234" },
    { info: "321" },
  ];
  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header__heading">Slabs</div>
        <div className="container__header__btns">
          <InputBox placeholder="Search" variant="search" />
          <Button
            label="Add"
            path="/dashboard/add-slab"
            style={{ marginRight: "1em" }}
          />
          <Button label="Delete" variant="secondary" />
        </div>
      </div>
      <div className="table__container">
        <EntryHeadingRow tableHeadingEntryRow={tableHeadingRow} />
        <div>
          {tableInfoRow.map((item, i) => (
            <div className="entry__info__row">
              <div style={{ width: "200px" }}>
                <Button label={"Edit"} path={item.path} />
              </div>

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
          <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
          <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
        </div> */}
      </div>
    </div>
  );
}
