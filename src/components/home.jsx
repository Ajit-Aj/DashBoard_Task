import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Line } from "react-chartjs-2";
import savings from "./assests/earning.png";
import order from "./assests/checklist.png";
import balance from "./assests/balance.png";
import sales from "./assests/sale.png";
import ChartComponent from "./ChartComponent.jsx";
import PieChartComponent from "./PieChartComponent";

const Home = () => {
  return (
    <div className="home">
      <div className="top">
        <span className="name" role="img" aria-label="Bye">
          Hello Shahruk 👋,
        </span>
        <div className="search-bar">
          <input className="search" type="text" placeholder="Search" />
          <div className="icon">
            <FontAwesomeIcon icon={faSearch} color="grey" />
          </div>
        </div>
      </div>
      <div className="square-boxes">
        {/* <div style={{flexDirection:"column"}}> */}
        <div className="square-box">
          <img src={savings} alt="Image savings" />
          <div className="description">Earnings</div>
          <div className="survey">
            <span>$89K</span>
            <br></br>
            <span style={{ color: "green", fontWeight: "600" }}>
              &uarr;37.8%
            </span>
            <br></br>
            <span>this week</span>
          </div>
        </div>
        {/* </div>  */}
        <div className="square-box">
          <img src={order} alt="Image order" />
          <div className="description">Orders</div>
          <div className="survey">
            <span>$89K</span>
            <br></br>
            <span style={{ color: "red", fontWeight: "600" }}>
              &darr;2%
            </span>{" "}
            <br></br>
            <span>this month</span>
          </div>
        </div>
        <div className="square-box">
          <img src={balance} alt="Image balance" />
          <div className="description">Balance</div>
          <div className="survey">
            <span>$89K</span>
            <br></br>
            <span style={{ color: "red", fontWeight: "600" }}> &darr;2%</span>
            <br></br> <span>this month</span>
          </div>
        </div>
        <div className="square-box">
          <img src={sales} alt="Image sales" />
          <div className="description">Total Sales</div>
          <div className="survey">
            <span>$89K</span>
            <br></br>
            <span style={{ color: "green", fontWeight: "600" }}>&uarr;11%</span>
            <br></br>
            <span> this week</span>
          </div>
        </div>
      </div>
      <div className="barPie">
        <div className="vertical-bar">
          <ChartComponent />
        </div>
        <div className="pie-chart">
          <PieChartComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
