import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../features/CartSlice.jsx";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const decreaseQuantity = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const checkout = () => {
    alert("Coming Soon");
  };

  return (
    <main className="cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty.</h2>
          <Link to="/plants">
            <button>Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <section className="cart-row" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h2>{item.name}</h2>
                <p>Unit Price: ${item.price}</p>
                <p>Total Cost: ${item.price * item.quantity}</p>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item)}>-</button>
                  <strong>{item.quantity}</strong>
                  <button onClick={() => increaseQuantity(item)}>+</button>
                </div>

                <button
                  className="delete-button"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
              </div>
            </section>
          ))}

          <section className="cart-summary">
            <h2>Total Cart Amount: ${totalAmount}</h2>
            <div className="cart-actions">
              <Link to="/plants">
                <button>Continue Shopping</button>
              </Link>
              <button onClick={checkout}>Checkout</button>
            </div>
          </section>
        </>
      )}
    </main>
  );
}

export default CartItem;
