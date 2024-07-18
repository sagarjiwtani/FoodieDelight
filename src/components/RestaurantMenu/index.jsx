import React from "react";
import "./RestaurantMenu.css"; // Import your CSS file for styling
import { useLocation, useNavigate } from "react-router-dom";

const RestaurantMenu = () => {
  // console.log("here--", props);
  const router = useLocation();
  console.log("router--", router);
  // const { restaurant } = props.location.state;
  const { state } = router;
  return (
    <div className="restaurant-menu">
      <h2 className="menu-title">{state.name} Menu</h2>
      <div className="menu-items">
        {state.menus.map((item, index) => (
          <div key={index} className="menu-item">
            <h3 className="item-name">{item.name}</h3>
            <p className="item-price">${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
