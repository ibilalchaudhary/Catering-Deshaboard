import React, { useEffect } from "react";
import BarChart from "../Components/BarChart";
import Button from "../Components/Button";
import LineChart from "../Components/LineChart";
import PieChart from "../Components/PieChart";
import cardBackground from "../Assets/cardBackground.png";

export default function Dashboard({ setIsSmallNav }) {
  useEffect(() => {
    setIsSmallNav(false);
  }, []);
  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header__heading">Dashboard</div>
        {/* <div className="container__header__btns">
          <Button label="Add" style={{ marginRight: "1em" }} />
          <Button label="Delete" variant="secondary" />
        </div> */}
      </div>
      <div className="dashboard__container">
        <div className="dashboard__container__top">
          <div className="dashboard__container__top__left">
            <div className="dashboard__container__top__left__heading">
              This Month Sales
            </div>
            <div className="dashboard__container__top__left__sales">
              $12,900
            </div>
            <div className="dashboard__container__top__left__sales__trend">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.829"
                height="15.05"
                viewBox="0 0 16.829 15.05"
              >
                <g
                  id="Group_511"
                  data-name="Group 511"
                  transform="translate(-415.156 -331.236)"
                >
                  <path
                    id="Path_5"
                    data-name="Path 5"
                    d="M0,0C0,2.119,1.4,2.377,2.164,3.405c1.142,1.552,2.239,2.862,4.6,2.63,2.667-.261,2.061,4.5,3.908,5.106"
                    transform="translate(415.165 345.583) rotate(-89)"
                    fill="none"
                    stroke="#00ff08"
                    strokeWidth="1"
                  />
                  <path
                    id="Polygon_1"
                    data-name="Polygon 1"
                    d="M2.946,0,5.891,6.4H0Z"
                    transform="matrix(0.259, 0.966, -0.966, 0.259, 430.46, 331.236)"
                    fill="#0f7"
                  />
                </g>
              </svg>
              <span>+16</span>
              than last month
            </div>
            <div className="dashboard__container__top__left__month__selected">
              <button className="dashboard__container__top__left__month__selected__btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10.45 18.279"
                  fill="currentColor"
                >
                  <path
                    id="Icon_ionic-ios-arrow-back"
                    data-name="Icon ionic-ios-arrow-back"
                    d="M14.4,15.331,21.317,8.42a1.306,1.306,0,0,0-1.85-1.845l-7.836,7.83a1.3,1.3,0,0,0-.038,1.8l7.868,7.885a1.306,1.306,0,0,0,1.85-1.845Z"
                    transform="translate(-11.251 -6.194)"
                  />
                </svg>
              </button>
              June 2021
              <button className="dashboard__container__top__left__month__selected__btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10.45 18.279"
                  fill="currentColor"
                >
                  <path
                    id="Icon_ionic-ios-arrow-back"
                    data-name="Icon ionic-ios-arrow-back"
                    d="M3.15,9.137l6.916-6.911A1.306,1.306,0,1,0,8.216.382L.38,8.212a1.3,1.3,0,0,0-.038,1.8L8.211,17.9a1.306,1.306,0,1,0,1.85-1.845Z"
                    transform="translate(10.45 18.279) rotate(180)"
                  />
                </svg>
              </button>
            </div>
            <div className="dashboard__container__top__left__month__wrapper">
              <div className="dashboard__container__top__left__month dashboard__container__top__left__month__primary"></div>{" "}
              This Month
            </div>
            <div className="dashboard__container__top__left__month__wrapper">
              <div className="dashboard__container__top__left__month dashboard__container__top__left__month__secondary"></div>{" "}
              Last Month
            </div>
          </div>
          <div
            className="dashboard__container__card dashboard__container__card__chart"
            style={{ maxWidth: "100%", width: "80%", padding: "1em 0" }}
          >
            <LineChart />
          </div>
        </div>

        <div className="dashboard__container__bottom">
          <div className="dashboard__container__card dashboard__container__card__primary">
            <img
              src={cardBackground}
              alt="cardBackground"
              className="dashboard__container__card__img"
            />
            <div className="dashboard__container__card__content">
              <div className="dashboard__container__card__heading">
                Total Profit
              </div>
              <div className="dashboard__container__card__value">$12,900</div>
            </div>
          </div>
          <div className="dashboard__container__card dashboard__container__card__secondary">
            <img
              src={cardBackground}
              alt="cardBackground"
              className="dashboard__container__card__img"
            />
            <div className="dashboard__container__card__content">
              <div className="dashboard__container__card__heading">
                Total expense
              </div>
              <div className="dashboard__container__card__value">$12,900</div>
            </div>
          </div>
          <div className="dashboard__container__card dashboard__container__card__chart">
            <div className="dashboard__container__card__chart__heading">
              Traffic
            </div>
            <BarChart />
          </div>
          <div className="dashboard__container__card dashboard__container__card__chart">
            <div className="dashboard__container__card__chart__heading">
              Traffic Sources
            </div>
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
}
