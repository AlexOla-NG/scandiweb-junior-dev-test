import React, { useState, useEffect } from "react";
import axios from "axios";
import { ISingleProduct } from "../components/SingleProduct/ISingleProduct";
import HomeDashboard from "../components/dashboards/HomeDashboard";
import SingleProduct from "../components/SingleProduct/SingleProduct";

const ProductList = () => {
  const [productList, setProductList] = useState<ISingleProduct[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  // STUB: load products
  const getProducts = async () => {
    // const url = "http://localhost/react-backend/api.php";
    const url = "https://juniortest-alexander-oweka.000webhostapp.com/api.php";

    axios
      .get(url)
      .then((res) => {
        // STUB: convert checked values to boolean
        let newData = res.data.map((item: any) => {
          if (item.checked === 0) {
            return { ...item, checked: false };
          }
          if (item.checked === 1) {
            return { ...item, checked: true };
          }
          return item;
        });

        setProductList(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // STUB: mass delete btn logic
  // filter out unchecked products,
  // get deleted product id, send to backend
  const deleteUsers = async () => {
    // const url = "http://localhost/react-backend/delete.php";
    const url =
      "https://juniortest-alexander-oweka.000webhostapp.com/delete.php";
    let dataObj = {};

    // STUB: filter out checked products
    let deletedProductList = productList.filter(
      (product) => product.checked === true
    );

    // STUB: get id of deleted products
    deletedProductList.forEach((product, index) => {
      let arr = Object.entries(product);
      let id = arr[0][1];
      let idKey = `id${index}`;

      dataObj = { ...dataObj, [idKey]: id };
    });

    const deleteMethod = {
      method: "POST", // we get the 'net::ERR_HTTP2_PROTOCOL_ERROR' err when this is set to 'DELETE'
      body: JSON.stringify(dataObj),
    };

    fetch(url, deleteMethod).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      getProducts();

      // console.log(response);
    });
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
