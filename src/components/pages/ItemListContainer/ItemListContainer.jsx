import { useState, useEffect } from "react";
import { products } from "../../../ProductsMock";
import { ProductCard } from "../../common/ProductCard/ProductCard";
import "./ItemListContainer.css";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProducts = new Promise((res) => {
      res(products);
    });

    fetchProducts
      .then((res) => setItems(res))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="min-h-screen mt-32">
      <h1 className="text-3xl text-center font-bold">{props.greeting}</h1>
      <div className="cardContainer flex flex-wrap justify-center gap-5 p-5">
        {items.map((el) => {
          return <ProductCard key={el.id} item={el} />;
        })}
      </div>
    </div>
  );
};
