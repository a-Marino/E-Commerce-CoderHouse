import styles from "./NavBar.module.css";
import { CartWidget } from "../common/CartWidget";

export const NavBar = () => {
  return (
    <nav>
      {/* Logo */}
      <img src="src/assets/Logo.png" alt="Logo" className={styles.logo} />
      {/* Secciones */}
      {/* Marcas */}
      <div className={styles.brands}>
        <a href="#">Apple</a>
        <a href="#">Samsung</a>
        <a href="#">Xiaomi</a>
        <a href="#">Motorola</a>
      </div>
      {/* Cart */}
      <CartWidget />
    </nav>
  );
};
