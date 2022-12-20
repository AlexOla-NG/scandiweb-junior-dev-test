import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "./views/ProductList";
import ProductAdd from "./views/ProductAdd";
import Error from "./views/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="addproduct" element={<ProductAdd />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
