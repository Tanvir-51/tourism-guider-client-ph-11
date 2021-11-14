import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
      });
  }, [myOrders]);

  const userOrder = myOrders.filter((order) => order.email === user.email);

  return (
    <div className="container my-5">
      <h2 className="text-success text-center my-5">My Orders</h2>
      <div className="mx-auto">
        {userOrder.map((orders) => (
          <MyOrder key={orders.key} orders={orders}></MyOrder>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
