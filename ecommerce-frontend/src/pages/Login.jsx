import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8081/auth/login",
        { email, password }
      );

      console.log("LOGIN RESPONSE:", res.data);

      // If backend returns only token string
      const token = res.data;

      if (!token) {
        alert("Login failed: No token received");
        return;
      }

      // decode role from JWT (if you stored role inside token)
      let role = "ROLE_USER";
      try {
        const decoded = JSON.parse(atob(token.split(".")[1]));
        role = decoded.role || "ROLE_USER";
      } catch (err) {
        console.log("Token decode error:", err);
      }

      // SAVE IN LOCALSTORAGE
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem(
        "user",
        JSON.stringify({ email, role })
      );

      alert("Login Successful");

      // REDIRECT
      if (role === "ROLE_ADMIN") {
        navigate("/admin");
      } else {
        navigate("/");
      }

    } catch (err) {
      console.log("STATUS:", err.response?.status);
      console.log("DATA:", err.response?.data);
      console.log("ERROR:", err.message);
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-96"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 mb-4 w-full"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-4 w-full"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-black text-white w-full py-2 rounded hover:bg-gray-800"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;