import "./CartWidget.css";

export const CartWidget = () => {
  return (
    <div className="cart">
      <span className="text-lg font-semibold">Cart</span>
      <p className="cartCounter">2</p>
    </div>
  );
};
