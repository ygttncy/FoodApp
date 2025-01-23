import React from "react";
import { Avatar } from "../Avatar/Avatar";
import { orders } from "../../db/db.js";
import "./OrderReport.scss";

const OrderReport = () => {
  return (
    <div className="order-report">
      <h2>Order Report</h2>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Menu</th>
            <th>Total Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>
                <div className="customer-cont">
                  <Avatar
                    bgColor={order.avatarColor}
                    avatarImg={order.avatarImg}
                  />
                  {order.customer}
                </div>
              </td>
              <td>{order.menu}</td>
              <td>{order.totalPayment}</td>
              <td>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderReport;
