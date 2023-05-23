import "./ItemListContainer.css";

export const ItemListContainer = (props) => {
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl text-center font-bold mt-10">{props.greeting}</h1>
    </div>
  );
};
