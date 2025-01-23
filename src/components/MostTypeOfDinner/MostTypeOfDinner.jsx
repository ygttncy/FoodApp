/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./mto.scss";
import '../../pages/dashboard/dashboard.scss'

const ApexChartComponent = ({ series }) => {
  const options = {
    chart: {
      type: "radialBar",
      height: 176,
      width: 176,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "45%",
        },
        track: {
          background: "#393c49",
          margin: 3,
        },
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Delivery", "To Go", "Dine In"],
    colors: ["#65B0F6", "#FFB572", "#FF7CA3"],
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type="radialBar"/>
    </div>
  );
};

const MTOChartSection = () => {
  const [timePeriod, setTimePeriod] = useState("1");

  const data = {
    "1": [44, 55, 67], // Today
    "2": [35, 40, 65], // This Week
    "3": [50, 60, 70], // This Month
  };

  const customersData = {
    "1": { dineIn: "200 customers", toGo: "122 customers", delivery: "264 customers" }, // Today
    "2": { dineIn: "180 customers", toGo: "110 customers", delivery: "240 customers" }, // This Week
    "3": { dineIn: "220 customers", toGo: "130 customers", delivery: "300 customers" }, // This Month
  };

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  return (
    <section className="mto-tree">
      <div className="mto-head">
        <h1 className="mto-head-text">Most Type of Order</h1>
        <select className="mto-fitler" value={timePeriod} onChange={handleTimePeriodChange}>
          <option value="1">Today</option>
          <option value="2">This Week</option>
          <option value="3">This Month</option>
        </select>
      </div>
      <div className="divider"></div>
      <div className="mto-chart-head">
        <div className="mto-chart">
          <div id="progress-container" className="progress-container">
            <ApexChartComponent series={data[timePeriod]} />
          </div>
          <div className="mto-chart-info">
            <div className="info-color">
              <div className="mto-chart-pink-info">
                <div className="mto-chart-info-text">
                  <h3 className="mto-chart-text">Dine In</h3>
                  <div className="mto-chart-text-unduer">
                    <h3 className="mto-chart-text">{customersData[timePeriod].dineIn}</h3>
                  </div>
                </div>
              </div>
              <div className="mto-chart-yellow-info">
                <div className="mto-chart-info-text">
                  <h3 className="mto-chart-text">To Go</h3>
                  <div className="mto-chart-text-unduer">
                    <h3 className="mto-chart-text">{customersData[timePeriod].toGo}</h3>
                  </div>
                </div>
              </div>
              <div className="mto-chart-blue-info">
                <div className="mto-chart-info-text">
                  <h3 className="mto-chart-text">Delivery</h3>
                  <div className="mto-chart-text-unduer">
                    <h3 className="mto-chart-text">{customersData[timePeriod].delivery}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MTOChartSection;
