import React, { useState, useEffect } from "react";
import axios from "axios";
import { ISingleProduct } from "../components/SingleProduct/ISingleProduct";
import HomeDashboard from "../components/dashboards/HomeDashboard";
import SingleProduct from "../components/SingleProduct/SingleProduct";
// import { productListData } from "./mocks/mock";

// TODO: stopped here
// fix deleteUsers logic

const ProductList = () => {
  const [productList, setProductList] = useState<ISingleProduct[]>([]);
  // const [error, setError] = useState<string>("");

  useEffect(() => {
    const url = "http://localhost/react-backend/api.php";

    axios
      .get(url)
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // STUB: mass delete btn logic
  // filter out unchecked products, set as new productList state
  const deleteUsers = () => {
    const bools = [false, true];
    let newProductList = productList.filter(
      (product) => product.checked === bools[0]
    );

    console.log(newProductList);

    // setProductList(newProductList);
  };

  // STUB: toggle user checked prop
  const toggleChecked = (id: number) => {
    let newProductList = productList.map((product) => {
      if (product.id === id) {
        return { ...product, checked: !product.checked };
      }

      return product;
    });
    setProductList(newProductList);
  };

  return (
    <div>
      <HomeDashboard deleteUsers={deleteUsers} />
      <main className="product-wrapper">
        {productList.length > 0 &&
          productList.map((product) => {
            return (
              <SingleProduct
                key={product.id}
                handleToggle={toggleChecked}
                {...product}
              />
            );
          })}
      </main>
    </div>
  );
};

export default ProductList;
