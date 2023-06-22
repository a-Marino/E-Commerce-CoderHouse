import { useState, useEffect } from "react";
import { ProductsMock } from "../../../ProductsMock";
import { ItemListContainer } from "./ItemListContainer";
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";

export const ItemListContainerContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let filteredProducts = ProductsMock.filter(
      (product) => product.category === categoryName
    );

    const fetchProducts = new Promise((res) => {
      setTimeout(() => {
        res(categoryName ? filteredProducts : ProductsMock);
      }, 300);
    });

    fetchProducts
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryName]);

  return (
    <>
      {products.length > 0 ? (
        <ItemListContainer products={products} categoryName={categoryName} />
      ) : (
        <div className="min-h-screen  flex flex-col gap-5 items-center mt-32">
          <h1 className="text-center text-3xl font-bold">LOADING...</h1>
          <FadeLoader color="#ff1818" />
          <img
            src="https://res.cloudinary.com/dv8nczwtj/image/upload/v1684896617/Logo_jivlnb.png"
            alt="Logo"
            className="w-32"
          />
        </div>
      )}
    </>
  );
};
