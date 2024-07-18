import React from "react";
import "../index.css";
export default function SkeletonLoad() {
  const skeletonView = new Array(9);
  return (
    <div className="restaurant-list">
      <div className="grid-container">
        {skeletonView.map((restaurant) => (
          <div key={restaurant} className="restaurant"></div>
        ))}
      </div>
    </div>
  );
}
