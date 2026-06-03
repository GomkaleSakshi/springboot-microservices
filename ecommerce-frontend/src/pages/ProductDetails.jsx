
import { useLocation, useNavigate } from "react-router-dom";

function ProductDetails() {

  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;
  

  const addToCart = () => {

    let cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product Added To Cart");

    navigate("/cart");

  };
  return (

    <div className="bg-gray-100 min-h-screen p-10">

      <div className="bg-white p-10 rounded-xl shadow-xl max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

	  <img
	                 src={
	                   product.name === "Wireless Mouse"
	                     ? "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500"
	                     : product.name === "Gaming Keyboard"
	                     ? "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500"
	                     : product.name === "HD Monitor 24 inch"
	                     ? "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
	                     : product.name === "USB-C Hub"
	                     ? "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
	                     : product.name === "Laptop Stand"
	                     ? "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=500"
	                     : product.name === "Bluetooth Headphones"
	                     ? "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
	                     : product.name === "Portable SSD 1TB"
	                     ? "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500"
	                     : product.name === "Smartphone Case"
	                     ? "https://images.unsplash.com/photo-1601593346740-925612772716?w=500"
	                     : product.name === "Webcam 1080p"
	                     ? "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500"
	                     : product.name === "LED Desk Lamp"
	                     ? "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
	                     : product.name === "Power Bank 20000mAh"
	                     ? "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500"
	                     : product.name === "Wireless Charger"
	                     ? "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=500"
	                     : product.name === "Bluetooth Speaker"
	                     ? "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
	                     : product.name === "External Hard Disk 2TB"
	                     ? "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500"
	                     : product.name === "Gaming Chair"
	                     ? "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500"
	                     : product.name === "Office Table"
	                     ? "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
	                     : product.name === "Smart Watch"
	                     ? "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=500"
	                     : product.name === "Noise Cancelling Earbuds"
	                     ? "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
	                     : product.name === "Router Dual Band"
	                     ? "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=500"
	                     : product.name === "Graphics Tablet"
	                     ? "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=500"
	                     : product.name.toLowerCase().includes("iphone")
	                     ? "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500"
	                     : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
	                 }
	                 alt={product.name}
	                 className="rounded-lg mb-4 w-full h-48 object-cover"
	               />
        <div>

          <h1 className="text-4xl font-bold mb-5">
            {product.name}
          </h1>

          <p className="text-gray-600 text-lg mb-5">
            {product.description}
          </p>

          <h2 className="text-3xl font-bold text-green-600 mb-5">
            ₹ {product.price}
          </h2>

          <p className="text-xl mb-5">
            Stock: {product.stock}
          </p>

          <button
            onClick={addToCart}
            className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800"
          >
            Add To Cart
          </button>

        </div>

      </div>

    </div>

  );
}

export default ProductDetails;