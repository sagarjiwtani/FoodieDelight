import { useState } from "react";
// import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/layout";
import ErrorPage from "./components/ErrorPage/errorPage";
import Restaurants from "./components/Restaurants";
import RestaurantMenu from "./components/RestaurantMenu";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Restaurants />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/cart",
          element: (
            <div>
              <h1>cart</h1>
            </div>
          ),
        },
        {
          path: "/restaurantmenu",
          element: <RestaurantMenu />,
        },
      ],
    },
  ]);
  return (
    <div
      className="App"
      style={{ margin: 0, padding: 0, boxSizing: "border-box" }}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
