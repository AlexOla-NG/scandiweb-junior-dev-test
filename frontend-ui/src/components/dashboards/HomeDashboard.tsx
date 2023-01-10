import React from "react";
import { useNavigate } from "react-router-dom";

// TODO: add logic to mass delete btn
// logic will depend on data from backend
// complete when backend is finished

const HomeDashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("add-product");
  };

  return (
    <header>
      <div className="dashboard-wrapper">
        <h1>Product List</h1>
        <div className="btn-wrapper">
          <button className="btn" onClick={handleClick}>
            ADD
          </button>
          <button className="btn" id="delete-product-btn">
            MASS DELETE
          </button>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default HomeDashboard;
