/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './amod.scss'; 

import noodles from "../../assets/Amodimage/image-2.png"
import Mushroom from "../../assets/Amodimage/image-3.png"
import Beef from "../../assets/Amodimage/image1.png"
import { Link } from 'react-router-dom';

const AmodTree = () => {
  const [timePeriod, setTimePeriod] = useState("1");

  const data = {
    "1": ["200 dishes ordered", "150 dishes ordered", "100 dishes ordered"], // Today
    "2": ["220 dishes ordered", "180 dishes ordered", "140 dishes ordered"], // This Week
    "3": ["250 dishes ordered", "200 dishes ordered", "160 dishes ordered"], // This Month
  };

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  return (
    <section className="amod-tree">
      <div className="amod-container">
        <h1>Most Ordered</h1>
        <select className="amod-filter" value={timePeriod} onChange={handleTimePeriodChange}>
          <option value="1">Today</option>
          <option value="2">This Week</option>
          <option value="3">This Month</option>
        </select>
      </div>
      <div className="amod-dvider"></div>
      <div className="amod-menu">
        <div className="amod-menu-item-container">
          <div className="amod-menu-item">
            <img  src={noodles} alt="Noodles" />
            <div className="amod-menu-item-text">
              <p>Spicy seasoned seafood noodles</p>
              <p className="under">{data[timePeriod][0]}</p>
            </div>
          </div>
          <div className="amod-menu-item">
            <img src={Mushroom}  alt="Mushroom" />
            <div className="amod-menu-item-text">
              <p>Salted Fried Mushroom</p>
              <p className="under">{data[timePeriod][1]}</p>
            </div>
          </div>
          <div className="amod-menu-item">
            <img  src={Beef} alt="Beef" />
            <div className="amod-menu-item-text">
              <p>Beef Dumpling in Hot and Sour Soup</p>
              <p className="under">{data[timePeriod][2]}</p>
            </div>
          </div>
          <div className="amod-button">
            <Link to="/"> 
            <button>View All</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmodTree;
