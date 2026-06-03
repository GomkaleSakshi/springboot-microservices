import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {

  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
	
	const user =
	  JSON.parse(localStorage.getItem("user"));

	if (!user) {

	  alert("Please Login First");

	  navigate("/login");

	  return;

	}

    const items = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedItems = items.map((item) => ({
      ...item,
      quantity: item.quantity || 1
    }));

    setCartItems(updatedItems);

  }, []);

  // Increase Quantity
  const increaseQuantity = (index) => {

    const updatedCart = [...cartItems];

    updatedCart[index].quantity += 1;

    setCartItems(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

  };

  // Decrease Quantity
  const decreaseQuantity = (index) => {

    const updatedCart = [...cartItems];

    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    }

    setCartItems(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

  };

  // Remove Product
  const removeItem = (index) => {

    const updatedCart = cartItems.filter((_, i) => i !== index);

    setCartItems(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

  };

  // Total Price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (

    <div className="bg-gray-100 min-h-screen p-10">

      <h1 className="text-4xl font-bold mb-10 text-center">
        My Cart
      </h1>

      {cartItems.length === 0 ? (

        <h2 className="text-center text-2xl">
          Cart Is Empty
        </h2>

      ) : (

        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {cartItems.map((item, index) => (

              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow-lg"
              >

			  <img
			                  src={
			                    item.name === "Wireless Mouse"
			                      ? "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500"
			                      : item.name === "Gaming Keyboard"
			                      ? "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500"
			                      : item.name === "HD Monitor 24 inch"
			                      ? "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
			                      : item.name === "USB-C Hub"
			                      ? "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
			                      : item.name === "Laptop Stand"
			                      ? "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=500"
			                      : item.name === "Bluetooth Headphones"
			                      ? "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
			                      : item.name === "Portable SSD 1TB"
			                      ? "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500"
			                      : item.name === "Smartphone Case"
			                      ? "https://images.unsplash.com/photo-1601593346740-925612772716?w=500"
			                      : item.name === "Webcam 1080p"
			                      ? "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500"
			                      : item.name === "LED Desk Lamp"
			                      ? "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
			                      : item.name === "Power Bank 20000mAh"
			                      ? "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500"
			                      : item.name === "Wireless Charger"
			                      ? "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=500"
			                      : item.name === "Bluetooth Speaker"
			                      ? "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
			                      : item.name === "External Hard Disk 2TB"
			                      ? "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500"
			                      : item.name === "Gaming Chair"
			                      ? "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500"
			                      : item.name === "Office Table"
			                      ? "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
			                      : item.name === "Smart Watch"
			                      ? "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=500"
			                      : item.name === "Noise Cancelling Earbuds"
			                      ? "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
			                      : item.name === "Router Dual Band"
			                      ? "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=500"
			                      : item.name === "Graphics Tablet"
			                      ? "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=500"
			                      : item.name.toLowerCase().includes("iphone")
			                      ? "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500"
			                      : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
			                  }
			                  alt={item.name}
			                  className="rounded-lg mb-4 w-full h-48 object-cover"
			                />

                <h2 className="text-2xl font-bold">
                  {item.name}
                </h2>

                <p className="text-gray-600 mt-2">
                  {item.description}
                </p>

                <p className="text-green-600 text-2xl mt-3 font-bold">
                  ₹ {item.price}
                </p>

                {/* Quantity Buttons */}
                <div className="flex items-center gap-4 mt-4">

                  <button
                    onClick={() => decreaseQuantity(index)}
                    className="bg-gray-300 px-4 py-2 rounded-lg"
                  >
                    -
                  </button>

                  <span className="text-xl font-bold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(index)}
                    className="bg-gray-300 px-4 py-2 rounded-lg"
                  >
                    +
                  </button>

                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(index)}
                  className="mt-5 bg-red-500 text-white px-4 py-2 rounded-lg w-full hover:bg-red-600"
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

          <div className="mt-10 text-right">

            <h2 className="text-3xl font-bold">
              Total: ₹ {totalPrice}
            </h2>

			<button
			  onClick={() => {

			    const oldOrders =
			      JSON.parse(localStorage.getItem("orders")) || [];

			    const updatedOrders = [...oldOrders, ...cartItems];

			    localStorage.setItem(
			      "orders",
			      JSON.stringify(updatedOrders)
			    );

			    localStorage.removeItem("cart");

			    setCartItems([]);

			    alert("Order Placed Successfully");

			  }}
			  className="mt-5 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800"
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