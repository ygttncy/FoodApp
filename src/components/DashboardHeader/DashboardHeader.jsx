import React from "react";
import "./DashboardHeader.scss";

const DashboardHeader = () => {
  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="dashboard-header">
      <div className="dashboard-info">
        <h1>Dashboard</h1>
        <span className="dashboard-date">{formatDate(new Date())}</span>
      </div>
    </div>
  );
};

export default DashboardHeader;
