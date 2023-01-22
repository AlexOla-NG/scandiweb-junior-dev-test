import React from "react";
import { useNavigate } from "react-router-dom";

interface IHomeDashboard {
  deleteUsers(): void;
}

const HomeDashboard = ({ deleteUsers }: IHomeDashboard) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("add-product");
  };

  const handleDelete = () => {
    deleteUsers();
  };

  return (
    <header>
      <div className="dashboard-wrapper">
        <h1>Product List</h1>
        <div className="btn-wrapper">
          <button className="btn" onClick={handleClick}>
            ADD
          </button>
          <button
            className="btn"
            id="delete-product-btn"
            onClick={handleDelete}
          >
            MASS DELETE
          </button>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default HomeDashboard;
