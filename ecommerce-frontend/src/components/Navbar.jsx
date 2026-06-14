import { Link } from "react-router-dom";
import { isAdmin, isUser } from "../utils/auth";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div className="bg-white shadow-md px-10 py-4 flex justify-between items-center">

      <h1 className="text-3xl font-bold text-black">
        ShopEasy
      </h1>

      <div className="flex gap-6 text-lg font-medium">

        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>

        {/* USER ONLY LINKS */}
        {isUser() && (
          <>
            <Link to="/cart" className="hover:text-blue-500">
              Cart ({cart.length})
            </Link>

            <Link to="/orders" className="hover:text-blue-500">
              Orders
            </Link>
          </>
        )}

        {/* ADMIN ONLY LINKS */}
        {isAdmin() && (
          <Link to="/admin" className="hover:text-blue-500">
            Admin Panel
          </Link>
        )}

        {/* LOGIN / USER SECTION */}
        {user ? (
          <div className="flex items-center gap-4">

            <h2 className="text-green-600 font-bold">
              {user.email}
            </h2>

            <button
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("role");
                window.location.reload();
              }}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>

          </div>
        ) : (
          <>
            <Link to="/login" className="hover:text-blue-500">
              Login
            </Link>

            <Link to="/register" className="hover:text-blue-500">
              Register
            </Link>
          </>
        )}

      </div>
    </div>
  );
}

export default Navbar;