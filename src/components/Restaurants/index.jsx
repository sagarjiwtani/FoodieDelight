import React, { useEffect, useState } from "react";
import "../index.css";
import SkeletonLoad from "../SkeletonLoad";
import Dropdown from "../Dropdown/dropdown";
import { Link, useNavigate } from "react-router-dom";
import { CONSTANTS } from "../../constants/constants";
export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [currentRestaurant, setCurrentRestaurant] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const option = [
    { value: "rating", label: "Rating" },
    { value: "distance", label: "Distance" },
  ];

  const router = useNavigate();

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3033/restaurants`);
      const data = await response.json();
      setRestaurants(data);
      setTotalPages(Math.ceil(data.length / CONSTANTS.PER_PAGE));
      const current = data.slice(
        (currentPage - 1) * CONSTANTS.PER_PAGE,
        CONSTANTS.PER_PAGE * currentPage
      );
      setCurrentRestaurant(current);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  useEffect(() => {
    const current = restaurants.slice(
      (currentPage - 1) * CONSTANTS.PER_PAGE,
      CONSTANTS.PER_PAGE * currentPage
    );
    setCurrentRestaurant(current);
  }, [currentPage, restaurants]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCategory = async (option) => {
    console.log("here", option);
    try {
      const response = await fetch(
        `http://localhost:3033/restaurants?_sort=${option.value}&_order=ASC`
      );
      const data = await response.json();
      setRestaurants(data);
      setTotalPages(Math.ceil(data.length / CONSTANTS.PER_PAGE));
      const current = data.slice(
        (currentPage - 1) * CONSTANTS.PER_PAGE,
        CONSTANTS.PER_PAGE * currentPage
      );
      setCurrentRestaurant(current);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  if (loading) {
    return <SkeletonLoad />;
  }
  return (
    <>
      <div className="categories">
        <Dropdown options={option} onSelect={handleCategory} />
      </div>
      <div className="restaurant-list">
        <div className="grid-container">
          {currentRestaurant.map((restaurant) => (
            <div
              onClick={() => router("/restaurantmenu", { state: restaurant })}
            >
              <div key={restaurant.id} className="restaurant">
                <h2>{restaurant.name}</h2>
                <p>Cuisine: {restaurant.cuisine}</p>
                <p>Location: {restaurant.location}</p>
                <p>Rating: {restaurant.rating}</p>
                <p>Distance: {restaurant.distance}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
