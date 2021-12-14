import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../Components/Button";
import EntryHeadingRow from "../Components/EntryHeadingRow";
//import EntryInfoRow from "../Components/EntryInfoRow";
import InputBox from "../Components/InputBox";
import EntryImg from "../Assets/EntryImg.png";

const Branch = ({ setIsSmallNav }) => {
  //debugger;
  const navigate = useNavigate();

  useEffect(() => {
    setIsSmallNav(false);
  }, []);
  const tableHeadingRow = [
    { heading: "" },
    { heading: "Image" },
    { heading: "Name" },
    { heading: "Address" },
  ];

  const tableInfoRow = [
    { name: "Faraz", address: "House No. 2 Iqbal colony Lahore" },
    { name: "Faraz", address: "House No. 2 Iqbal colony Lahore" },
    { name: "Faraz", address: "House No. 2 Iqbal colony Lahore" },
    { name: "Faraz", address: "House No. 2 Iqbal colony Lahore" },
  ];

  //   const tableInfoRow = [
  //     { type: "btn", label: "Edit", path: "/dashboard/edit-branch" },
  //     { type: "img" },
  //     { info: "House" },
  //     { info: "Makaan No.2 Iqbal colony Lohore" },
  //     { info: "Makaan No.2 Iqbal colony Lohore" },
  //     { info: "Makaan No.2 Iqbal colony Lohore" },
  //     { info: "Makaan No.2 Iqbal colony Lohore" },
  //     { info: "Makaan No.2 Iqbal colony Lohore" },
  //     { info: "Makaan No.2 Iqbal colony Lohore" },
  //     { info: "Makaan No.2 Iqbal colony Lohore" },
  //     { info: "Makaan No.2 Iqbal colony Lohore" },
  //   ];
  const onEditClick = (Data) => {
    //navigate("/dashboard/edit-branch", { state: { objectData: Data } });
    navigate("/dashboard/edit-branch", { state: "bjhf" });
  };
  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header__heading">Branches</div>
        <div className="container__header__btns">
          <InputBox placeholder="Search" variant="search" />
          <Button
            label="Add"
            path="/dashboard/add-branch"
            style={{ marginRight: "1em" }}
          />
          <Button label="Delete" variant="secondary" />
        </div>
      </div>
      <div className="table__container">
        <EntryHeadingRow tableHeadingEntryRow={tableHeadingRow} />
        <div
        //style={{ overflow: "scroll" }}
        //   className="table__container__content"
        //style={{ padding: "1em" }}
        >
          {tableInfoRow.map((item, i) => (
            <div className="entry__info__row">
              <div style={{ width: "200px" }}>
                {/* <Link
                  to={{
                    pathname: "/dashboard/edit-branch",
                    state: { fromDashboard: true },
                  }}
                > */}
                <Button
                  label={"Edit"}
                  //path={item.path}
                  onClick={() => onEditClick(item)}
                />
                {/* </Link> */}
              </div>

              <div style={{ width: "200px" }}>
                <img src={EntryImg} alt="" />
              </div>

              <div style={{ width: "200px" }}>{item.name}</div>

              <div style={{ width: "200px" }}>{item.address}</div>
            </div>
          ))}
          {/* <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
          <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
          <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
          <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
          <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
          <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
        */}
        </div>
      </div>
    </div>
  );
};

export default Branch;
