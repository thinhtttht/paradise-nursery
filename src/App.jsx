import { useState } from "react";
import { useSelector } from "react-redux";
import AboutUs from "./components/AboutUs.jsx";
import ProductList from "./components/ProductList.jsx";
import CartItem from "./components/CartItem.jsx";

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const handleGetStarted = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleContinueShopping = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleShowCart = () => {
    setShowProductList(false);
    setShowCart(true);
  };

  const handleShowHome = () => {
    setShowProductList(false);
    setShowCart(false);
  };

  return (
    <>
      <nav className="navbar">
        <button className="logo nav-link-button" onClick={handleShowHome}>
          Paradise Nursery
        </button>

        <div className="nav-links">
          <button className="nav-link-button" onClick={handleShowHome}>
            Home
          </button>

          <button className="nav-link-button" onClick={handleGetStarted}>
            Plants
          </button>

          <button className="nav-link-button cart-link" onClick={handleShowCart}>
            Cart <span>{totalItems}</span>
          </button>
        </div>
      </nav>

      {!showProductList && !showCart && (
        <>
          <section className="landing-page background-image">
            <div className="landing-card">
              <h1>Paradise Nursery</h1>
              <p>
                Bring nature into your home with beautiful indoor plants
                selected for fresh air, calm spaces, and everyday happiness.
              </p>

              <button onClick={() => setShowProductList(true)}>
                Get Started
              </button>
            </div>
          </section>

          <AboutUs />
        </>
      )}

      {showProductList && !showCart && (
        <ProductList onViewCart={handleShowCart} />
      )}

      {showCart && (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </>
  );
}

export default App;
