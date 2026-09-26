import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Fetch products from deployed Product Service
  useEffect(() => {
    fetch(
      "https://springboot-microservices-product.onrender.com/product/products"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Product API Error:", error);
        setProducts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    navigate("/cart");
  };

  // Search products
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <div className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome To ShopEasy
        </h1>

        <p className="text-xl text-gray-300">
          Best Ecommerce Website For Shopping
        </p>
      </div>

      {/* Product Section */}
      <div className="p-10">

        <h2 className="text-3xl font-bold mb-8 text-center text-black">
          Products
        </h2>

        {/* Search */}
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {loading ? (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500 text-lg">
                Loading products...
              </p>
            </div>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >

                {/* Product Image */}
                <img
                  src={`https://placehold.co/600x400?text=${encodeURIComponent(
                    product.name
                  )}`}
                  alt={product.name}
                  className="rounded-xl mb-4 w-full h-48 object-cover"
                />

                {/* Product Name */}
                <h3 className="text-xl font-bold text-black">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mt-2 line-clamp-2">
                  {product.description}
                </p>

                {/* Price */}
                <p className="text-2xl font-bold text-gray-900 mt-4">
                  ₹ {product.price}
                </p>

                {/* View Product */}
                <button
                  onClick={() =>
                    navigate("/product-details", {
                      state: product,
                    })
                  }
                  className="mt-5 bg-black text-white px-4 py-2.5 rounded-lg w-full hover:bg-gray-800 transition"
                >
                  View Product
                </button>

                {/* Add To Cart */}
                <button
                  onClick={() => addToCart(product)}
                  className="mt-3 bg-white text-black border border-gray-400 px-4 py-2.5 rounded-lg w-full hover:bg-gray-100 transition"
                >
                  Add To Cart
                </button>

              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500 text-lg">
                No products found.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Home;