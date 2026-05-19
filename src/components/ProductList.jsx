import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/CartSlice.jsx";

const plantCategories = [
  {
    category: "Tropical Plants",
    plants: [
      { id: 1, name: "Monstera Deliciosa", price: 25, image: "https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?auto=format&fit=crop&w=600&q=80" },
      { id: 2, name: "Bird of Paradise", price: 35, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=600&q=80" },
      { id: 3, name: "Calathea Orbifolia", price: 22, image: "https://images.unsplash.com/photo-1620127682229-33388276e540?auto=format&fit=crop&w=600&q=80" },
      { id: 4, name: "Peace Lily", price: 18, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b25?auto=format&fit=crop&w=600&q=80" },
      { id: 5, name: "Philodendron Brasil", price: 19, image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80" },
      { id: 6, name: "Fiddle Leaf Fig", price: 40, image: "https://images.unsplash.com/photo-1597055181300-e3633a917c65?auto=format&fit=crop&w=600&q=80" },
    ],
  },
  {
    category: "Succulents",
    plants: [
      { id: 7, name: "Aloe Vera", price: 12, image: "https://images.unsplash.com/photo-1596547609652-9cf5d8c0c9cb?auto=format&fit=crop&w=600&q=80" },
      { id: 8, name: "Echeveria", price: 10, image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80" },
      { id: 9, name: "Jade Plant", price: 14, image: "https://images.unsplash.com/photo-1491147334573-44cbb4602074?auto=format&fit=crop&w=600&q=80" },
      { id: 10, name: "String of Pearls", price: 16, image: "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=600&q=80" },
      { id: 11, name: "Haworthia", price: 11, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80" },
      { id: 12, name: "Zebra Cactus", price: 13, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80" },
    ],
  },
  {
    category: "Air Purifying Plants",
    plants: [
      { id: 13, name: "Snake Plant", price: 20, image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=600&q=80" },
      { id: 14, name: "Spider Plant", price: 15, image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80" },
      { id: 15, name: "Boston Fern", price: 17, image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=600&q=80" },
      { id: 16, name: "Pothos", price: 14, image: "https://images.unsplash.com/photo-1626964644767-4f330f0a0d84?auto=format&fit=crop&w=600&q=80" },
      { id: 17, name: "Rubber Plant", price: 28, image: "https://images.unsplash.com/photo-1616500166943-0f91959c3e91?auto=format&fit=crop&w=600&q=80" },
      { id: 18, name: "ZZ Plant", price: 24, image: "https://images.unsplash.com/photo-1586093248292-4e0dfc7b0082?auto=format&fit=crop&w=600&q=80" },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <main className="product-page">
      <h1>Shop Houseplants</h1>
      <p>Browse our plant collection and add your favorites to the shopping cart.</p>

      {plantCategories.map((group) => (
        <section key={group.category}>
          <h2 className="category-title">{group.category}</h2>
          <div className="product-grid">
            {group.plants.map((plant) => (
              <article className="product-card" key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p className="price">${plant.price}</p>
                <button
                  onClick={() => dispatch(addItem(plant))}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? "Added to Cart" : "Add to Cart"}
                </button>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
