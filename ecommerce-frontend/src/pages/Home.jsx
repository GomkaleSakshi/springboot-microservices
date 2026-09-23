import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://springboot-microservices-product.onrender.com/product/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Product API Error:", error));
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome To ShopEasy</h1>
        <p className="text-xl">Best Ecommerce Website For Shopping</p>
      </div>

      <div className="p-10">
        <h2 className="text-3xl font-bold mb-8 text-center">Products</h2>

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
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-5 rounded-xl shadow-lg"
            >
              <img
                src={product.image || product.imageurl}
                alt={product.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />

              <h3 className="text-xl font-bold">{product.name}</h3>

              <p className="text-gray-600 mt-2">{product.description}</p>

              <p className="text-2xl font-bold text-green-600 mt-3">
                ₹ {product.price}
              </p>

              <button
                onClick={() =>
                  navigate("/product-details", { state: product })
                }
                className="mt-4 bg-black text-white px-4 py-2 rounded-lg w-full"
              >
                View Product
              </button>

              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;