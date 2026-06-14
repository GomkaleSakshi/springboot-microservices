import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Orders() {
	const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const user =
      JSON.parse(localStorage.getItem("user"));

    if (!user) {

      alert("Please Login First");

      navigate("/login");

      return;

    }

	const savedOrders =
	   JSON.parse(localStorage.getItem("orders")) || [];
       console.log(savedOrders);
	   setOrders(savedOrders);

	 
  
 }, []);
 
  return (

    <div className="bg-gray-100 min-h-screen p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        My Orders
      </h1>

      {orders.length === 0 ? (

        <h2 className="text-center text-2xl">
          No Orders Found
        </h2>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {orders.map((item, index) => (

            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-lg"
            >

			                       <img
			
					                  src={
					                    item.name === "Wireless Mouse"
					                      ? "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500"
					                      : item.name === "Gaming Keyboard"
					                      ? "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500"
					                      : item.name === "HD Monitor 24 inch"
					                      ? "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
					                      : item.name === "USB-C Hub"
					                      ? "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
					                      : item.name === "Laptop Stand"
					                      ? "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=500"
					                      : item.name === "Bluetooth Headphones"
					                      ? "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
					                      : item.name === "Portable SSD 1TB"
					                      ? "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500"
					                      : item.name === "Smartphone Case"
					                      ? "https://images.unsplash.com/photo-1601593346740-925612772716?w=500"
					                      : item.name === "Webcam 1080p"
					                      ? "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500"
					                      : item.name === "LED Desk Lamp"
					                      ? "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
					                      : item.name === "Power Bank 20000mAh"
					                      ? "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500"
					                      : item.name === "Wireless Charger"
					                      ? "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=500"
					                      : item.name === "Bluetooth Speaker"
					                      ? "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
					                      : item.name === "External Hard Disk 2TB"
					                      ? "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500"
					                      : item.name === "Gaming Chair"
					                      ? "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500"
					                      : item.name === "Office Table"
					                      ? "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
					                      : item.name === "Smart Watch"
					                      ? "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=500"
					                      : item.name === "Noise Cancelling Earbuds"
					                      ? "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
					                      : item.name === "Router Dual Band"
					                      ? "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=500"
					                      : item.name === "Graphics Tablet"
					                      ? "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=500"
					                      : item.name.toLowerCase().includes("iphone")
					                      ? "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500"
					                      : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
					                  }
					                  alt={item.name}
					                  className="rounded-lg mb-4 w-full h-48 object-cover"
					                />
              <h2 className="text-2xl font-bold">
                {item.name}
              </h2>

              <p className="text-gray-600 mt-2">
                {item.description}
              </p>

              <p className="text-green-600 text-2xl mt-3 font-bold">
                ₹ {item.price}
              </p>

              <p className="mt-3 text-lg font-bold">
                Quantity: {item.quantity}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>

  );
}

export default Orders;