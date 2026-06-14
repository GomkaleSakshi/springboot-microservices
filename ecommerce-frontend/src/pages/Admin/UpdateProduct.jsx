import { useState } from "react";
import axios from "axios";

function UpdateProduct() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleUpdate = async () => {
    const token = localStorage.getItem("token");

    await axios.put(
      `http://localhost:8081/admin/product/${id}`,
      { name, price },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    alert("Product Updated");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Update Product</h1>

      <input
        placeholder="Product ID"
        className="border p-2 block mb-2"
        onChange={(e) => setId(e.target.value)}
      />

      <input
        placeholder="Name"
        className="border p-2 block mb-2"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Price"
        className="border p-2 block mb-2"
        onChange={(e) => setPrice(e.target.value)}
      />

      <button
        onClick={handleUpdate}
        className="bg-blue-600 text-white px-4 py-2"
      >
        Update
      </button>
    </div>
  );
}

export default UpdateProduct;