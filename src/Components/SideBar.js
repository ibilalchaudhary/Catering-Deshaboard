import React, { useState } from "react";
import Button from "./Button";
import InputBox from "./InputBox";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { useNavigate } from "react-router-dom";
import IconBtn from "./IconBtn";
import userPic from "../Assets/userPic.png";

function Avatar({ userPic, onClick, style }) {
  return (
    <button className="avatar__btn" onClick={onClick}>
      <img
        src={userPic}
        alt="userPic"
        style={style}
        className="avatar__btn__img"
      />
    </button>
  );
}

export default function SideBar({ isLogedin }) {
  const navigate = useNavigate();
  const [isInPanel, setIsInPanel] = useState(false);
  const [isOnUserProfile, setIsOnUserProfile] = useState(false);
  const [isOnNotificationPenel, setIsOnNotificationPenel] = useState(false);
  const notifications = [
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];
  return (
    <div className="side__bar">
      <div className="side__bar__header">
        <div className="side__bar__header__left">
          {isLogedin ? (
            <>
              {isInPanel ? (
                <IconBtn
                  svg={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16.828"
                    >
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
                  onClick={() => {
                    setIsInPanel(false);
                    setIsOnNotificationPenel(false);
                    setIsOnUserProfile(false);
                  }}
                />
              ) : (
                <>
                  <IconBtn
                    svg={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 18.183 22.16"
                      >
                        <path
                          id="Icon_material-notifications"
                          data-name="Icon material-notifications"
                          d="M15.091,25.91a2.28,2.28,0,0,0,2.273-2.273H12.819A2.272,2.272,0,0,0,15.091,25.91Zm6.819-6.819V13.41C21.91,9.921,20.046,7,16.8,6.227V5.455a1.7,1.7,0,0,0-3.409,0v.773C10.125,7,8.273,9.909,8.273,13.41v5.682L6,21.365V22.5H24.183V21.365Z"
                          transform="translate(-6 -3.75)"
                          fill="#fb6a3b"
                        />
                      </svg>
                    }
                    onClick={() => {
                      setIsInPanel(true);
                      setIsOnNotificationPenel(true);
                    }}
                  />
                  <Avatar
                    userPic={userPic}
                    onClick={() => {
                      setIsInPanel(true);
                      setIsOnUserProfile(true);
                    }}
                  />
                </>
              )}
            </>
          ) : null}
        </div>
        <ThemeToggleBtn />
      </div>
      <div className="side__bar__content">
        {isOnNotificationPenel ? (
          <div className="notification__panel">
            <button className="notification__panel__btn">CLear All</button>
            <div className="notification__panel__content">
              {notifications.map((notification, i) => (
                <div className="notification__panel__entry" key={i}>
                  <button className="notification__panel__entry__btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="5.414"
                      height="5.414"
                      viewBox="0 0 5.414 5.414"
                    >
                      <g id="x" transform="translate(0.307 0.307)">
                        <line
                          id="Line_9"
                          data-name="Line 9"
                          x1="4"
                          y2="4"
                          transform="translate(0.4 0.4)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                        />
                        <line
                          id="Line_10"
                          data-name="Line 10"
                          x2="4"
                          y2="4"
                          transform="translate(0.4 0.4)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                        />
                      </g>
                    </svg>
                  </button>
                  <div className="notification__panel__entry__heading">
                    {notification.title}
                  </div>
                  <div className="notification__panel__entry__info">
                    {notification.info}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : isOnUserProfile ? (
          <form
            onSubmit={() => {
              setIsOnUserProfile(false);
              setIsInPanel(false);
            }}
            className="side__bar__content__form"
          >
            <div className="side__bar__content__form__input">
              <input
                type="file"
                name="side__bar__content__form__input__file"
                id="side__bar__content__form__input__file"
                className="side__bar__content__form__input__file"
              />
              <Avatar userPic={userPic} style={{ width: 100, height: 100 }} />
            </div>
            <InputBox type="text" placeholder="Vendor Name" autoFocus />
            <InputBox type="email" placeholder="Email Address" />
            <InputBox type="password" placeholder="Confirm Password" />
            <InputBox type="password" placeholder="Password" />
            <Button label="Save" type="submit" />
          </form>
        ) : (
          <div className="sidebar__queries__container">
            <div className="sidebar__queries__title">Title of query</div>
            <div className="sidebar__queries__heading">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </div>
            <div className="sidebar__queries__title">Title of query</div>
            <div className="sidebar__queries__heading">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </div>
            <a href="" className="sidebar__queries__container__links">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                stroke="currentColor"
              >
                <g id="help-circle" transform="translate(0.5 0.5)">
                  <circle
                    id="Ellipse_307"
                    data-name="Ellipse 307"
                    cx="8"
                    cy="8"
                    r="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                  <path
                    id="Path_9211"
                    data-name="Path 9211"
                    d="M9.09,8.584a2.378,2.378,0,0,1,4.62.793c0,1.585-2.378,2.378-2.378,2.378"
                    transform="translate(-3.471 -3.036)"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                  <line
                    id="Line_12"
                    data-name="Line 12"
                    transform="translate(8 12)"
                    fill="none"
                    stroke="#53585e"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                </g>
              </svg>
              Get Help
            </a>
            <a href="" className="sidebar__queries__container__links">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                stroke="currentColor"
              >
                <g id="life-buoy" transform="translate(0.5 0.446)">
                  <circle
                    id="Ellipse_308"
                    data-name="Ellipse 308"
                    cx="8"
                    cy="8"
                    r="8"
                    transform="translate(0 0.054)"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                  <circle
                    id="Ellipse_309"
                    data-name="Ellipse 309"
                    cx="3"
                    cy="3"
                    r="3"
                    transform="translate(5 5.054)"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                  <line
                    id="Line_13"
                    data-name="Line 13"
                    x2="3.36"
                    y2="3.36"
                    transform="translate(2.322 2.322)"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                  <line
                    id="Line_14"
                    data-name="Line 14"
                    x2="3.36"
                    y2="3.36"
                    transform="translate(10.168 10.168)"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                  <line
                    id="Line_15"
                    data-name="Line 15"
                    y1="3.36"
                    x2="3.36"
                    transform="translate(10.168 2.322)"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                  <line
                    id="Line_16"
                    data-name="Line 16"
                    y1="2.798"
                    x2="2.798"
                    transform="translate(10.168 2.885)"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                  <line
                    id="Line_17"
                    data-name="Line 17"
                    y1="3.36"
                    x2="3.36"
                    transform="translate(2.322 10.168)"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                </g>
              </svg>
              Feedback
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
