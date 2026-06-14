import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(savedCart);
  }, []);

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const checkout = () => {
    localStorage.setItem("orders", JSON.stringify(cartItems));
    localStorage.removeItem("cart");
    setCartItems([]);
    navigate("/orders");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6">My Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-xl">Cart is Empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow"
              >
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-green-600 font-bold">
                  ₹ {item.price}
                </p>
              </div>
            ))}
          </div>

          {/* ACTION BUTTONS (ONLY ONCE) */}
		  <div className="mt-6 flex gap-4">

		    <button
		      onClick={clearCart}
		      className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-lg transition"
		    >
		      Clear Cart
		    </button>

		    <button
		      onClick={checkout}
		      className="bg-black hover:bg-gray-900 text-white px-6 py-2 rounded-lg transition"
		    >
		      Checkout
		    </button>

		  </div>
        </>
      )}
    </div>
  );
}

export default Cart;