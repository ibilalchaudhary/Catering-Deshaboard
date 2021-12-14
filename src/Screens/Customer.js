import React, { useEffect } from "react";
import Button from "../Components/Button";
import EntryHeadingRow from "../Components/EntryHeadingRow";
import EntryInfoRow from "../Components/EntryInfoRow";
import InputBox from "../Components/InputBox";
import EntryImg from "../Assets/EntryImg.png";

export default function Customer({ setIsSmallNav }) {
  useEffect(() => {
    setIsSmallNav(false);
  }, []);
  const tableHeadingRow = [
    { heading: "Profile" },
    { heading: "Name" },
    { heading: "Last Name" },
    { heading: "Email" },
    { heading: "Phone" },
  ];

  const tableInfoRow = [
    { type: "img" },
    { info: "Fahad" },
    { info: "Ayyaz" },
    { info: "abc123@gmail.com" },
    { info: "0321-3741371" },
  ];
  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header__heading">Customer</div>
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
              {/* <div style={{ width: "200px" }}>
                <Button label={"Edit"} path={item.path} />
              </div> */}

              <div style={{ width: "200px" }}>
                <img src={EntryImg} alt="" />
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
          <EntryInfoRow
            tableEntryInfoRow={tableInfoRow}
            path="/dashboard/customer-details"
          />
          <EntryInfoRow
            tableEntryInfoRow={tableInfoRow}
            path="/dashboard/customer-details"
          />
          <EntryInfoRow
            tableEntryInfoRow={tableInfoRow}
            path="/dashboard/customer-details"
          />
          <EntryInfoRow
            tableEntryInfoRow={tableInfoRow}
            path="/dashboard/customer-details"
          />
        </div> */}
      </div>
    </div>
  );
}
