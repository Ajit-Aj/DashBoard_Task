import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Home from "./home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faUsers,
  faBars,
  faCubes,
  faMoneyBill,
  faBullhorn,
  faQuestionCircle,
  faAngleRight,
  faTachometerAlt,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDashboardVisible, setIsDashboardVisible] = useState(true);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

   const toggleMobileMenu = () => {
     setIsMobileMenuOpen(!isMobileMenuOpen);
     setIsDashboardVisible(!isMobileMenuOpen);
   };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const renderSidebar = () => {
    if (isMobile) {
      return (
        <div className="mobile-menu">
          <div className="hamburger-menu" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div
            className={`mobile-menu-content ${isMobileMenuOpen ? "open" : ""}`}
          >
            <nav className="sidebar">
              <ul>
                <li>
                  <Link
                    to="/"
                    onClick={() => handleTabChange("home")}
                    className={activeTab === "home" ? "active-tab" : ""}
                  >
                    <div className={`tabs ${activeTab === "home" && "active"}`}>
                      <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
                      {activeTab !== "home" && (
                        <FontAwesomeIcon icon={faAngleRight} />
                      )}
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/page1"
                    onClick={() => handleTabChange("page1")}
                    className={activeTab === "page1" ? "active-tab" : " "}
                  >
                    <div
                      className={`tabs ${activeTab === "page1" && "active"}`}
                    >
                      <FontAwesomeIcon icon={faCubes} /> Product
                      {activeTab !== "page1" && (
                        <FontAwesomeIcon icon={faAngleRight} />
                      )}
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/page2"
                    onClick={() => handleTabChange("page2")}
                    className={activeTab === "page2" ? "active-tab" : " "}
                  >
                    <div
                      className={`tabs ${activeTab === "page2" && "active"}`}
                    >
                      <FontAwesomeIcon icon={faUsers} /> Customers
                      {activeTab !== "page2" && (
                        <FontAwesomeIcon icon={faAngleRight} />
                      )}
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/page3"
                    onClick={() => handleTabChange("page3")}
                    className={activeTab === "page3" ? "active-tab" : " "}
                  >
                    <div
                      className={`tabs ${activeTab === "page3" && "active"}`}
                    >
                      <FontAwesomeIcon icon={faMoneyBill} /> Income
                      {activeTab !== "page3" && (
                        <FontAwesomeIcon icon={faAngleRight} />
                      )}
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/page4"
                    onClick={() => handleTabChange("page4")}
                    className={activeTab === "page4" ? "active-tab" : " "}
                  >
                    <div
                      className={`tabs ${activeTab === "page4" && "active"}`}
                    >
                      <FontAwesomeIcon icon={faBullhorn} /> Promote
                      {activeTab !== "page4" && (
                        <FontAwesomeIcon icon={faAngleRight} />
                      )}
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/page5"
                    onClick={() => handleTabChange("page5")}
                    className={activeTab === "page5" ? "active-tab" : " "}
                  >
                    <div
                      className={`tabs ${activeTab === "page5" && "active"}`}
                    >
                      <FontAwesomeIcon icon={faQuestionCircle} /> Help
                      {activeTab !== "page5" && (
                        <FontAwesomeIcon icon={faAngleRight} />
                      )}
                    </div>
                  </Link>
                </li>
              </ul>
              <div className="projectManager">
                <h5>
                  Evano {""} {""}
                  <FontAwesomeIcon icon={faCaretDown} />
                </h5>
                <span>Project Manager</span>
              </div>
            </nav>
          </div>
        </div>
      );
    } else {
      return (
        <nav className="sidebar">
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => handleTabChange("home")}
                className={activeTab === "home" ? "active-tab" : ""}
              >
                <div className={`tabs ${activeTab === "home" && "active"}`}>
                  <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
                  {activeTab !== "home" && (
                    <FontAwesomeIcon icon={faAngleRight} />
                  )}
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/page1"
                onClick={() => handleTabChange("page1")}
                className={activeTab === "page1" ? "active-tab" : " "}
              >
                <div className={`tabs ${activeTab === "page1" && "active"}`}>
                  <FontAwesomeIcon icon={faCubes} /> Product
                  {activeTab !== "page1" && (
                    <FontAwesomeIcon icon={faAngleRight} />
                  )}
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/page2"
                onClick={() => handleTabChange("page2")}
                className={activeTab === "page2" ? "active-tab" : " "}
              >
                <div className={`tabs ${activeTab === "page2" && "active"}`}>
                  <FontAwesomeIcon icon={faUsers} /> Customers
                  {activeTab !== "page2" && (
                    <FontAwesomeIcon icon={faAngleRight} />
                  )}
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/page3"
                onClick={() => handleTabChange("page3")}
                className={activeTab === "page3" ? "active-tab" : " "}
              >
                <div className={`tabs ${activeTab === "page3" && "active"}`}>
                  <FontAwesomeIcon icon={faMoneyBill} /> Income
                  {activeTab !== "page3" && (
                    <FontAwesomeIcon icon={faAngleRight} />
                  )}
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/page4"
                onClick={() => handleTabChange("page4")}
                className={activeTab === "page4" ? "active-tab" : " "}
              >
                <div className={`tabs ${activeTab === "page4" && "active"}`}>
                  <FontAwesomeIcon icon={faBullhorn} /> Promote
                  {activeTab !== "page4" && (
                    <FontAwesomeIcon icon={faAngleRight} />
                  )}
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/page5"
                onClick={() => handleTabChange("page5")}
                className={activeTab === "page5" ? "active-tab" : " "}
              >
                <div className={`tabs ${activeTab === "page5" && "active"}`}>
                  <FontAwesomeIcon icon={faQuestionCircle} /> Help
                  {activeTab !== "page5" && (
                    <FontAwesomeIcon icon={faAngleRight} />
                  )}
                </div>
              </Link>
            </li>
          </ul>
          <div className="projectManager">
            <h5>
              Evano {""} {""}
              <FontAwesomeIcon icon={faCaretDown} />
            </h5>
            <span>Project Manager</span>
          </div>
        </nav>
      );
    }
  };

  let componentToShow;
  switch (activeTab) {
    case "page1":
      componentToShow = <Page1 />;
      break;
    case "page2":
      componentToShow = <Page2 />;
      break;
    case "page3":
      componentToShow = <Page3 />;
      break;
    case "page4":
      componentToShow = <Page4 />;
      break;
    case "page5":
      componentToShow = <Page5 />;
      break;
    case "home":
    default:
      componentToShow = <Home />;
  }

  return (
    <div className={`dashboard ${isDashboardVisible ? "" : "hidden"}`}>
      <div className="dashboard-heading">
        <FontAwesomeIcon icon={faChartBar} /> Dashboard
      </div>

      {renderSidebar()}
      <div className="content">{componentToShow}</div>
    </div>
  );
};
export default Dashboard;
