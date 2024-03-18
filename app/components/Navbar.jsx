import { Cart } from "./Cart";

import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo ">
        <h3>Ecomoman</h3>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <span className="cart-item-qty mb-10">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
