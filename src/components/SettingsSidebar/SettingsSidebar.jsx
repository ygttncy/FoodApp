import "./SettingsSidebar.scss";
import { NavLink, useLocation } from "react-router-dom";
import tabs from "./Tabs";

function SettingsSidebar() {
  const location = useLocation();
  const defaultTab = "/settings/product-management";

  return (
    <div className="sidebar-container">
      {tabs.map((tab) => (
        <NavLink
          key={tab.id}
          to={tab.path}
          className={({ isActive }) => (isActive || (location.pathname === "/settings" && tab.path === defaultTab) ? "active" : "")}
        >
          <div className="list-group">
            {tab.icon}
            <div className="list-title-box">
              <h4>{tab.title}</h4>
              <p>{tab.detail}</p>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default SettingsSidebar;
