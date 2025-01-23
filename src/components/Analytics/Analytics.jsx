import React from "react";
import { analyticsData } from "../../db/db.js";
import "./Analytics.scss";

const Analytics = () => {
  return (
    <div className="analytics">
      {analyticsData.map((item, index) => (
        <div key={index} className="analytics-card">
          <div className="top-section">
            <div className="analytics-icon">
              <img src={item.icon} alt={item.title} />
            </div>
            <div className="change-container">
              <span className={`change ${item.changeType}`}>{item.change}</span>
              <span className={`change-icon ${item.changeType}`}>
                {item.changeType === "up" ? "↑" : "↓"}
              </span>
            </div>
          </div>
          <div className="analytics-info">
            <h2>{item.value}</h2>
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Analytics;
