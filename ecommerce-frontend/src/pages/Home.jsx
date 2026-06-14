import { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";


function Home() {

  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  
  const [search, setSearch] = useState("");
  
  const API = axios.create({
    baseURL: "http://localhost:8080"
  });
  

  // Fetch Products From Backend
  useEffect(() => {

    API.get("/product/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

   

  // Add To Cart Function
  const addToCart = (product) => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

	navigate("/cart");
	window.location.reload();
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <div className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome To ShopEasy
        </h1>

        <p className="text-xl">
          Best Ecommerce Website For Shopping
        </p>
      </div>

      {/* Product Section */}
      <div className="p-10">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Products
        </h2>
		
		
		<div className="mb-8 flex justify-center">

		  <input
		    type="text"
		    placeholder="Search Products..."
		    value={search}
		    onChange={(e) => setSearch(e.target.value)}
		    className="w-full md:w-1/2 p-3 border rounded-xl shadow"
		  />

		</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

		{products
		  .filter((product) =>
		    product.name.toLowerCase().includes(search.toLowerCase())
		  )
		  .map((product) => (
			<div
			  key={product.id}
			  onClick={() =>
			    navigate("/product-details", {
			      state: product,
			    })
			  }
              className="bg-white p-5 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >

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

              <h3 className="text-xl font-bold">
                {product.name}
              </h3>

              <p className="text-gray-600 mt-2">
                {product.description}
              </p>

              <p className="text-2xl font-bold text-green-600 mt-3">
                ₹ {product.price}
              </p>

			  <button
			    onClick={(e) => {
			      e.stopPropagation();
			      navigate("/product-details", {
			        state: product,
			      });
			    }}
			    className="mt-4 bg-black text-white px-4 py-2 rounded-lg w-full hover:bg-gray-800"
			  >
			    View Product
			  </button>
            </div>

          ))}

        </div>
      </div>
    </div>
  );
}

export default Home;