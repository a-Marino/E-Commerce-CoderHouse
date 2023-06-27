import { useState, useEffect } from "react";
import { ItemListContainer } from "./ItemListContainer";
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainerContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let customQuery;

    if (!categoryName) {
      customQuery = productsCollection;
    } else {
      customQuery = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(customQuery)
      .then((res) => {
        let products = res.docs.map((element) => {
          return {
            id: element.id,
            ...element.data(),
          };
        });
        setProducts(products);
      })
      .catch((err) => console.log(err));
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
