import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    if (email && password) {

      localStorage.setItem(
        "user",
        JSON.stringify({
          email: email
        })
      );

      alert("Login Successful");

      navigate("/");

    } else {

      alert("Please Fill All Fields");

    }

  };
  return (

    <div className="bg-gray-100 min-h-screen flex justify-center items-center">

      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-xl shadow-xl w-96"
      >

        <h1 className="text-3xl font-bold mb-8 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg mb-5"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-lg mb-5"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
        >
          Login
        </button>

      </form>

    </div>

  );
}

export default Login;