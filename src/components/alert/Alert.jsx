import React from "react";
import { SideBar, TopBar } from "../sideBar/SideBar";
import { MdErrorOutline } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaCheckDouble } from "react-icons/fa6";
import "./alert.css";

const Alert = () => {
  return (
    <div className="content sidebar-container">
      <div className="topbar-container">
        <TopBar />
      </div>
      <div className="page-content">
        <div className="sidebar-content">
          <SideBar />
        </div>
        <div className="main-content">
          <h1 className="clh1">Alerts</h1>
          <p className="description">
            An alert displays a short, important message in a way that attracts
            the user's attention without interrupting the user's task.
            <br />
            <br />
          </p>
          <div className="section section--type-one">
            <h4 className="clh4">Basic Alerts</h4>
            <small>
              The alert offers four severity levels that set a distinctive icon
              and color.
            </small>
            <div className="type-one--alert">
              <div className="alert error">
                <MdErrorOutline className="space i" />
                This is an error alert -- check it out
              </div>
              <div className="alert warning">
                <IoWarningOutline className="space i" />
                This is a Warning alert -- check it out
              </div>
              <div className="alert info">
                <IoIosInformationCircleOutline className="space i" />
                This is an Info alert -- check it out
              </div>
              <div className="alert success">
                <FaCheckDouble className="space i" />
                This is a Success alert -- check it out
              </div>
            </div>
            <div className="code-example-block">
              <iframe
                title="unique"
                src="https://carbon.now.sh/embed/vFFnphOrYdOtXPWDmZQP"
                style={{width: "664px", height: "260px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>

            <div className="code-example-block">
              <iframe
                title="unique"
                src="https://carbon.now.sh/embed/vFFnphOrYdOtXPWDmZQP"
                style={{
                  width: "644px",
                  height: "260px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>

            <div className="code-example-block">
              <iframe
                title="unique"
                src="https://carbon.now.sh/embed/vFFnphOrYdOtXPWDmZQP"
                style={{
                  width: "664px",
                  height: "260px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
            <div className="code-example-block">
              <iframe
                title="unique"
                src="https://carbon.now.sh/embed/vFFnphOrYdOtXPWDmZQP"
                style={{
                  width: "664px",
                  height: "260px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
