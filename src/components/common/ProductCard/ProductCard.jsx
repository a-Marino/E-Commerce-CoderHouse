import "./ProductCard.css";

export const ProductCard = ({ item }) => {
  return (
    <div key={item.id} className="card cursor-pointer ">
      <img
        src={item.img}
        alt={item.title}
        className="h-72 w-auto p-2 flex m-auto"
      />
      <div className="productInfo flex flex-row overflow-hidden">
        <div className="flex flex-col">
          <span className="font-bold whitespace-nowrap">{item.title}</span>
          <span>{item.space}</span>
          <span className="text-sm">{item.screen}</span>
        </div>
        <span className="ml-auto mt-auto font-semibold">{item.price}USD</span>
      </div>
    </div>
  );
};
