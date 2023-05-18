import styles from "./CartWidget.module.css";

export const CartWidget = () => {
  return (
    <div className={styles.cart}>
      <span style={{ fontWeight: "600", fontSize: "large" }}>Cart</span>
      <p className={styles.cartCounter}>2</p>
    </div>
  );
};
