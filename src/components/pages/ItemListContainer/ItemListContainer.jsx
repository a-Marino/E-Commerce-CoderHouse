import "./ItemListContainer.css";

export const ItemListContainer = (props) => {
  return (
    <div className="min-h-screen mt-32">
      <h1 className="text-3xl text-center font-bold">{props.greeting}</h1>
    </div>
  );
};
