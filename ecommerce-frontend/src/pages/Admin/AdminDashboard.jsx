import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Link to="/admin/add-product"
          className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition border-t-4 border-green-500">
          <h2 className="text-2xl font-bold text-green-600">Add Product</h2>
          <p className="text-gray-500 mt-2">Create new products</p>
        </Link>

        <Link to="/admin/update-product"
          className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition border-t-4 border-blue-500">
          <h2 className="text-2xl font-bold text-blue-600">Update Product</h2>
          <p className="text-gray-500 mt-2">Edit existing products</p>
        </Link>

        <Link to="/admin/delete-product"
          className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition border-t-4 border-red-500">
          <h2 className="text-2xl font-bold text-red-600">Delete Product</h2>
          <p className="text-gray-500 mt-2">Remove products</p>
        </Link>

      </div>
    </div>
  );
}

export default AdminDashboard;