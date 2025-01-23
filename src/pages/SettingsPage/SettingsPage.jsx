import { useParams } from "react-router-dom";
import ProductsManagement from "../../components/ProductManagment/ProductManagment";
import SettingsSidebar from "../../components/SettingsSidebar/SettingsSidebar";
import "./SettingsPage.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Appearance from "../../components/Appearance/Appearance";
import YourRestaurant from "../../components/YourRestaurant/YourRestaurant";
import Notifications from "../../components/Notifications/Notifications";
import SecurityPage from "../../components/SecurityPage/SecurityPage";
import AboutUs from "../../components/AboutUs/AboutUs";
import { useState } from "react";

function SettingsPage() {
  const { tabName } = useParams();

  const [isAddDishOpen, setAddDishOpen] = useState(false);

  const settingComponents = {
    "appearance": <Appearance />,
    "your-restaurant": <YourRestaurant />,
    "product-management": <ProductsManagement isAddDishOpen={isAddDishOpen} setAddDishOpen={setAddDishOpen} />,
    "notifications": <Notifications />,
    "security": <SecurityPage />,
    "about-us": <AboutUs />,
  };
   
  
  return (
    <>
      <div className={isAddDishOpen ? "settings-overlay-div" : "close-overlay"}></div>
      <Sidebar />
      <main className="settings-page">
        <h1 className="settings-title">Settings</h1>
        <div className="main-container">
          <SettingsSidebar />
          {settingComponents[tabName]
            ? settingComponents[tabName]
            : settingComponents["product-management"]}
        </div>
      </main>
    </>
  );
}

export default SettingsPage;
