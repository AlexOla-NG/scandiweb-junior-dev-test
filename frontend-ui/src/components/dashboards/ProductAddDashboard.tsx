import React from "react";
import { useNavigate } from "react-router-dom";

// TODO: add logic to mass delete btn

const ProductAddDashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <header>
      <div className="dashboard-wrapper">
        <h1>Product Add</h1>
        <div className="btn-wrapper">
          <button className="btn" onClick={handleClick}>
            Save
          </button>
          <button className="btn" onClick={handleClick}>
            Cancel
          </button>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default ProductAddDashboard;
