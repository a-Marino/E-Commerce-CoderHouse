import { useState, useEffect } from "react";
import { ProductsMock } from "../../../ProductsMock";
import { ItemListContainer } from "./ItemListContainer";
import "./ItemListContainer.css";

export const ItemListContainerContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = new Promise((res) => {
      res(ProductsMock);
    });

    fetchProducts
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <ItemListContainer products={products} />;
};
