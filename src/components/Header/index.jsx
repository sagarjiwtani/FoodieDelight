/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const router = useNavigate();
  return (
    <>
      <div className="header">
        <h1>Foodie Delight</h1>
        <p>
          treasure for <b>Foodie</b>
        </p>
      </div>

      <div className="navbar">
        <Link onClick={() => router("/")} className="active">
          Home
        </Link>
        {/* <a href="#">Link</a>
        <a href="#">Link</a> */}
        <a className="right">Cart</a>
      </div>
    </>
  );
}
