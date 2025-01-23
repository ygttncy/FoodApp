import imgOne from "../assets/Avatar/1.png";
import imgTwo from "../assets/Avatar/2.png";
import imgThree from "../assets/Avatar/3.png";
import imgFour from "../assets/Avatar/4.png";
import imgFive from "../assets/Avatar/5.png";
import revenueIcon from "../assets/Analytics/revenue-icon.png";
import ordersIcon from "../assets/Analytics/orders-icon.png";
import customersIcon from "../assets/Analytics/customers-icon.png";

const orders = [
  {
    avatarImg: imgOne,
    avatarColor: "red",
    id: 1,
    customer: "Eren Jaegar",
    menu: "Spicy seasoned seafood noodles",
    totalPayment: "$125",
    status: "Completed",
  },
  {
    avatarImg: imgTwo,
    avatarColor: "blue",
    id: 2,
    customer: "Reiner Braunn",
    menu: "Salted Pasta with mushroom sauce",
    totalPayment: "$145",
    status: "Preparing",
  },
  {
    avatarImg: imgThree,
    avatarColor: "purple",
    id: 3,
    customer: "Levi Ackerman",
    menu: "Beef dumpling in hot and sour soup",
    totalPayment: "$105",
    status: "Pending",
  },
  {
    avatarImg: imgFour,
    avatarColor: "green",
    id: 4,
    customer: "Historia Reiss",
    menu: "Hot spicy fried rice with omelet",
    totalPayment: "$45",
    status: "Completed",
  },
  {
    avatarImg: imgFive,
    avatarColor: "pink",
    id: 5,
    customer: "Hanji Zoe",
    menu: "Hot spicy fried rice with omelet",
    totalPayment: "$245",
    status: "Completed",
  },
  {
    avatarImg: imgThree,
    avatarColor: "yellow",
    id: 6,
    customer: "Armin Arlart",
    menu: "Hot spicy fried rice with omelet",
    totalPayment: "$435",
    status: "Completed",
  },
];
export { orders };

export const analyticsData = [
  {
    icon: revenueIcon,
    value: "$10,243.00",
    change: "+32.40%",
    title: "Total Revenue",
    changeType: "up",
  },
  {
    icon: ordersIcon,
    value: "23,456",
    change: "-12.40%",
    title: "Total Dish Ordered",
    changeType: "down",
  },
  {
    icon: customersIcon,
    value: "1,234",
    change: "+2.40%",
    title: "Total Customer",
    changeType: "up",
  },
];
