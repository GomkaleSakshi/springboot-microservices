import { useState } from "react";
import axios from "axios";

function DeleteProduct() {
  const [id, setId] = useState("");

  const handleDelete = async () => {
    const token = localStorage.getItem("token");

    await axios.delete(
      `http://localhost:8081/admin/product/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    alert("Product Deleted Successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h2 className="text-2xl font-bold text-red-600 mb-6">
          Delete Product
        </h2>

        <input
          placeholder="Product ID"
          className="w-full border p-3 mb-4 rounded"
          onChange={(e) => setId(e.target.value)}
        />

        <button
          onClick={handleDelete}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          Delete Product
        </button>

      </div>
    </div>
  );
}

export default DeleteProduct;