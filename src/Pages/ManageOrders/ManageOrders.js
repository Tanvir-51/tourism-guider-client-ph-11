import React, { useEffect, useState } from "react";
import ManageOrder from "../ManageOrder/ManageOrder";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  // load all booking
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  return (
    // all booking container
    <div className="container my-5">
      <h2 className="text-danger text-center my-5">All Orders</h2>
      <div className="mx-auto">
        {orders.map((order) => (
          <ManageOrder key={order.id} order={order}></ManageOrder>
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
