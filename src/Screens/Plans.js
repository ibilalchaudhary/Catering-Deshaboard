import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import InputBox from "../Components/InputBox";
import placeholderImg from "../Assets/placeholderImg.png";

function PlanCard({ defaultChecked }) {
  return (
    <div className="plans__card">
      <input
        defaultChecked={defaultChecked}
        type="radio"
        name="plans__card__input"
        className="plans__card__input"
      />
      <div className="plans__card__content">
        <div className="plans__card__content__info">
          <div className="plans__card__content__info__heading">Name</div>
          <div className="plans__card__content__info__heading">Price</div>
        </div>
        <div className="plans__card__content__info">
          <div className="plans__card__content__info__value">John Doe</div>
          <div className="plans__card__content__info__value">$45</div>
        </div>

        <button className="catagory__card__content__btns__btn catagory__card__content__btns__secondary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.674 13.971">
            <g id="trash-2" transform="translate(0.5 0.5)">
              <path
                id="Path_9212"
                data-name="Path 9212"
                d="M3,6H14.674"
                transform="translate(-3 -3.406)"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              />
              <path
                id="Path_9213"
                data-name="Path 9213"
                d="M14.08,4.594v9.08a1.3,1.3,0,0,1-1.3,1.3H6.3a1.3,1.3,0,0,1-1.3-1.3V4.594m1.946,0V3.3A1.3,1.3,0,0,1,8.243,2h2.594a1.3,1.3,0,0,1,1.3,1.3v1.3"
                transform="translate(-3.703 -2)"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              />
              <line
                id="Line_18"
                data-name="Line 18"
                y2="3.948"
                transform="translate(4.737 5.866)"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              />
              <line
                id="Line_19"
                data-name="Line 19"
                y2="3.948"
                transform="translate(7.105 5.866)"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
function ItemCard({ defaultChecked }) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="plans__card">
      <input
        type="radio"
        className="plans__card__input"
        checked={checked}
        onClick={(e) => {
          checked ? setChecked(false) : setChecked(true);
        }}
      />
      <div className="plans__card__content">
        <img
          src={placeholderImg}
          alt="item__img"
          className="plans__card__content__img"
        />
        <div className="plans__card__content__info">
          <div className="plans__card__content__info__heading">Name</div>
          <div className="plans__card__content__info__heading">Price</div>
        </div>
        <div className="plans__card__content__info">
          <div className="plans__card__content__info__value">John Doe</div>
          <div className="plans__card__content__info__value">$45</div>
        </div>
        <button className="catagory__card__content__btns__btn catagory__card__content__btns__secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-plus"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}
function PlanDetailCard({ defaultChecked, setIsAddPlanOpen }) {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{ marginRight: 12, marginLeft: 12 }} className="plans__card">
      <input
        type="radio"
        className="plans__card__input"
        checked={checked}
        onClick={(e) => {
          checked ? setChecked(false) : setChecked(true);
        }}
      />
      <div className="plans__card__content">
        <img
          src={placeholderImg}
          alt="item__img"
          className="plans__card__content__img"
        />
        <div className="plans__card__content__info">
          <div className="plans__card__content__info__heading">Name</div>
          <div className="plans__card__content__info__heading">Price</div>
        </div>
        <div className="plans__card__content__info">
          <div className="plans__card__content__info__value">John Doe</div>
          <div className="plans__card__content__info__value">$45</div>
        </div>
        <button
          className="catagory__card__content__btns__btn catagory__card__content__btns__secondary"
          onClick={() => {
            setIsAddPlanOpen(true);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.674 13.971">
            <g id="trash-2" transform="translate(0.5 0.5)">
              <path
                id="Path_9212"
                data-name="Path 9212"
                d="M3,6H14.674"
                transform="translate(-3 -3.406)"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              />
              <path
                id="Path_9213"
                data-name="Path 9213"
                d="M14.08,4.594v9.08a1.3,1.3,0,0,1-1.3,1.3H6.3a1.3,1.3,0,0,1-1.3-1.3V4.594m1.946,0V3.3A1.3,1.3,0,0,1,8.243,2h2.594a1.3,1.3,0,0,1,1.3,1.3v1.3"
                transform="translate(-3.703 -2)"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              />
              <line
                id="Line_18"
                data-name="Line 18"
                y2="3.948"
                transform="translate(4.737 5.866)"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              />
              <line
                id="Line_19"
                data-name="Line 19"
                y2="3.948"
                transform="translate(7.105 5.866)"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
export default function Plans({
  setIsSmallNav,
  setIsAddPlanOpen,
  setIsEditPlanOpen,
}) {
  useEffect(() => {
    setIsSmallNav(true);
  }, []);

  return (
    <div className="container__wrapper container__wrapper__plan">
      <div className="container" style={{ width: "25%" }}>
        <div className="container__header">
          <div className="container__header__heading">Plans</div>
          <div className="container__header__btns">
            <Button
              label="Edit"
              onClick={() => {
                setIsEditPlanOpen(true);
              }}
            />
          </div>
        </div>
        <InputBox
          placeholder="Search"
          variant="search"
          style={{ marginLeft: "1.5em", height: "45px" }}
        />
        <div className="container__data">
          <PlanCard
            defaultChecked={true}
            setIsEditPlanOpen={setIsEditPlanOpen}
          />
          <PlanCard defaultChecked={true} />
          <PlanCard />
          <PlanCard />
          <PlanCard />
          <PlanCard />
          <PlanCard />
          <PlanCard />
          <PlanCard />
          <PlanCard />
          <PlanCard />
          <PlanCard />
          <PlanCard />
          <PlanCard />
          <PlanCard />
          <PlanCard />
          <PlanCard />
          <PlanCard />
          <PlanCard />
          <PlanCard />

          <PlanCard />
        </div>
      </div>
      <div className="container" style={{ width: "50%" }}>
        <div className="container__header">
          <div
            className="container__header__heading"
            style={{ margin: ".5em 0em" }}
          >
            Plan Details
          </div>
        </div>
        <div className="container__details__plan__headings">
          <div className="container__details__heading__wrapper">
            <div className="container__details__heading plan__detail__bold">
              Name
            </div>
            <div className="container__details__heading">John Doe</div>
          </div>
          <div className="container__details__heading__wrapper">
            <div className="container__details__heading plan__detail__bold">
              Price
            </div>
            <div className="container__details__heading">$1234</div>
          </div>
          <div className="container__details__heading__wrapper">
            <div className="container__details__heading plan__detail__bold">
              Catagory
            </div>
            <div className="container__details__heading">Fast Food</div>
          </div>
          <div className="container__details__heading__wrapper">
            <div className="container__details__heading plan__detail__bold">
              Branch
            </div>
            <div className="container__details__heading">House</div>
          </div>
          <div className="container__details__heading__wrapper">
            <div className="container__details__heading plan__detail__bold">
              Slab
            </div>
            <div className="container__details__heading">500</div>
          </div>
          <div className="container__details__heading__wrapper">
            <div className="container__details__heading plan__detail__bold">
              Discription
            </div>
            <div className="container__details__heading">
              <a className="container__details__heading__discription__tag">
                View Discription
                <div className="container__details__heading__discription__box">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout.It is a long established.
                </div>
              </a>
            </div>
          </div>

          {/* <div className="container__details__heading plan__detail__bold">
            Catagory
          </div>
          <div className="container__details__heading plan__detail__bold">
            Branch
          </div>
          <div className="container__details__heading plan__detail__bold">
            Slab
          </div>
          <div className="container__details__heading plan__detail__bold">
            Discription
          </div>

          <div className="container__details__plan__detail__wrapper">
            <div className="container__details__heading">John Doe</div>
            <div className="container__details__heading ">$57</div>
            <div className="container__details__heading">Fast Food</div>
            <div className="container__details__heading">Bilal House</div>
            <div className="container__details__heading">500</div>
            <a className="container__details__heading__discription__tag">
              View Discription
              <div className="container__details__heading__discription__box">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.It
                is a long established.
              </div>
            </a>
          </div> */}
        </div>
        <div className="item__details__wrapper">
          <div
            className="container item__details__container"
            style={{ width: "50%" }}
          >
            <PlanDetailCard defaultChecked={true} />
            <PlanDetailCard />
            <PlanDetailCard />
            <PlanDetailCard />
            <PlanDetailCard />
            <PlanDetailCard />
            <PlanDetailCard />
            <PlanDetailCard />
            <PlanDetailCard />
            <PlanDetailCard />
            <PlanDetailCard />
            <PlanDetailCard />
            <PlanDetailCard />
            <PlanDetailCard />
          </div>
          <div
            className="container item__details__container"
            style={{ width: "50%" }}
          >
            <PlanDetailCard />
            <PlanDetailCard />
            <PlanDetailCard />
            <PlanDetailCard />
            <PlanDetailCard />
            <PlanDetailCard />
            <PlanDetailCard />
            <PlanDetailCard />
            <PlanDetailCard />
            <PlanDetailCard />
            <PlanDetailCard />
          </div>
        </div>
      </div>
      <div className="container" style={{ maxWidth: "25%" }}>
        <div className="container__header">
          <div
            className="container__header__heading"
            style={{ margin: ".5em 0em" }}
          >
            Items
          </div>
        </div>
        <InputBox
          placeholder="Search"
          variant="search"
          style={{ marginLeft: "1.5em", height: "45px" }}
        />
        <InputBox
          placeholder="Catagory"
          variant="dropdown"
          style={{ marginLeft: "1.5em", marginBottom: ".5em" }}
        />
        <InputBox
          placeholder="Sub Catagory"
          variant="dropdown"
          isMulti
          style={{ marginLeft: "1.5em", marginBottom: ".5em" }}
        />
        <div className="container__data" style={{ maxHeight: "78%" }}>
          <ItemCard defaultChecked={true} setIsAddPlanOpen={setIsAddPlanOpen} />
          <ItemCard setIsAddPlanOpen={setIsAddPlanOpen} />
          <ItemCard setIsAddPlanOpen={setIsAddPlanOpen} />
          <ItemCard setIsAddPlanOpen={setIsAddPlanOpen} />
          <ItemCard setIsAddPlanOpen={setIsAddPlanOpen} />
          <ItemCard setIsAddPlanOpen={setIsAddPlanOpen} />
          <ItemCard setIsAddPlanOpen={setIsAddPlanOpen} />
          <ItemCard setIsAddPlanOpen={setIsAddPlanOpen} />
          <ItemCard setIsAddPlanOpen={setIsAddPlanOpen} />
          <ItemCard setIsAddPlanOpen={setIsAddPlanOpen} />
          <ItemCard setIsAddPlanOpen={setIsAddPlanOpen} />
          <ItemCard setIsAddPlanOpen={setIsAddPlanOpen} />
          <ItemCard setIsAddPlanOpen={setIsAddPlanOpen} />
          <ItemCard setIsAddPlanOpen={setIsAddPlanOpen} />
          <ItemCard setIsAddPlanOpen={setIsAddPlanOpen} />
          <ItemCard setIsAddPlanOpen={setIsAddPlanOpen} />
          <ItemCard setIsAddPlanOpen={setIsAddPlanOpen} />
          <ItemCard setIsAddPlanOpen={setIsAddPlanOpen} />
          <ItemCard setIsAddPlanOpen={setIsAddPlanOpen} />
          <ItemCard setIsAddPlanOpen={setIsAddPlanOpen} />
        </div>
      </div>
    </div>
  );
}
