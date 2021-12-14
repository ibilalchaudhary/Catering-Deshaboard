import React, { useEffect } from "react";
import Button from "../Components/Button";
import EntryHeadingRow from "../Components/EntryHeadingRow";
import EntryInfoRow from "../Components/EntryInfoRow";

export default function Role({ setIsSmallNav }) {
  useEffect(() => {
    setIsSmallNav(false);
  }, []);
  const tableHeadingRow = [
    { heading: "" },
    { heading: "User ID" },
    { heading: "Role" },
  ];

  const tableInfoRow = [
    { type: "btn", label: "Edit", path: "/dashboard/edit-role" },
    { info: "658123056" },
    { info: "Manager" },
  ];
  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header__heading">Role</div>
        <div className="container__header__btns">
          <Button
            label="Add"
            path="/dashboard/add-role"
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
            </div>
          ))}
        </div>
        {/* <div className="table__container__content">
          <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
        </div> */}
      </div>
    </div>
  );
}
