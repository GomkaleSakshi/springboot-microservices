import { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = async () => {
    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:8081/admin/product",
      { name, price },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    alert("Product Added Successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h2 className="text-2xl font-bold text-green-600 mb-6">
          Add Product
        </h2>

        <input
          placeholder="Product Name"
          className="w-full border p-3 mb-4 rounded"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Price"
          className="w-full border p-3 mb-4 rounded"
          onChange={(e) => setPrice(e.target.value)}
        />

        <button
          onClick={handleAdd}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Add Product
        </button>

      </div>
    </div>
  );
}

export default AddProduct;