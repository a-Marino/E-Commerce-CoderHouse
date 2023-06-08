import { useState, useEffect } from "react";
import { ProductsMock } from "../../../ProductsMock";
import { ItemListContainer } from "./ItemListContainer";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

export const ItemListContainerContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let filteredProducts = ProductsMock.filter(
      (product) => product.category === categoryName
    );

    const fetchProducts = new Promise((res) => {
      res(categoryName ? filteredProducts : ProductsMock);
    });

    fetchProducts
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryName]);

  return <ItemListContainer products={products} categoryName={categoryName} />;
};
