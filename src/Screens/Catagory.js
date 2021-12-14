import React, { useEffect } from "react";
import Button from "../Components/Button";
import InputBox from "../Components/InputBox";
import placeholderImg from "../Assets/placeholderImg.png";
import itemdetailpic from "../Assets/itemdetailpic.png";
function CatagoryCard({ setIsEditCatagoryOpen }) {
  return (
    <div className="catagory__card">
      <input
        type="radio"
        name="catagory__card__input"
        className="catagory__card__input"
      />
      <div className="catagory__card__content">
        <img
          src={placeholderImg}
          alt="catagory__img"
          className="catagory__card__content__img"
        />
        <div className="catagory__card__content__info">
          <div className="catagory__card__content__info__heading">Name</div>
          <div className="catagory__card__content__info__value">
            Bilal house
          </div>
          <div className="catagory__card__content__info__heading">Add Ons</div>
          <div className="catagory__card__content__info__value">Yes</div>
        </div>
        <div className="catagory__card__content__btns">
          <button
            style={{ marginBottom: 6 }}
            className="catagory__card__content__btns__btn catagory__card__content__btns__primary"
            onClick={() => {
              setIsEditCatagoryOpen(true);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.362 11.482">
              <path
                id="edit-2"
                d="M9.839,2.6a1.478,1.478,0,0,1,2.09,2.09L4.874,11.749,2,12.533l.784-2.874Z"
                transform="translate(-1.5 -1.552)"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              />
            </svg>
          </button>
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
    </div>
  );
}
function SubCatagoryCard({ setIsEditSubCatagoryOpen }) {
  return (
    <div className="catagory__card">
      <input
        type="radio"
        name="sub__catagory__card__input"
        className="catagory__card__input"
      />
      <div className="catagory__card__content">
        <img
          src={placeholderImg}
          alt="catagory__img"
          className="catagory__card__content__img"
        />
        <div className="catagory__card__content__info">
          <div className="catagory__card__content__info__heading">Name</div>
          <div className="catagory__card__content__info__value">
            Bilal house
          </div>
        </div>
        <div className="catagory__card__content__btns">
          <button
            style={{ marginBottom: 6 }}
            className="catagory__card__content__btns__btn catagory__card__content__btns__primary"
            onClick={() => {
              setIsEditSubCatagoryOpen(true);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.362 11.482">
              <path
                id="edit-2"
                d="M9.839,2.6a1.478,1.478,0,0,1,2.09,2.09L4.874,11.749,2,12.533l.784-2.874Z"
                transform="translate(-1.5 -1.552)"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              />
            </svg>
          </button>
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
    </div>
  );
}
function ItemCard({ setIsEditItemOpen }) {
  return (
    <div className="catagory__card">
      <input
        type="radio"
        name="item_card__input"
        className="catagory__card__input"
      />
      <div className="catagory__card__content">
        <img
          src={placeholderImg}
          alt="catagory__img"
          className="catagory__card__content__img"
        />
        <div className="catagory__card__content__info">
          <div className="catagory__card__content__info__heading">Name</div>
          <div className="catagory__card__content__info__value">
            Bilal house
          </div>
          <div className="catagory__card__content__info__heading">Price</div>
          <div className="catagory__card__content__info__value">$30</div>
        </div>
        <div className="catagory__card__content__btns">
          <button
            className="catagory__card__content__btns__btn catagory__card__content__btns__primary"
            style={{ marginBottom: 6 }}
            onClick={() => {
              setIsEditItemOpen(true);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.362 11.482">
              <path
                id="edit-2"
                d="M9.839,2.6a1.478,1.478,0,0,1,2.09,2.09L4.874,11.749,2,12.533l.784-2.874Z"
                transform="translate(-1.5 -1.552)"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              />
            </svg>
          </button>
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
    </div>
  );
}
export default function Catagory({
  setIsSmallNav,
  setIsAddCatagoryOpen,
  setIsAddSubCatagoryOpen,
  setIsAddItemOpen,
  setIsEditCatagoryOpen,
  setIsEditSubCatagoryOpen,
  setIsEditItemOpen,
}) {
  useEffect(() => {
    setIsSmallNav(true);
  }, []);
  return (
    <div className="container__wrapper">
      <div className="container">
        <div className="container__header">
          <div className="container__header__heading">Catagories</div>
          <div className="container__header__btns">
            <Button
              label="Add"
              onClick={() => {
                setIsAddCatagoryOpen(true);
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
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
          <CatagoryCard setIsEditCatagoryOpen={setIsEditCatagoryOpen} />
        </div>
      </div>
      <div className="container">
        <div className="container__header">
          <div className="container__header__heading">Sub Catagories</div>
          <div className="container__header__btns">
            <Button
              label="Add"
              onClick={() => {
                setIsAddSubCatagoryOpen(true);
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
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
          <SubCatagoryCard
            setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
          />
        </div>
      </div>
      <div className="container">
        <div className="container__header">
          <div className="container__header__heading">Items</div>
          <div className="container__header__btns">
            <Button
              label="Add"
              onClick={() => {
                setIsAddItemOpen(true);
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
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
          <ItemCard setIsEditItemOpen={setIsEditItemOpen} />
        </div>
      </div>
      <div className="container">
        <div className="container__header">
          <div className="container__header__heading">Item Details</div>
          <div className="container__header__btns">
            <Button
              label="Edit"
              onClick={() => {
                setIsEditItemOpen(true);
              }}
            />
            <Button label="Delete" variant="secondary" />
          </div>
        </div>
        <div className="table__container" style={{ marginRight: "2em" }}>
          <img
            src={itemdetailpic}
            alt="itemdetailpic"
            className="table__container__item__detail__img"
          />
          <div className="table__container__item__details">
            <div className="table__container__item__details__left">
              <div className="table__container__item__details__left__value">
                Name
              </div>
              <div className="table__container__item__details__left__value">
                Price
              </div>
              <div className="table__container__item__details__left__value">
                Catagory
              </div>
            </div>
            <div className="table__container__item__details__right">
              <div className="table__container__item__details__right__value">
                Mehfooz Favourite
              </div>
              <div className="table__container__item__details__right__value">
                $35
              </div>
              <div className="table__container__item__details__right__value">
                Fast Food
              </div>
            </div>
          </div>
          <div className="table__container__item__details__discription__title">
            Description
          </div>
          <div className="table__container__item__details table__container__item__details__discription__title">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.It is a
            long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </div>
        </div>
      </div>
    </div>
  );
}
