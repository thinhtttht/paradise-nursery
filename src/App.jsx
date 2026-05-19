import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./components/AboutUs.jsx";
import ProductList from "./components/ProductList.jsx";
import CartItem from "./components/CartItem.jsx";

function Navbar() {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <nav className="navbar">
      <Link className="logo" to="/">Paradise Nursery</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart" className="cart-link">Cart 🛒 <span>{totalItems}</span></Link>
      </div>
    </nav>
  );
}

function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="landing-page">
      <section className="landing-card">
        <h1>Paradise Nursery</h1>
        <p>
          Bring nature into your home with beautiful indoor plants selected for
          fresh air, calm spaces, and everyday happiness.
        </p>
        <button onClick={() => navigate("/plants")}>Get Started</button>
      </section>
    </main>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><LandingPage /><AboutUs /></>} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </>
  );
}

export default App;
